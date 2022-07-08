import { store } from "../storage/store";

export const SIGNOUT_USER = "SIGNOUT_USER";

export const signOutUser = () => {
  return (dispatch) => {
    store.dispatch({ type: SIGNOUT_USER });
    window.localStorage.removeItem('token');
  };
};
