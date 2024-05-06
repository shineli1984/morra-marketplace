import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import nodePolyfills from 'vite-plugin-node-stdlib-browser';
// Define a type for the environment variables object
type ProcessEnv = {
  [key: string]: string;
};

// const cherryPickedKeys = [
//   "SOME_KEY_IN_YOUR_ENV_FILE",
//   "SOME_OTHER_KEY_IN_YOUR_ENV_FILE",
// ];

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  
  // Initialize processEnv with the ProcessEnv type
  const processEnv: ProcessEnv = {};
  
  // cherryPickedKeys.forEach(key => processEnv[key] = env[key]);

  return {
    define: {
      global: {},
      'process.env': processEnv
    },
    plugins: [react(), nodePolyfills()],
  }
})
