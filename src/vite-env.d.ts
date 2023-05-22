/// <reference types="vite/client" />

// https://vitejs.dev/guide/env-and-mode.html

interface ImportMetaEnv {
  readonly VITE_APP_NAME: string;
  readonly VITE_APP_BASE_URL: string;
  readonly VITE_API_BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
