import axios from "axios";
import { API_KEY, BASE_URL } from "./constants";

const authenticate = async (mode, email, password) => {
  const url = `${BASE_URL}${mode}?key=${API_KEY}`;

  // const url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`;

  const res = await axios.post(url, {
    email,
    password,
    returnSecureToken: true,
  });

  const { idToken: token } = res.data;

  return token;
};

export const signupApi = async (email, password) => {
  const token = await authenticate("signUp", email, password);

  return token;
};

export const loginApi = async (email, password) => {
  const token = await authenticate("signInWithPassword", email, password);

  return token;
};
