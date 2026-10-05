import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { AuthProviderProps } from "./Components.ts";
import { User } from "./User.ts";
import AuthContext from "./Auth.context.tsx";

const AuthProvider = ({ children }: AuthProviderProps) => {
  const navigate = useNavigate();

  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [refresh, setRefresh] = useState<boolean>(false);

  const handleAfterRefreshed = (): void => {
    setRefresh(false);
  };

  const handleRefresh = (): void => {
    setRefresh(true);
  };

  const handleLogin = async (user: User): Promise<void> => {
    new User().log("email: " + user.email + " , username: " + user.name);
    const token = await user.auth();
    if (!token) {
      return;
    }
    setToken(token);
    setUser(user);
    new User().log("Login was successfully. Welcome");
    navigate("/home");
  };
  const handleLogout = (): void => {
    setToken("");
    setUser(null);
    navigate("/");
    new User().log("Logout was successfully. Good bye");
  };

  const value = {
    token,
    user,
    refresh,
    onLogin: handleLogin,
    onLogout: handleLogout,
    onRefresh: handleRefresh,
    afterRefreshed: handleAfterRefreshed,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
export default AuthProvider;
