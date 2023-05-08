import axios from "axios";
import { ACT_LOGOUT, USER_FAILED, USER_SUCCESS } from "../constants/user.const";
const API_URL = process.env.REACT_APP_API_URL;
export function actLogout() {
  return {
    type: ACT_LOGOUT,
  };
}

export const getUser = (login) => {
  return (dispatch) => {
    axios({
      method: "GET",
      url: `${API_URL}/user/${login}`,
      headers: {
        "Content-Type": "application/json",
      },
      data: null,
    })
      .then((res) => {
        dispatch(getUserSuccess(res.data));
      })
      .catch((err) => {
        dispatch(getUserFailed(err));
      });
  };
};

export const getUserSuccess = (users) => {
  return {
    type: USER_SUCCESS,
    payload: users,
  };
};

const getUserFailed = (err) => {
  return {
    type: USER_FAILED,
    payload: err,
  };
};
