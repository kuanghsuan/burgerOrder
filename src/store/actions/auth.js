import * as actiontypes from "./actionTypes";

export const authStart = () => {
  return {
    type: actiontypes.AUTH_START,
  };
};

export const authSuccess = (token, userId) => {
  return {
    type: actiontypes.AUTH_SUCCESS,
    idToken: token,
    userId: userId,
  };
};

export const authFail = (error) => {
  return {
    type: actiontypes.AUTH_FAIL,
    error: error,
  };
};

export const logout = () => {
  // localStorage.removeItem('token');
  // localStorage.removeItem("expirationDate");
  // localStorage.removeItem('userId');
  return {
    type: actiontypes.AUTH_INITIATE_LOGOUT,
  };
};

export const logoutSucceed = () => {
  return {
    type: actiontypes.AUTH_LOGOUT,
  };
};

export const checkAuthTimeout = (expirationTime) => {
  return {
    type: actiontypes.AUTH_CHECK_TIMEOUT,
    expirationTime: expirationTime,
  };
};

export const auth = (email, password, isSignup) => {
  return {
    type: actiontypes.AUTH_USER,
    email: email,
    password: password,
    isSignup: isSignup

  }
};

export const setAuthRedirectPath = (path) => {
  return {
    type: actiontypes.SET_AUTH_REDIRECT_PATH,
    path: path,
  };
};

export const authCheckState = () => {
  return {
    type: actiontypes.AUTH_CHECK_INITIAL_STATE
  }
}
