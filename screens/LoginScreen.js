import { useState } from "react";
import AuthContent from "../components/Auth/AuthContent";
import { loginApi } from "../utils/auth";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { Alert } from "react-native";

function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const handleLogin = async ({ email, password }) => {
    setIsAuthenticating(true);

    try {
      await loginApi(email, password);
    } catch (error) {
      Alert.alert(
        "Authentication failed",
        "Could not log you in, please check your login credentials and try again"
      );
    }

    setIsAuthenticating(false);
  };

  if (isAuthenticating) return <LoadingOverlay message="Logging you in..." />;

  return <AuthContent isLogin onAuthenticate={handleLogin} />;
}

export default LoginScreen;
