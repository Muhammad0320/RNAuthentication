import { useState } from "react";
import AuthContent from "../components/Auth/AuthContent";
import { useAuth } from "../context/AuthContext";

import { loginApi } from "../utils/auth";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { Alert } from "react-native";

function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const { authenticate } = useAuth();

  const handleLogin = async ({ email, password }) => {
    setIsAuthenticating(true);

    try {
      const token = await loginApi(email, password);
      authenticate(token);
    } catch (error) {
      Alert.alert(
        "Authentication failed",
        "Could not log you in, please check your login credentials and try again"
      );
      setIsAuthenticating(false);
    }
  };

  if (isAuthenticating) return <LoadingOverlay message="Logging you in..." />;

  return <AuthContent isLogin onAuthenticate={handleLogin} />;
}

export default LoginScreen;
