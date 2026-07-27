import { reactLibConfig } from "@repo/tsdown-config";
import { defineConfig } from "tsdown";

export default defineConfig({
  ...reactLibConfig,
  exports: {
    customExports: {
      "./styles": "./src/styles.css",
    },
  },
});
