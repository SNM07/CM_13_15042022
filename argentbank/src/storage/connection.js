import { SIGNIN_USER } from "../actions/signInAction";
import { accessProfilePage } from "../actions/accessUserPageAction";
import { verifyLocalStorage } from "./localStorage";
import { store } from "./store";

//Get authentication state//

function isAuthenticate() {
  let { connected, profileInfoLoad } = store.getState();

  if (connected && !profileInfoLoad) {
    accessProfilePage();
  }
  if (connected) return true;
  else return false;
}

//Define authentication state//

async function verifyConnection() {
  let { profileInfoLoad } = store.getState();
  if (verifyLocalStorage() && !profileInfoLoad) {
    store.dispatch({
      type: SIGNIN_USER,
      payload: { connected: true },
    });
    accessProfilePage();
  }
}

export { isAuthenticate, verifyConnection };
