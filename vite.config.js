import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // build: {
  //   assetsInclude: ["**/*.jpg"], // Include .jpg files as assets
  // },
});
