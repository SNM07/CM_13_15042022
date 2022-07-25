import { SIGNIN_USER, SIGNIN_ERROR } from "../actions/signInAction";
import { USER_PROFILE } from "../actions/accessUserPageAction";
import { EDIT_NAME } from "../actions/editNameAction";
import { SIGNOUT_USER } from "../actions/signOutAction";

const initialState = {
  connected: false,
  profileInfoLoad: false,
  firstName: "",
  lastName: "",
};

export default function signInReducer(state = initialState, action) {
  switch (action.type) {
    case SIGNIN_USER:
      return {
        ...state,
        connected: action.payload.connected,
      };
    case USER_PROFILE:
      return {
        ...state,
        profileInfoLoad: action.payload.profileInfoLoad,
      };
    case EDIT_NAME:
      return {
        ...state,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
      };
    case SIGNOUT_USER:
      return {
        ...initialState,
      };
    case SIGNIN_ERROR:
      return action.payload;

    default:
      return state;
  }
}
