import type { ViteUserConfig } from "vitest/config";

import { resolve } from "node:path";

export function createVitestConfig({
  dirname,
}: {
  dirname: string;
}): ViteUserConfig {
  return {
    test: {
      alias: {
        "@": resolve(dirname, "src"),
        "@test": resolve(dirname, "test"),
      },
    },
  };
}
