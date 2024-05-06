// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
// import { config, passport } from "@imtbl/sdk";
// import { ethers } from "ethers";

// const PUBLISHABLE_KEY = "pk_imapik-test--7m39GQxO3njs$HDem63"; // Replace with your Publishable Key from the Immutable Hub
// const CLIENT_ID = "qZFuA4cWJaJ8Hl5DyDOXnJFTlEOgCLYQ";
// const API_KEY = "sk_imapik-test-yOM4GxNxfV$ViA6G@Ry1_e2a4cf";
// const PASSPORT_CONFIG = {
//   baseConfig: {
//     // environment: config.Environment.SANDBOX,
//     environment: config.Environment.PRODUCTION,
//     publishableKey: PUBLISHABLE_KEY,
//     apiKey: API_KEY,
//   },
//   clientId: CLIENT_ID,
//   redirectUri: "https://localhost:3000/login",
//   logoutRedirectUri: "https://localhost:3000/logout",
//   audience: "platform_api",
//   scope: "openid offline_access email transact",
// };

// function AppCopy() {
//   // console.log(config)
//   const passportInstance = new passport.Passport(PASSPORT_CONFIG);
//   const [count, setCount] = useState(0);

//   const handle__1 = async () => {
//     try {
//       console.log({ passportInstance, passport, config });
//       const profile: passport.UserProfile | null = await passportInstance.login();
//       // await passportInstance.login();

//       // await passportInstance.loginCallback();
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handle__2 = async () => {
//     try {
//       console.log({ passportInstance, passport, config });
//       const passportProvider = passport.connectEvm();

//       const provider = new ethers.providers.Web3Provider(passportProvider);

//       const accounts = await provider.request({
//         method: "eth_requestAccounts",
//       });
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleLoginSuccess = (userInfo: any) => {
//     // Handle successful login
//     console.log("Logged in user:", userInfo);
//   };

//   const handleLoginFailure = (error: any) => {
//     // Handle login failure
//     console.error("Login error:", error);
//   };

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <button onClick={() => handle__1()}>Test Handle</button>
//         <p>
//           Edit <code>src/AppCopy.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   );
// }

// export default AppCopy;
