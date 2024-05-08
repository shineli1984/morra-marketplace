import { blockchainData, config, passport } from "@imtbl/sdk";

export type ClientType = blockchainData.BlockchainData
export type UserProfileType = passport.UserProfile | undefined


export type PassportModuleConfiguration = {
  baseConfig: config.ImmutableConfiguration;
  clientId: string;
  logoutRedirectUri?: string; // defaults to first logout login URI specified in the Immutable Developer Hub
  logoutMode?: "silent" | "redirect" | undefined; // defaults to 'login'
  redirectUri: string;
  scope?: string;
  audience?: string;
}
