import AuthContent from "../components/Auth/AuthContent";
import { signupApi } from "../utils/auth";

function SignupScreen() {
  const handleSignup = async ({ email, password }) => {
    await signupApi(email, password);
  };

  return <AuthContent onAuthenticate={handleSignup} />;
}

export default SignupScreen;
