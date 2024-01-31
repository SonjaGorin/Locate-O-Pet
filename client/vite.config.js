import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";


// https://vitejs.dev/config/

export default defineConfig({
  esBuild: false,
 babel: {
  configFile: './.babelrc'
 },
  plugins: [
    react({
      jsx: {
        babelPlugins: ['@babel/plugin-proposal-private-property-in-object'],
      },
    })
  ],
  build: {
    chunkSizeWarningLimit: 500 * 1024,
    rollupOptions: {
      input: {
        html: 'public/index.html',
      },
    },
  },
  optimizeDeps:{
     exclude: ['mapbox-gl']
  },
  server: {
    port: 3000,
    open: true,
    proxy: {
      "/graphql": {
        target: "http://localhost:3001",
        secure: false,
        changeOrigin: true,
      },
    },
  },

});


