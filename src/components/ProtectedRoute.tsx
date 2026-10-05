import { Navigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "./Auth.context";
import type { IAuth } from "./Components";

export type ProtectedRouteProps = {
  children: React.ReactNode;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { token } = useContext(AuthContext) as IAuth;

  if (!token) {
    return <Navigate to="/" replace />;
  }

  return children;
}
