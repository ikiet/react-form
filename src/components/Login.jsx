import { useState } from "react";
import Input from "./Input";
import { isEmail, isNotEmpty } from "../util/validation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailErrorMessage, setEmailErrorMessage] = useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState(false);

  const onEmailChange = (event) => {
    const newValue = event.target.value;
    setEmail(newValue);
  };

  const onEmailInputBlur = (event) => {
    const newEmail = event.target.value;
    if (!isNotEmpty(newEmail)) {
      setEmailErrorMessage("Email is required");
    } else if (!isEmail(newEmail)) {
      setEmailErrorMessage("Invalid email address");
    }
  };

  const onPasswordChange = (event) => {
    const newValue = event.target.value;
    setPassword(newValue);
  };

  const onPasswordInputBlur = (event) => {
    const newPassword = event.target.value;
    if (!isNotEmpty(newPassword)) {
      setPasswordErrorMessage("Password is required");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setEmailErrorMessage(!email.includes("@"));
    setPasswordErrorMessage(password == "");
    if (emailErrorMessage || passwordErrorMessage) {
      return;
    }
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={onEmailChange}
          onBlur={onEmailInputBlur}
          required
          onFocus={() => setEmailErrorMessage(false)}
          errorMessage={emailErrorMessage}
        />
        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          value={password}
          onChange={onPasswordChange}
          onBlur={onPasswordInputBlur}
          required
          minLength={6}
          onFocus={() => setPasswordErrorMessage(false)}
          errorMessage={passwordErrorMessage}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
