import User from './types/models/User';

declare global {
  interface Window {
    SOME_GLOBAL_VARIABLE: string;
  }
}

declare module '@guoyunhe/react-auth' {
  interface AuthUser extends User {}
}
