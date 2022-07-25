import axios from "axios";
import { store } from "../storage/store";
import { setLocalStorage } from "../storage/localStorage";

const URL = process.env.REACT_APP_URL;
const URL_LOGIN = `${URL}/api/v1/user/login`;

export const SIGNIN_USER = "SIGNIN_USER";
export const SIGNIN_ERROR = "SIGNIN_ERROR";

export async function SignInUser(data) {
  let response = {};
  console.log(data);
  await axios
    .post(URL_LOGIN, data)
    .then((res) => {
      response = {
        status: res.data.status,
        message: res.data.message,
        token: res.data.body.token,
      };
      store.dispatch({
        type: SIGNIN_USER,
        payload: { connected: true },
      });
      setLocalStorage(response.token);
    })
    .catch((error) => {
      if (error.response) {
        response = {
          status: error.response.data.status,
          message: error.response.data.message,
        };
        store.dispatch({
          type: SIGNIN_USER,
          payload: { connected: false },
        });
      } else response = error;
    });
  return response;
}
