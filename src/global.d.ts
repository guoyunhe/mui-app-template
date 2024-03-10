declare global {
  interface Window {
    SOME_GLOBAL_VARIABLE: string;
  }
}

export {}; // must have this empty export to take effect
