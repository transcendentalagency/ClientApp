import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import history from "../history";

// get initial user auth
const intialUser = localStorage.getItem("auth")
  ? JSON.parse(localStorage.getItem("auth"))
  : null;

// make sure state is not loading and no errors for initial user
const initialState = {
  isLoading: false,
  currentUser: intialUser,
  error: null,
};

// various scenerios in which state should respond with when activated
export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.isLoading = false;
    },
    loginFailure: (state, action) => {
      state.error = action.payload;
    },
    registerSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.isLoading = false;
    },
    registerFailure: (state, action) => {
      state.error = action.payload;
    },
    logoutSuccess: (state) => {
      state.currentUser = null;
    },
  },
});

// exporting reducers
export const {
  loginSuccess,
  loginFailure,
  registerSuccess,
  registerFailure,
  logoutSuccess,
} = authSlice.actions;

export default authSlice.reducer;

// register() appends user data to new FormData() then waits for response/post success then sends user to /signin
export const register = (user) => async (dispatch) => {
  try {
    const formdata = new FormData();

    // data being appended
    formdata.append("username", user.username);
    formdata.append("email", user.email);
    formdata.append("password", user.password);

    // headers
    const config = {
      headers: {
        "content-type": "application/json",
      },
    };

    // posting to server /auth/register
    const response = await axios.post(
      "http://localhost:4000/auth/register",
      user,
      config
    );

    // send user to login page after successful post
    if (response) {
      dispatch(registerSuccess(response.data));
      history.push("/signin");
      window.location.reload();
    } else {
      dispatch(registerFailure());
    }
  } catch {
    dispatch(registerFailure());
  }
};

// signin() if the userData matches localStorage email/password then signin and send user to /dashboard
export const signin = (user) => async (dispatch) => {
  // uses user email + password and check match then sends user to dashboard page after successful post
  try {
    const userData = {
      email: user.email,
      password: user.password,
    };
    const response = await axios.post(
      "http://localhost:4000/auth/signin",
      userData
    );

    if (response) {
      localStorage.setItem("auth", JSON.stringify(response.data));
      dispatch(loginSuccess(response.data));
      history.push("/dashboard");
      window.location.reload();
    } else {
      dispatch(loginFailure());
    }
  } catch (error) {
    dispatch(loginFailure());
  }
};
