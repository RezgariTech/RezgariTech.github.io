import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react({
         babel: {
        parserOpts: {
          plugins: ["decorators-legacy", "classProperties"],
        },
        plugins: [
          ["@babel/plugin-proposal-decorators", { legacy: true }],
        ],
      },
  }),
  tailwindcss(),
],
})
