import type { UserConfig } from "tsdown";

import babel from "@rolldown/plugin-babel";
import { reactCompilerPreset } from "@vitejs/plugin-react";
import { defineConfig } from "tsdown";

export const libConfig = {
  entry: ["src/**/*.{ts,tsx}", "!src/**/*.test.{ts,tsx}", "!src/try.ts"],
  dts: {
    sourcemap: true,
  },
  unbundle: true,
  exports: true,
} as const satisfies UserConfig;

export const reactLibConfig = defineConfig({
  ...libConfig,
  platform: "neutral",
  plugins: [
    babel({
      presets: [reactCompilerPreset()],
    }),
  ],
});
