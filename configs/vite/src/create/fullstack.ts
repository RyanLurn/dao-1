import babel from "@rolldown/plugin-babel";
import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import { defineConfig } from "vite";

import type { SharedConfig } from "@/types";

import { createSharedViteConfig } from "@/create/shared";

export function createFullstackViteConfig({ dirname, port }: SharedConfig) {
  const sharedConfig = createSharedViteConfig({ dirname, port });
  return defineConfig({
    ...sharedConfig,
    plugins: [
      // Make sure that '@tanstack/react-start/plugin/vite' is passed before '@vitejs/plugin-react'
      tanstackStart({
        router: {
          quoteStyle: "double",
          semicolons: true,
        },
      }),
      babel({ presets: [reactCompilerPreset()] }),
      react(),
      tailwindcss(),
    ],
  });
}
