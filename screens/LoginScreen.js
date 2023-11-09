import { useState } from "react";
import AuthContent from "../components/Auth/AuthContent";
import { loginApi } from "../utils/auth";
import LoadingOverlay from "../components/ui/LoadingOverlay";

function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const handleLogin = async ({ email, password }) => {
    setIsAuthenticating(true);

    await loginApi(email, password);

    setIsAuthenticating(false);
  };

  if (isAuthenticating) return <LoadingOverlay message="Logging you in..." />;

  return <AuthContent isLogin onAuthenticate={handleLogin} />;
}

export default LoginScreen;
