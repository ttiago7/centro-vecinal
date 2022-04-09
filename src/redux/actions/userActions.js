import actionsTypes from "./actionsTypes";

export const loginUser = (email, password) => {
  return async (dispatch) => {
    dispatch({ type: actionsTypes.USER_LOGIN_REQUEST });
    const config = {
      method: "POST",
    };
    const userData = JSON.stringify(email, password);
    try {
      const res = await fetch("api/url a usar", config, userData);
      const data = await res.json();
      // capturar el error de password e email incorrecto
      dispatch({ type: actionsTypes.USER_LOGIN_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: actionsTypes.USER_LOGIN_FAIL, payload: error });
    }
  };
};

export const logout = () => {
  return (dispatch) => {
    localStorage.removeItem("userInfo");
    dispatch({ type: actionTypes.USER_LOGIN_LOGOUT });
  };
};

export const register = (name, email, password) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: actionTypes.USER_REGISTER_REQUEST,
      });
      const data = await registerUser(name, email, password);
      dispatch({
        type: actionTypes.USER_REGISTER_SUCCESS,
        payload: data,
      });
      dispatch({
        type: actionTypes.USER_LOGIN_SUCCESS,
        payload: data,
      });
      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: actionTypes.USER_REGISTER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
};

export const deleteUser = (id) => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: actionTypes.USER_DELETE_REQUEST,
      });
      const {
        userLogin: { userInfo },
      } = getState();
      await deleteAUser(id, userInfo);
      dispatch({
        type: actionTypes.USER_DELETE_SUCCESS,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      if (message === "Not authorized, token failed") {
        dispatch(logout());
      }
      dispatch({
        type: actionTypes.USER_DELETE_FAIL,
        payload: message,
      });
    }
  };
};
