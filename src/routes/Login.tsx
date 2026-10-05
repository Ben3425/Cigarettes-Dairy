import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { Validator } from "../components/Validator";
import { User } from "../components/User.ts";
import AuthContext from "../components/Auth.context.tsx";
import type { IAuth } from "../components/Components.ts";

export default function Login() {
  const { onLogin } = useContext(AuthContext) as IAuth;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setEmail(e.target.value);
  }

  function handlePasswordChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setPassword(e.target.value);
  }

  async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    const isEmailValid: boolean = Validator.IsEmailInputValid(email);
    const isPasswordValid: boolean = Validator.IsPasswordInputValid(password);
    if (isEmailValid && isPasswordValid) {
      new User().log("User email and password are valid");
      const user = new User();
      user.email = email;
      user.password = password;
      await user.login();
      onLogin(user);
    }
  }

  return (
    <>
      <h2>Login</h2>

      <div className="container">
        <form id={"login-form"} onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Email</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>

          <div className="form-group">
            <button type={"submit"}>Einloggen</button>
          </div>
        </form>
      </div>

      <p>
        Noch keinen Account? <Link to="/register">Hier registrieren</Link>
      </p>
    </>
  );
}
