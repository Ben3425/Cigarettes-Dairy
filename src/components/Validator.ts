export class Validator {
  public static log(log_message: string) {
    console.log(`Validator: ${log_message}.`);
  }
  public static error(error_message: string) {
    console.error(`Validator ERROR: ${error_message}!`);
  }

  public static IsPositiveNumberInputValid(num: number): boolean {
    if (num === undefined || num === null) {
      this.error("missing number input");
    }
    if (num <= 0) {
      this.error("number input is invalid. Expected positive number: " + num);
      return false;
    }

    return true;
  }

  public static IsDateInputValid(date: string): boolean {
    if (date.length !== 10) {
      this.error("date has an invalid length of: " + date.length);
      return false;
    }
    if (!date.includes('-', 4) || !date.includes('-', 7)) {
      this.error("date does not include seperators at the right place: " + date);
    }
    return true;
  }


  public static IsNameInputValid(username: string): boolean {
    if (username === null || username === undefined) {
      this.log("username: " + username);
      alert("Fehler: Benutzername darf nicht leer sein.");
      return false;
    }
    if (username.length < 3) {
      alert("Fehler: Password muss mindestens aus 3 Ziffern bestehen.");
      this.log("username: " + username);
      return false;
    }
    this.log("Name input is valid: " + username);

    return true;
  }

  public static IsEmailInputValid(email: string): boolean {
    if (email === null || email === undefined) {
      alert("Fehler: Email darf nicht leer sein.");
      this.log("email: " + email);
      return false;
    }
    if (email.length < 8) {
      alert("Fehler: Email muss mindestens aus 8 Ziffern bestehen.");
      this.log("email: " + email);
      return false;
    }
    if (!email.includes('@')) {
      alert("Fehler: Email muss '@' enthalten.");
      this.log("email: " + email);
      return false;
    }
    this.log("Email input is valid: " + email);

    return true;
  }

  public static IsPasswordInputValid(password: string): boolean {
    if (password === null || password === undefined) {
      alert("Fehler: Password darf nicht leer sein.");
      this.log("password: " + password);
      return false;
    }
    if (password.length < 8) {
      alert("Fehler: Password muss mindestens aus 8 Ziffern bestehen.");
      this.log("password: " + password);
      return false;
    }
    this.log("Password input has valid length");

    return true;
  }
}
