import { createReactLibConfig } from "@repo/tsdown-config";

export default createReactLibConfig({
  exports: {
    customExports: {
      "./styles": "./src/styles.css",
    },
  },
});
