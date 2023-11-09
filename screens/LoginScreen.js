import AuthContent from "../components/Auth/AuthContent";
import { loginApi } from "../utils/auth";

function LoginScreen() {
  const handleLogin = async ({ email, password }) => {
    await loginApi(email, password);
  };

  return <AuthContent isLogin onAuthenticate={handleLogin} />;
}

export default LoginScreen;
