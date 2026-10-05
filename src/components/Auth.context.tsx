import { createContext } from "react";
import type { IAuth } from "./Components";

const AuthContext = createContext<IAuth | null>(null);

export default AuthContext;
