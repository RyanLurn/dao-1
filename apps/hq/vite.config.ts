import { createFullstackViteConfig } from "@repo/vite-config/create/fullstack";

export default createFullstackViteConfig({
  dirname: import.meta.dirname,
  port: 5173,
});
