import type { IUser } from "./Components";
import { UserApi } from "./User.api";

export class User implements IUser {
  name?: string = "";
  email: string = "";
  password: string = "";
  private token: string = "";

  async register() {
    const res = await UserApi.FetchRegister(
      this.name!,
      this.email,
      this.password,
    );
    this.log("registered successfully.");
    return res.data;
  }

  async login() {
    const res = await UserApi.FetchLogin(this.email, this.password);
    this.token = res.jwt!;
    if (this.token !== "" || this.token !== undefined) {
      this.log("token created successfully");
    } else {
      this.error("Failed to create user token");
    }
    this.name = res.username;
    if (this.name !== "" || this.name !== undefined) {
      this.log("username fetched successfully");
    } else {
      this.error("Failed to get username");
    }
  }

  async auth() {
    const token = await UserApi.FetchTokenAuth(this.token);
    if (token) {
      this.log("authentication was successfully");
      return token;
    }
    this.error("Failed to authenticate token");
    return null;
  }

  public log(log_message: string) {
    console.log(`User: ${log_message}.`);
  }

  public error(error_message: string) {
    console.error(`User ERROR: ${error_message}!`);
  }
}
