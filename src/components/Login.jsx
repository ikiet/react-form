import { useState } from "react";

export default function Login() {
  const [enteredValue, setEnteredValue] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(enteredValue);
  };

  const onEnteredValueChange = (field, event) => {
    setEnteredValue((currentValue) => {
      return {
        ...currentValue,
        [field]: event.target.value,
      };
    });
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
            value={enteredValue.email}
            onChange={(event) => onEnteredValueChange("email", event)}
          />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            value={enteredValue.password}
            onChange={(event) => onEnteredValueChange("password", event)}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
