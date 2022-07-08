import axios from "axios";
import { store } from "../storage/store";
import { getLocalToken } from "../storage/localStorage";

const URL = process.env.REACT_APP_URL;
const URL_PROFILE = `${URL}/api/v1/user/profile`;

export const SIGNIN_USER = "SIGNIN_USER";
export const USER_PROFILE = "USER_PROFILE";
export const SIGNIN_ERROR = "SIGNIN_ERROR";
export const EDIT_NAME = "EDIT_NAME";

export async function accessProfilePage() {
  let response = {};
  let token = getLocalToken();

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  await axios
    .post(URL_PROFILE, {}, config)
    .then((res) => {
      response = {
        status: res.data.status,
        message: res.data.message,
        body: res.data.body,
      };
      store.dispatch({
        type: EDIT_NAME,
        payload: {
          lastName: response.body.lastName,
          firstName: response.body.firstName,
        },
      });
      store.dispatch({
        type: USER_PROFILE,
        payload: { profileInfoLoad: true },
      });
    })
    .catch((error) => {
      store.dispatch({
        type: USER_PROFILE,
        payload: { profileInfoLoad: false },
      });
      store.dispatch({
        type: SIGNIN_USER,
        payload: { connected: false },
      });
      if (error.respone) {
        response = {
          status: error.response.data.status,
          message: error.response.data.message,
        };
      } else response = error;
    });
  return response;
}
