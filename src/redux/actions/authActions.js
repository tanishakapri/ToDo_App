

// export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
// export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";

// export const login = () => {
//   return {
//     type: LOGIN_SUCCESS,
//   };
// };

// export const logout = () => {
//   return {
//     type: LOGOUT_SUCCESS,
//   };
// };


export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";

export const login = () => (dispatch) => {
  dispatch({ type: LOGIN_SUCCESS });
};

export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT_SUCCESS });
};