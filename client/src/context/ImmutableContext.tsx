import React, {
  createContext,
  useContext,
  ReactNode,
  useEffect,
  useState,
  Dispatch,
} from "react";
import {
  CHAIN_NAME,
  CLIENT,
  LOGOUT_URL,
  PUBLISHABLE_KEY,
  passportInstance,
} from "../config";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { ImxConnectionDataType, Provider, UserProfileType } from "../types";
import { checkout, config, passport ,x} from "@imtbl/sdk";
import { ProviderEvent } from "@imtbl/sdk/passport";
import { ethers } from "ethers";
import { Wallet } from '@ethersproject/wallet';

interface IMXContextType {
  userProfileData: UserProfileType;
  imxConnectionData: ImxConnectionDataType;
  userInventoryData: any | null;
  inventoryDataLoading: boolean;
  singleNftData: any | null;
  setUserProfileData: Dispatch<UserProfileType>;
  setImxConnectionData: Dispatch<ImxConnectionDataType>;

  getUserData: () => void;
  Connect__Passport__Handle: () => Promise<void>;
  Logout_Passport_Handle: () => void;
  loginSuccessCallback: () => void;
  logoutSuccessCallback: () => void;
  getSingleNftData: (contractAddress: string, tokenId: string) => Promise<void>;

  navigate: NavigateFunction;
}
const IMXContext = createContext<IMXContextType | undefined>(undefined);
interface IMXContextProviderProps {
  children: ReactNode;
}

export const IMXContextProvider: React.FC<IMXContextProviderProps> = ({
  children,
}) => {
  //!==================== STATES =================
  const navigate = useNavigate();
  const [PROVIDER, SET_PROVIDER] = useState<Provider | null>(null);
  const [connectModal, setConnectModal] =
    useState<checkout.Widget<typeof checkout.WidgetType.CONNECT>>();

  const [userProfileData, setUserProfileData] =
    useState<UserProfileType>(undefined);
  const [imxConnectionData, setImxConnectionData] =
    useState<ImxConnectionDataType>(null);
  const [inventoryDataLoading, setinventoryDataLoading] = useState(false);
  const [userInventoryData, setUserInventoryData] = useState<any | null>(null);
  const [singleNftData, setsingleNftData] = useState<any | null>(null);

  //!==================== USER WALLET CONNECTION AND PROVIDERS =================


async function sign(passportInstance: passport.Passport) {

    const provider = passportInstance.connectEvm();
    const web3Provider = new ethers.providers.Web3Provider(provider);
    const signer = web3Provider.getSigner();
    // const chainId = 13371; // zkEVM mainnet 
    const chainId = 13473; // zkEVM testnet 
    const address = await signer.getAddress();

    // Define our "domain separator" to ensure user signatures are unique across apps/chains
    const domain = {
        name: 'Ether Mail',
        version: '1',
        chainId,
        verifyingContract: address,
    };

    const types = {
        Person: [
            { name: 'name', type: 'string' },
            { name: 'wallet', type: 'address' },
        ],
        Mail: [
            { name: 'from', type: 'Person' },
            { name: 'to', type: 'Person' },
            { name: 'contents', type: 'string' },
        ]
    };

    const message = {
        from: {
            name: 'Cow',
            wallet: '0xCD2a3d9F938E13CD947Ec05AbC7FE734Df8DD826',
        },
        to: {
            name: 'Bob',
            wallet: '0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB',
        },
        contents: 'Hello, Bob!',
    };

    let signature: string;
    try {
        signature = await signer._signTypedData(domain, types, message);
        console.log("signature: ", signature);
    } catch (error: any) {
        // Handle user denying signature
        if (error.code === 4001){

        }
    }

}

  const getUserData = async () => {
    try {
      const userInfo: UserProfileType = await passportInstance.getUserInfo();
      const connectEvmProvider = passportInstance.connectEvm();
      console.log("getUserData", {
        userInfo,
        connectEvmProvider
      });
      
      
      if (userInfo) {

        try {
          const accounts = await connectEvmProvider.request({ method: "eth_requestAccounts" });
          console.log(accounts)
        } catch (error) {
          console.log(error);
        }
        setUserProfileData(userInfo);
        const linkedAddresses = await passportInstance.getLinkedAddresses();

        // const provider = new ethers.providers.Web3Provider(connectEvmProvider);
        // SET_PROVIDER(provider)
        // const signer = provider.getSigner(0);
        // const address = await signer.getAddress();
        // const signer = provider._getAddress();
        // const avatar = provider.getAvatar();
      
        // const connectImxProvider = await passportInstance.connectImx();
        // const signers = await connectImxProvider.isRegisteredOnchain();
        // const signers1 = await connectImxProvider.isRegisteredOffchain();

        // const accessToken = await passportInstance.getAccessToken();
        // const idToken = await passportInstance.getIdToken();
        // const _address = await provider.getAddress();

        console.log("getUserData", {
          // userInfo,
          // provider2,
          // provider,
          linkedAddresses,
        });
        // console.log("getUserData", {
        //   signer
        // });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const Connect__Passport__Handle = async () => {
    try {
      const baseConfig1 = {
        environment: config.Environment.SANDBOX,
        publishableKey: PUBLISHABLE_KEY,
      };

      const checkoutSDK1 = new checkout.Checkout({
        baseConfig: baseConfig1,
        passport: passportInstance,
      });
      const widgets = await checkoutSDK1.widgets({
        config: { theme: checkout.WidgetTheme.DARK },
      });
      const connectModal = widgets.create(checkout.WidgetType.CONNECT);
      setConnectModal(connectModal);
    } catch (error) {
      console.error(error);
    } finally {
    }
  };

  const Logout_Passport_Handle = async () => {
    navigate("/passportlogout");
  };

  const loginSuccessCallback = async () => {
    passportInstance.loginCallback();
    navigate("/");
  };

  const logoutSuccessCallback = async () => {
    await passportInstance.logoutSilentCallback(LOGOUT_URL);
    setUserProfileData(undefined);
    setImxConnectionData(null);
    navigate("/");
  };

  //!==================== USER WALLET INVENTORY =================

  const getUserInventory = async (
    accountAddress: string,
    pageCursor?: string
    // oldData?:any[]
  ) => {
    try {
      setinventoryDataLoading(true);
      const response = await CLIENT.listNFTsByAccountAddress({
        chainName: CHAIN_NAME,
        accountAddress,
        pageCursor,
      });
      setUserInventoryData(response);
    } catch (error) {
      console.error(error);
      setUserInventoryData(null);
    } finally {
      setinventoryDataLoading(false);
    }
  };

  //!==================== SINGLE NFT DATA =================

  const getSingleNftData = async (contractAddress: string, tokenId: string) => {
    try {
      const nftData = await CLIENT.getNFT({
        contractAddress,
        tokenId,
        chainName: CHAIN_NAME,
      });
      const nftOwnerData = await CLIENT.listNFTOwners({
        contractAddress,
        tokenId,
        chainName: CHAIN_NAME,
      });
      const nftActivitiesData = await CLIENT.listActivities({
        contractAddress,
        tokenId,
        chainName: CHAIN_NAME,
      });
      const result = nftData?.result;
      const owners = nftOwnerData?.result;
      const actvities = nftActivitiesData?.result;
      setsingleNftData({ ...result, owners, actvities });
    } catch (error) {
      console.error(error);
      setsingleNftData(null);
    }
  };

  //!==================== EFFECT HOOKS AND INITIAL CALLS =================

  useEffect(() => {
    // const contractAddress = "0x1f7072f8c22f87d89aa27329094cdc04dcd7f1cc";
    // const accountAddress = "0x5cbD5063DdaE154c546860e2A4D2C16E2e1C786c";
    // const accountAddress = "0x808f0597D8B83189ED43d61d40064195F71C0D15";
    //    listCollectionsByNFTOwner(CLIENT,chainName,accountAddress,contractAddress)
    // getUserInventory(accountAddress);

    getUserData();
  }, []);

  useEffect(() => {
    console.log("imxConnectionData", imxConnectionData);
    if (imxConnectionData) {
      getUserData();
    }
  }, [imxConnectionData]);

  useEffect(() => {
    if (!connectModal) return;

    connectModal.mount("connectModal");

    connectModal.addListener(
      checkout.ConnectEventType.SUCCESS,
      (data: ImxConnectionDataType) => {
        setImxConnectionData(data);
        navigate("/");

        // connectModal.unmount();
      }
    );
    connectModal.addListener(
      checkout.ConnectEventType.FAILURE,
      (data: checkout.ConnectionFailed) => {
        console.log("failure", data);
        setImxConnectionData(null);
      }
    );
    connectModal.addListener(checkout.ConnectEventType.CLOSE_WIDGET, () => {
      getUserData();
      connectModal.unmount();
      navigate("/");
    });
  }, [connectModal]);


  PROVIDER && PROVIDER.on(ProviderEvent.ACCOUNTS_CHANGED, (accounts: string[]) => {
    console.log(accounts); // ['0x...']
  });

  const value: IMXContextType = {
    userProfileData,
    imxConnectionData,
    userInventoryData,
    inventoryDataLoading,
    singleNftData,
    setImxConnectionData,
    getUserData,
    Connect__Passport__Handle,
    Logout_Passport_Handle,
    setUserProfileData,
    getSingleNftData,
    navigate,
    loginSuccessCallback,
    logoutSuccessCallback,
  };

  return <IMXContext.Provider value={value}>{children}</IMXContext.Provider>;
};

export const useIMXContext = () => {
  const context = useContext(IMXContext);
  if (!context) {
    throw new Error("useIMXContext must be used within a IMXContextProvider");
  }
  return context;
};
