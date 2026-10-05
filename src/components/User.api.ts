import axios from "axios";
import { User } from "./User";

export class UserApi {
  private static instance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    timeout: 1000,
    headers: {
      "Content-Type": "application/json",
    },
  });

  public static async FetchRegister(
    username: string,
    email: string,
    password: string,
  ) {
    try {
      const data = {
        username: username,
        email: email,
        password: password,
      };

      const res = await this.instance({
        url: "/auth/register.php",
        method: "POST",
        data: JSON.stringify(data),
      });
      new User().log("fetch register successfully");

      return res;
    } catch (error) {
      if (error instanceof Error) {
        this.error("Failed to fetch register", error);
      }
      throw Error;
    }
  }

  public static async FetchLogin(email: string, password: string) {
    try {
      const data = {
        email: email,
        password: password,
      };

      const res = await this.instance({
        url: "/auth/login.php",
        method: "POST",
        data: JSON.stringify(data),
      });
      new User().log("User login fetched successfully");

      return res.data;
    } catch (error) {
      if (error instanceof Error) {
        this.error("Failed to fetch login user with email " + email, error);
      }
      throw Error;
    }
  }

  public static async FetchTokenAuth(token: string): Promise<string | null> {
    try {
      const response = await this.instance({
        url: "/auth/protected.php",
        method: "POST",
        headers: {
          Authorization: "JWT ".concat(token),
        },
      });
      if (response.status === 200) {
        new User().log("Verifyed token successfully");
        return token;
      } else {
        new User().log(
          "Failed to verify token with status code: " + response.status,
        );
      }
      return null;
    } catch (error) {
      if (error instanceof Error) {
        this.error("Failed to verify token", error);
      }
      throw Error;
    }
  }

  public static log(message: string): void {
    console.log(`UserApi: ${message}.`);
  }
  public static error(message: string, error: Error): void {
    console.error(`UserApi ERROR: ${message}: ${error.message}`);
  }
}
