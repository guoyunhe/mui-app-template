import { defineConfig, externalizeDepsPlugin } from 'electron-vite';
import { resolve } from 'path';
import config from './vite.config';

export default defineConfig({
  main: {
    build: {
      lib: {
        entry: './src/electron/main/index.ts',
      },
    },
    plugins: [externalizeDepsPlugin()],
  },
  preload: {
    build: {
      lib: {
        entry: './src/electron/preload/index.ts',
      },
    },
    plugins: [externalizeDepsPlugin()],
  },
  renderer: {
    ...config,
    root: './',
    build: {
      rollupOptions: {
        input: {
          index: resolve(__dirname, 'index.html'),
        },
      },
    },
  },
});
