export enum AuthStatus {
  // haven't been verified by back-end
  NotSure,
  // the user has logged in
  LoggedIn,
  // The user has not logged in yet, or has manually logged out.
  // Redirect is needed when visiting authentication protected pages.
  LoggedOut,
  // the authentication token expired
  Expired,
}
