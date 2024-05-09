import React, {
  createContext,
  useContext,
  ReactNode,
  useEffect,
  useState,
  Dispatch,
} from "react";
import { CHAIN_NAME, CLIENT, LOGOUT_URL, PUBLISHABLE_KEY, passportInstance } from "../config";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { ImxConnectionDataType, UserProfileType } from "../types";
import { checkout, config } from "@imtbl/sdk";


interface IMXContextType {
  userProfileData: UserProfileType;
  imxConnectionData: ImxConnectionDataType;
  userInventoryData: any | null;
  inventoryDataLoading:boolean;
  singleNftData: any | null;
  setUserProfileData: Dispatch<UserProfileType>;
  setImxConnectionData: Dispatch<ImxConnectionDataType>;

  getUserData: () => void;
  Connect__Passport__Handle:() => Promise<void>,
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
      
  const [connectModal, 
    setConnectModal
  ] =
    useState<checkout.Widget<typeof checkout.WidgetType.CONNECT>>();

  const [userProfileData, setUserProfileData] =
    useState<UserProfileType>(undefined);
  const [imxConnectionData, setImxConnectionData] =
    useState<ImxConnectionDataType>(null);
    const [inventoryDataLoading, setinventoryDataLoading] = useState(false)
    const [userInventoryData, setUserInventoryData] = useState<any | null>(null)
    const [singleNftData, setsingleNftData] = useState<any | null>(null)

  //!==================== USER WALLET CONNECTION AND PROVIDERS =================


  const getUserData = async () => {
    try {
      const userInfo: UserProfileType = await passportInstance.getUserInfo();
      const provider2 = passportInstance.connectEvm();
      if (userInfo) {
        setUserProfileData(userInfo);
        const linkedAddresses = await passportInstance.getLinkedAddresses();
        const provider = await passportInstance.connectImx();
        // const accessToken = await passportInstance.getAccessToken();
        // const idToken = await passportInstance.getIdToken();
        // const _address = await provider.getAddress();

        console.log("getUserData", {
          userInfo,
          provider2,
          provider,
          linkedAddresses,
        });
      }
      // const userProfile: UserProfileType =
      //   await passportInstance.login({ useCachedSession: true });
      // console.log("userProfile", {  userProfile });
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
    try {
      // 3. Log the user out
      // await passportInstance.logout();
      navigate("/passportlogout");
    } catch (error) {
      console.log(error);
    }
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
    pageCursor?:string,
    // oldData?:any[]
  ) => {
    try {
      setinventoryDataLoading(true)
      const response = await CLIENT.listNFTsByAccountAddress({
        chainName:CHAIN_NAME,
        accountAddress,
        pageCursor
      });
      // console.log("getUserInventory", response);

      setUserInventoryData(response)
      
    } catch (error) {
      console.error(error);
      setUserInventoryData(null)
    }finally{
      setinventoryDataLoading(false)

    }
  };


  //!==================== SINGLE NFT DATA =================

  const getSingleNftData = async (
    contractAddress: string,
    tokenId: string
  ) => {
    try {
      const nftData = await CLIENT.getNFT({
        contractAddress,
        tokenId,
        chainName:CHAIN_NAME
      });
      const nftOwnerData = await CLIENT.listNFTOwners({
        contractAddress,
        tokenId,
        chainName:CHAIN_NAME
      });
      const nftActivitiesData = await CLIENT.listActivities({
        contractAddress,
        tokenId,
        chainName:CHAIN_NAME
      });
      const result = nftData?.result
      const owners = nftOwnerData?.result
      const actvities = nftActivitiesData?.result
      setsingleNftData({...result,owners,actvities})
    } catch (error) {
      console.error(error);
      setsingleNftData(null)
    }
  };



  //!==================== EFFECT HOOKS AND INITIAL CALLS =================


  useEffect(() => {
    // const contractAddress = "0x1f7072f8c22f87d89aa27329094cdc04dcd7f1cc";
    // const accountAddress = "0x5cbD5063DdaE154c546860e2A4D2C16E2e1C786c";
    const accountAddress = "0x808f0597D8B83189ED43d61d40064195F71C0D15";
    //    listCollectionsByNFTOwner(CLIENT,chainName,accountAddress,contractAddress)
    getUserInventory(accountAddress);

    getUserData()
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
        console.log("success", data);
        setImxConnectionData(data)
        navigate('/');

        // connectModal.unmount();
      }
    );
    connectModal.addListener(
      checkout.ConnectEventType.FAILURE,
      (data: checkout.ConnectionFailed) => {
        console.log("failure", data);
        setImxConnectionData(null)


      }
    );
    connectModal.addListener(checkout.ConnectEventType.CLOSE_WIDGET, () => {
      getUserData()
      connectModal.unmount();
        navigate('/');

    });
  }, [connectModal]);


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
