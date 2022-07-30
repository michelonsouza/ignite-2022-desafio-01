/* eslint-disable import/no-extraneous-dependencies */
import { resolve } from 'path';

import json from '@rollup/plugin-json';
import nodeResolve from '@rollup/plugin-node-resolve';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      './runtimeConfig': './runtimeConfig.browser',
    },
  },
  build: {
    rollupOptions: {
      plugins: [
        nodeResolve({
          browser: true,
          preferBuiltins: false,
        }),
        json(),
      ],
    },
  },
});
