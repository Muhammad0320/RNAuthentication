import { useState } from "react";
import AuthContent from "../components/Auth/AuthContent";
import { signupApi } from "../utils/auth";
import LoadingOverlay from "../components/ui/LoadingOverlay";

function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const handleSignup = async ({ email, password }) => {
    setIsAuthenticating(true);
    await signupApi(email, password);

    setIsAuthenticating(false);
  };

  if (isAuthenticating)
    return <LoadingOverlay message="Creating your account" />;

  return <AuthContent onAuthenticate={handleSignup} />;
}

export default SignupScreen;
