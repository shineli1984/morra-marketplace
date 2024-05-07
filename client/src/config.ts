import { blockchainData, config, passport } from "@imtbl/sdk";
interface PassportModuleConfiguration {
  baseConfig: config.ImmutableConfiguration;
  clientId: string;
  logoutRedirectUri?: string; // defaults to first logout login URI specified in the Immutable Developer Hub
  logoutMode?: "silent" | "redirect" | undefined; // defaults to 'login'
  redirectUri: string;
  scope?: string;
  audience?: string;
}

export const IS_TEST_MODE = true ; 

export const BASE_URL = IS_TEST_MODE?"http://localhost:5173/":"https://morra-marketplace-decryptedlabs.vercel.app/";
export const LOGIN_REDIRECT_URL = `${BASE_URL}passportlogin`
export const LOGOUT_URL = `${BASE_URL}`
export const PUBLISHABLE_KEY = "pk_imapik-test-hDlP-2q0UrGE2sl8er07"; // Replace with your Publishable Key from the Immutable Hub
export const CLIENT_ID = IS_TEST_MODE?"qZFuA4cWJaJ8Hl5DyDOXnJFTlEOgCLYQ":"PgnVyziJAynAX03oF5yoeNDu5t2oC8ua"; 
export const API_KEY = "sk_imapik-test-yOM4GxNxfV$ViA6G@Ry1_e2a4cf";
export const PASSPORT_CONFIG:PassportModuleConfiguration = {
  baseConfig: {
    // environment: config.Environment.SANDBOX,
    environment: config.Environment.PRODUCTION,
    publishableKey: PUBLISHABLE_KEY,
    apiKey: API_KEY,
  },
  clientId: CLIENT_ID,
  redirectUri: LOGIN_REDIRECT_URL,
  logoutRedirectUri: LOGOUT_URL,
  logoutMode :"silent",
  audience: "platform_api",
  scope: "openid offline_access email transact",
};

export const CLIENT = new blockchainData.BlockchainData({
  baseConfig: {
    environment: config.Environment.SANDBOX,
    apiKey: API_KEY,
    publishableKey:PUBLISHABLE_KEY,
  },
});

export const passportInstance = new passport.Passport(PASSPORT_CONFIG);