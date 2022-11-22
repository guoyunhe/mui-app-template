enum AuthStatus {
  // Haven't been verified by back-end.
  NotSure,
  // The user has logged in.
  LoggedIn,
  // The user has not logged in yet.
  NotLoggedIn,
  // The user has manually logged out.
  LoggedOut,
  // The authentication token expired.
  Expired,
}

export default AuthStatus;
