import type { UserConfig } from "vite";

import { resolve } from "node:path";

import type { SharedConfig } from "@/types";

export function createSharedViteConfig({
  dirname,
  port,
}: SharedConfig): UserConfig {
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
