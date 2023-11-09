import { useState } from "react";
import AuthContent from "../components/Auth/AuthContent";
import { signupApi } from "../utils/auth";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { Alert } from "react-native";

function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const handleSignup = async ({ email, password }) => {
    setIsAuthenticating(true);

    try {
      await signupApi(email, password);
    } catch (error) {
      Alert.alert(
        "Authentication failed",
        "Could not create account, please check your input and try again"
      );
    }

    setIsAuthenticating(false);
  };

  if (isAuthenticating)
    return <LoadingOverlay message="Creating your account" />;

  return <AuthContent onAuthenticate={handleSignup} />;
}

export default SignupScreen;
