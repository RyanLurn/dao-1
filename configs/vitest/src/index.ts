import { resolve } from "node:path";
import { defineConfig } from "vitest/config";

export function createVitestConfig({ dirname }: { dirname: string }) {
  return defineConfig({
    test: {
      alias: {
        "@": resolve(dirname, "src"),
        "@test": resolve(dirname, "test"),
      },
    },
  });
}
