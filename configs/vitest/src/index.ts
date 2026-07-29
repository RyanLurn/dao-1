import type { ViteUserConfig } from "vitest/config";

export const vitestConfig = {
  resolve: {
    tsconfigPaths: true,
  },
} as const satisfies ViteUserConfig;
