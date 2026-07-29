import type { UserConfig } from "vite";

import type { SharedConfig } from "@/types";

export function createSharedViteConfig({ port }: SharedConfig): UserConfig {
  return {
    resolve: {
      tsconfigPaths: true,
    },
    server: { port },
  };
}
