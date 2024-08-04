import { useState } from "react";

export default (initialValue, onValidate) => {
  const [enteredValue, setEnteredValue] = useState(initialValue);
  const [errorMessage, setErrorMessage] = useState(null);

  const onChange = (event) => {
    const newValue = event.target.value;
    setEnteredValue(newValue);
  };

  const onBlur = (newValue) => {
    const errorMessage = onValidate(newValue);
    setErrorMessage(errorMessage);
  };

  const onFocus = () => {
    setErrorMessage(null);
  };

  const onReset = () => {
    setEnteredValue(initialValue);
    setErrorMessage(null);
  };

  return {
    value: enteredValue,
    errorMessage,
    onChange,
    onBlur,
    onFocus,
    onReset,
  };
};
