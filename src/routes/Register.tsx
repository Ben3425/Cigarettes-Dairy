import { useState } from "react";
import { UserApi } from "../components/User.api";
import { Validator } from "../components/Validator";
import type { IUser } from "../components/Components.ts";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [user, setUser] = useState<IUser>({
    name: "",
    email: "",
    password: "",
  });

  function handleUsernameChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setUser({
      ...user,
      name: e.target.value,
    });
  }

  function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setUser({
      ...user,
      email: e.target.value,
    });
  }

  function handlePasswordChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setUser({
      ...user,
      password: e.target.value,
    });
  }

  async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    if (
      user.name === undefined ||
      (user.name === "" && user.email === undefined) ||
      (user.email === "" && user.password === undefined) ||
      user.password === ""
    ) {
      alert("Bitte zuerst Benutzername, Email und Password eingeben");
      return;
    }
    const isUsernameValid: boolean = Validator.IsNameInputValid(
      user.name as string,
    );
    const isEmailValid: boolean = Validator.IsEmailInputValid(
      user.email as string,
    );
    const isPasswordValid: boolean = Validator.IsPasswordInputValid(
      user.password as string,
    );
    if (isUsernameValid && isEmailValid && isPasswordValid) {
      const res = await UserApi.FetchRegister(
        user.name as string,
        user.email as string,
        user.password as string,
      );
      if (res.status === 200) {
        navigate("/");
      }
    }
  }

  return (
    <>
      <h2>Registrieren</h2>

      <div className="container">
        <form id={"register-form"} onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={user.name!}
              onChange={handleUsernameChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              value={user.email!}
              onChange={handleEmailChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={user.password!}
              onChange={handlePasswordChange}
            />
          </div>

          <div className="form-group">
            <button type={"submit"}>Registrieren</button>
          </div>
        </form>
      </div>
    </>
  );
}
