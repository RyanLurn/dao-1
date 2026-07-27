import babel from "@rolldown/plugin-babel";
import tailwindcss from "@tailwindcss/vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import { defineConfig } from "vite";

import type { SharedConfig } from "@/types";

import { createSharedViteConfig } from "@/create/shared";

export function createFrontendViteConfig({ dirname, port }: SharedConfig) {
  const sharedConfig = createSharedViteConfig({ dirname, port });
  return defineConfig({
    ...sharedConfig,
    plugins: [
      babel({ presets: [reactCompilerPreset()] }),
      react(),
      tailwindcss(),
    ],
  });
}
