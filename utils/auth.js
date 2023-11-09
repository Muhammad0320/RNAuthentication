import axios from "axios";
import { API_KEY, BASE_URL } from "./constants";

const authenticate = async (mode, email, password) => {
  const url = `${BASE_URL}${mode}?key=${API_KEY}`;

  const res = await axios.post(url, {
    email,
    password,
    returnSecureToken: true,
  });

  return res.data;
};

export const signupApi = async (email, password) => {
  const res = await authenticate("signUp", email, password);

  return res;
};

export const loginApi = async (email, password) => {
  const res = await authenticate("signInWithPassword", email, password);

  return res;
};
