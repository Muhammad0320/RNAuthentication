import { createContext, useState } from "react";

const AuthContext = createContext({
  token: "",
  isAuthenticated,
  authenticate: () => {},
  logout: () => {},
});

export const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  const logout = () => {
    setToken(null);
  };

  authenticate = (token) => {
    if (token) setToken(token);
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

export default AuthContext;
