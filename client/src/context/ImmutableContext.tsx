import React, {
  createContext,
  useContext,
  ReactNode,
  useEffect,
  useState,
  Dispatch,
} from "react";
import { CLIENT, passportInstance } from "../config";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { ClientType, UserProfileType } from "../types";

interface IMXContextType {
  userPassportData: any;
  imxConnectionData: any;
  setuserPassportData: Dispatch<any>;
  setImxConnectionData: Dispatch<any>;

  getUserPassportData: () => void;
  logoutWithUserPassport: () => void;
  navigate: NavigateFunction;
}
const IMXContext = createContext<IMXContextType | undefined>(undefined);
interface IMXContextProviderProps {
  children: ReactNode;
}

export const IMXContextProvider: React.FC<IMXContextProviderProps> = ({
  children,
}) => {
  const navigate = useNavigate();
  const [userPassportData, setuserPassportData] = useState<any>(null);
  const [imxConnectionData, setImxConnectionData] = useState<any>(null);


  const listCollectionsByNFTOwner = async (
    client: ClientType,
    chainName: string,
    accountAddress: string,
    contractAddress:string
  ) => {
    const ownerCollections = await client.listCollectionsByNFTOwner({
      chainName,
      accountAddress,
    });
    const response = await client.listNFTsByAccountAddress({ chainName, accountAddress, contractAddress });
    console.log("ownerCollections",ownerCollections)
    console.log("response",response)
  };

  const getUserPassportData = async () => {
    try {
      const userInfo: UserProfileType =
        await passportInstance.getUserInfo();
      if (userInfo) {
        setuserPassportData(userInfo);
        const linkedAddresses = await passportInstance.getLinkedAddresses();
        const provider = await passportInstance.connectImx();
        // const accessToken = await passportInstance.getAccessToken();
        // const idToken = await passportInstance.getIdToken();
        // const _address = await provider.getAddress();

        const chainName = "imtbl-zkevm-testnet";
        const contractAddress = "0x1f7072f8c22f87d89aa27329094cdc04dcd7f1cc";
        const accountAddress = "0x808f0597D8B83189ED43d61d40064195F71C0D15";
       await listCollectionsByNFTOwner(CLIENT,chainName,accountAddress,contractAddress)

        console.log("getUserPassportData", {
          provider,
          userInfo,
          linkedAddresses
        });
      }
      // const userProfile: UserProfileType =
      //   await passportInstance.login({ useCachedSession: true });
      // console.log("userProfile", {  userProfile });
    } catch (error) {
      console.log(error);
    }
  };


  // const getNFTData = async () => {
  //   try {
  //     const chainName = "imtbl-zkevm-testnet";
  //     const contractAddress = "0x8a90cab2b38dba80c64b7734e58ee1db38b8992e";
  //     const tokenId = ['1', '2'];
  //     const response = await client.listNFTs({chainName, contractAddress, tokenId });
  //     } catch (error) {
  //       console.log(error);
  //     }
  // };

  const logoutWithUserPassport = async () => {
    try {
      // 3. Log the user out
      // await passportInstance.logout();
      navigate("/passportlogout");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // const chainName = "imtbl-zkevm-testnet";
    //     const contractAddress = "0x1f7072f8c22f87d89aa27329094cdc04dcd7f1cc";
    //     const accountAddress = "0x808f0597D8B83189ED43d61d40064195F71C0D15";
    //    listCollectionsByNFTOwner(CLIENT,chainName,accountAddress,contractAddress)
    // getUserPassportData();
  }, []);
  useEffect(() => {
    console.log("imxConnectionData", imxConnectionData);
  }, [imxConnectionData]);

  const value: IMXContextType = {
    userPassportData,
    imxConnectionData,
    setImxConnectionData,
    getUserPassportData,
    logoutWithUserPassport,
    setuserPassportData,
    navigate,
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
