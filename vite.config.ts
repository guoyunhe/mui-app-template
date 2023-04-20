/// <reference types="vitest" />
import react from '@vitejs/plugin-react-swc';
import { defineConfig, loadEnv } from 'vite';
import adsense from 'vite-plugin-adsense';
import { ViteEjsPlugin as ejs } from 'vite-plugin-ejs';
import tsconfigPaths from 'vite-tsconfig-paths';

const env = loadEnv('', process.cwd());

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true,
    port: 3000,
    open: true,
  },
  plugins: [react(), tsconfigPaths(), ejs(env), adsense()],
  // https://vitest.dev/config/
  test: {
    coverage: {
      reporter: ['text', 'json', 'html'],
    },
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
  },
});
