// import { passport } from '@imtbl/sdk';
import React, { createContext, useContext, ReactNode, useEffect, useState } from 'react';
import { passportInstance } from '../config';

interface IMXContextType {
  userPassportData:any;
  imxProvider:any;
  getUserPassportData: () => void;
}
const IMXContext = createContext<IMXContextType | undefined>(undefined);
interface IMXContextProviderProps {
  children: ReactNode;
}

export const IMXContextProvider: React.FC<IMXContextProviderProps> = ({ children }) => {

    const [userPassportData, setuserPassportData] = useState<any>(null)
    const [imxProvider, setimxProvider] = useState<any>(null)

  const getUserPassportData = async () => {
    try {
        const userInfo = await passportInstance.getUserInfo();
        // const userProfile: passport.UserProfile | null =
        //   await passportInstance.login({ useCachedSession: true });
        // console.log("getUserPassportData", {  userInfo });
        
        if (userInfo) {
            setuserPassportData(userInfo)
          const provider = await passportInstance.connectImx();
        //   console.log("getUserPassportData", { provider });
          setimxProvider(provider)
        }
      } catch (error) {
        console.log(error);
      }
  };

  useEffect(() => {
    // getUserPassportData()
  }, [])
  
  const value: IMXContextType = {
    userPassportData,
    imxProvider,
    getUserPassportData,
  };

  return <IMXContext.Provider value={value}>{children}</IMXContext.Provider>;
};

export const useIMXContext = () => {
    const context = useContext(IMXContext);
    if (!context) {
      throw new Error('useIMXContext must be used within a IMXContextProvider');
    }
    return context;
  };
