import axios from "axios";
import { store } from "../storage/store";
import { getLocalToken } from "../storage/localStorage";

const URL = process.env.REACT_APP_URL;
const URL_PROFILE = `${URL}/api/v1/user/profile`;

//Get token and edit firstname/lastname on server//

export const EDIT_NAME = "EDIT_NAME";

export async function updateName(req) {
  let token = getLocalToken();

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const data = {
    firstName: req.firstName,
    lastName: req.lastName,
  };
  await axios
    .put(URL_PROFILE, data, config)
    .then((res) => {
      if (res.status !== 200) console.log(res.statusText);
      store.dispatch({ type: EDIT_NAME, payload: res.data });
    })
    .catch((err) => console.log(err));
}
