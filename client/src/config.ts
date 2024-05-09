import { blockchainData, config, passport } from "@imtbl/sdk";
import { PassportModuleConfiguration } from "./types";
const ENV = import.meta.env;

export const IS_TEST_MODE = true;
export const CHAIN_NAME = "imtbl-zkevm-testnet"
export const PUBLISHABLE_KEY = ENV.VITE_PUBLISHABLE_KEY;
export const CLIENT_ID = IS_TEST_MODE
  ? ENV.VITE_CLIENT_ID
  : ENV.VITE_CLIENT_ID_VERCEL;
export const API_KEY = ENV.VITE_API_KEY;


export const BASE_URL = IS_TEST_MODE
  ? "http://localhost:5173/"
  : ENV.VITE_CLIENT_BASEURL_VERCEL;
export const LOGIN_REDIRECT_URL = `${BASE_URL}passportlogin`;
export const LOGOUT_URL = `${BASE_URL}`;

export const PASSPORT_CONFIG: PassportModuleConfiguration = {
  baseConfig: {
    environment: config.Environment.SANDBOX,
    // environment: config.Environment.PRODUCTION,
    publishableKey: PUBLISHABLE_KEY,
    apiKey: API_KEY,
  },
  clientId: CLIENT_ID,
  redirectUri: LOGIN_REDIRECT_URL,
  logoutRedirectUri: LOGOUT_URL,
  logoutMode: "silent",
  audience: "platform_api",
  scope: "openid offline_access email transact",
};

export const CLIENT = new blockchainData.BlockchainData({
  baseConfig: {
    environment: config.Environment.SANDBOX,
    apiKey: API_KEY,
    publishableKey: PUBLISHABLE_KEY,
  },
});

export const passportInstance = new passport.Passport(PASSPORT_CONFIG);
