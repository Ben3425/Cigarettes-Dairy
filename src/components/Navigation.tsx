import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "./Auth.context.tsx";
import type { IAuth } from "./Components.ts";

export const Navigation = () => {
  const { token, onLogout } = useContext(AuthContext) as IAuth;

  const handleLogout = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onLogout();
  }

  return (
    <nav>
      <ul>
        <li>
          <Link to="/home">Start</Link>
        </li>
        <li>
          <Link to="/select">Tag auswählen</Link>
        </li>
      </ul>

      {token && (
        <button type="button" onClick={handleLogout}>Sign Out</button>
      )}

    </nav>
  );
}
