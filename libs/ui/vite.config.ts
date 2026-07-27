import { createFrontendViteConfig } from "@repo/vite-config/create/frontend";

export default createFrontendViteConfig({
  dirname: import.meta.dirname,
  port: 5173,
});
