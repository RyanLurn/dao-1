import type { UserConfig } from "tsdown";

export const libConfig = {
  entry: ["src/**/*.{ts,tsx}", "!src/**/*.test.{ts,tsx}", "!src/try.ts"],
  dts: {
    sourcemap: true,
  },
  unbundle: true,
  exports: true,
} as const satisfies UserConfig;
