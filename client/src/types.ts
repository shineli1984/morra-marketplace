import { blockchainData, checkout, config, passport } from "@imtbl/sdk";

export type ClientType = blockchainData.BlockchainData;
export type UserProfileType = passport.UserProfile | undefined;
export type ImxConnectionDataType = checkout.ConnectionSuccess | null;
export type UserInventoryDataType = {
  page: {
    next_cursor: string | null;
    previous_cursor: string | null;
    result: any[] | [];
  };
};

export type PassportModuleConfiguration = {
  baseConfig: config.ImmutableConfiguration;
  clientId: string;
  logoutRedirectUri?: string; // defaults to first logout login URI specified in the Immutable Developer Hub
  logoutMode?: "silent" | "redirect" | undefined; // defaults to 'login'
  redirectUri: string;
  scope?: string;
  audience?: string;
};
