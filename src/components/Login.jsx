import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isEmailInvalid, setEmailInvalid] = useState(false);
  const [isPasswordInvalid, setPasswordInvalid] = useState(false);

  const onEmailChange = (event) => {
    const newValue = event.target.value;
    setEmail(newValue);
  };

  const onEmailInputBlur = (event) => {
    setEmailInvalid(!event.target.value.includes("@"));
  };

  const onPasswordChange = (event) => {
    const newValue = event.target.value;
    setPassword(newValue);
  };

  const onPasswordInputBlur = (event) => {
    setPasswordInvalid(event.target.value == "");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setEmailInvalid(!email.includes("@"));
    setPasswordInvalid(password == "");
    if (isEmailInvalid || isPasswordInvalid) {
      return;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={email}
            onChange={onEmailChange}
            onBlur={onEmailInputBlur}
            required
            onFocus={() => setEmailInvalid(false)}
          />
          <div className="control-error">
            {isEmailInvalid && <p>Please enter a valid email address.</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            value={password}
            onChange={onPasswordChange}
            onBlur={onPasswordInputBlur}
            required
            minLength={6}
            onFocus={() => setPasswordInvalid(false)}
          />
          <div className="control-error">
            {isPasswordInvalid && <p>Please enter a valid password.</p>}
          </div>
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
