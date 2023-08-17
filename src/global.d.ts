import { ElectronAPI } from '@electron-toolkit/preload';

declare global {
  interface Window {
    electron: ElectronAPI;
    api: unknown;
    SOME_GLOBAL_VARIABLE: string;
  }
}

export {}; // must have this empty export to take effect
