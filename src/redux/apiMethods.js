import { loginFailure, loginRequest, loginSuccess } from "./userRedux";
import { publicCall } from "../urlCalls";

export const login = async (dispatch, user) => {
  dispatch(loginRequest());
  try {
    const res = await publicCall.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};
