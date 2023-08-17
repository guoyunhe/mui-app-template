import { defineConfig, externalizeDepsPlugin } from 'electron-vite';
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
      lib: {
        entry: './index.html',
      },
    },
  },
});
