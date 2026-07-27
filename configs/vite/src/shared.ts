import type { UserConfig } from "vite";

import { resolve } from "node:path";

export function createSharedViteConfig({
  dirname,
  port,
}: {
  dirname: string;
  port: number;
}): UserConfig {
  return {
    resolve: {
      alias: {
        "@": resolve(dirname, "src"),
        "@test": resolve(dirname, "test"),
      },
    },
    server: { port },
  };
}
