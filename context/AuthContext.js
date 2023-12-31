import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useContext, useState } from "react";

const AuthContext = createContext({
  token: "",
  isAuthenticated: false,
  authenticate: () => {},
  logout: () => {},
});

export const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  authenticate = (token) => {
    setToken(token);
  };

  const logout = () => {
    AsyncStorage.removeItem("token");

    setToken(null);
  };

  const value = {
    token,
    isAuthenticated: !!token,
    logout,
    authenticate,
  };

  return (
    <AuthContext.Provider value={value}> {children} </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  console.log(context);

  if (!context)
    throw new Error("Auth context was used outside the error provider");

  return context;
};

export default AuthContext;
