import Input from "./Input";
import { isEmail, isNotEmpty } from "../util/validation";
import useInput from "../hooks/useInput";

export default function Login() {
  const {
    value: email,
    errorMessage: emailErrorMessage,
    onChange: onEmailChange,
    onBlur: onEmailBlur,
    onFocus: onEmailFocus,
    onReset: onEmailReset,
  } = useInput("", (value) => {
    if (!isNotEmpty(value)) {
      return "Enter email!";
    } else if (!isEmail(value)) {
      return "Enter valid email!";
    }
  });

  const {
    value: password,
    errorMessage: passwordErrorMessage,
    onChange: onPasswordChange,
    onBlur: onPasswordBlur,
    onFocus: onPasswordFocus,
    onReset: onPasswordReset,
  } = useInput("", (value) => {
    if (!isNotEmpty(value)) {
      return "Enter password!";
    }
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    if (emailErrorMessage || passwordErrorMessage) {
      return;
    }
    console.log("Email:", email);
    console.log("Password:", password);
  };

  const onReset = () => {
    onEmailReset();
    onPasswordReset();
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
          onBlur={(event) => onEmailBlur(event.target.value)}
          required
          onFocus={onEmailFocus}
          errorMessage={emailErrorMessage}
        />
        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          value={password}
          onChange={onPasswordChange}
          onBlur={(event) => onPasswordBlur(event.target.value)}
          required
          minLength={6}
          onFocus={onPasswordFocus}
          errorMessage={passwordErrorMessage}
        />
      </div>

      <p className="form-actions">
        <button onClick={onReset} type="reset" className="button button-flat">
          Reset
        </button>
        <button
          className="button"
          onClick={() => {
            onEmailBlur(email);
            onPasswordBlur(password);
          }}
        >
          Login
        </button>
      </p>
    </form>
  );
}
