import { createContext, useContext, useState } from "react";

const AuthContext = createContext({
  token: "",
  isAuthenticated: false,
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
    <AuthContext.Provider
      value={{
        token,
        isAuthenticated: !!token,
        logout,
        authenticate,
      }}
    >
      {" "}
      {children}{" "}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context)
    throw new Error("Auth context was used outside the error provider");

  return context;
};

export default AuthContext;
