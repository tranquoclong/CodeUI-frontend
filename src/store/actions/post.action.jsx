import axios from "axios";
import {
  POST_FAILED,
  POST_SUCCESS,
  POST_BY_ID_FAILED,
  POST_BY_ID_SUCCESS,
} from "../constants/post.const";

const API_URL = process.env.REACT_APP_API_URL;

export const Post = (html, css, hidden, status, history) => {
  const userLogin = localStorage.getItem("userLogin");
  const login = userLogin ? JSON.parse(userLogin).user.login : "";
  const token = userLogin ? JSON.parse(userLogin).token : "";
  return (dispatch) => {
    axios({
      method: "POST",
      url: `${API_URL}/post/new/${login}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      data: {
        html,
        css,
        theme: hidden ? "dark" : "light",
        status,
      },
    })
      .then((res) => {
        history.goBack("/");
        console.log("post was add successfully");
      })
      .catch((err) => {
        console.error(err);
      });
  };
};

export const postsByUser = (
  login,
  listPost,
  setListPost,
  setLoading,
  page,
  setTotalPages
) => {
  const userLogin = localStorage.getItem("userLogin");
  const token = userLogin ? JSON.parse(userLogin).token : "";
  return (dispatch) => {
    axios({
      method: "GET",
      url: `${API_URL}/post/by/${login}?page=${page}&perPage=12`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        setListPost([...listPost, ...res.data.list]);
        setLoading(false);
        setTotalPages(res.data.totalPage);
      })
      .catch((err) => {
        console.error(err);
      });
  };
};

export const getPost = (pathname) => {
  return (dispatch) => {
    axios({
      method: "GET",
      url: `${API_URL}/posts?status=${pathname}`,
      headers: {
        "Content-Type": "application/json",
      },
      data: null,
    })
      .then((res) => {
        dispatch(getPostSuccess(res.data));
      })
      .catch((err) => {
        dispatch(getPostFailed(err));
      });
  };
};

export const getPostSuccess = (post) => {
  return {
    type: POST_SUCCESS,
    payload: post,
  };
};

const getPostFailed = (err) => {
  return {
    type: POST_FAILED,
    payload: err,
  };
};

export const getPostById = (postId) => {
  return (dispatch) => {
    axios({
      method: "GET",
      url: `${API_URL}/post/${postId}`,
      headers: {
        "Content-Type": "application/json",
      },
      data: null,
    })
      .then((res) => {
        dispatch(getPostByIdSuccess(res.data));
      })
      .catch((err) => {
        dispatch(getPostByIdFailed(err));
      });
  };
};

export const getPostByIdSuccess = (postById) => {
  return {
    type: POST_BY_ID_SUCCESS,
    payload: postById,
  };
};

const getPostByIdFailed = (err) => {
  return {
    type: POST_BY_ID_FAILED,
    payload: err,
  };
};
