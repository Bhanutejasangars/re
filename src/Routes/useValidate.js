import { useState } from "react";

const useValidate = (data) => {
  const [inputValue, setInputValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = data(inputValue);
  const hasError = !valueIsValid && isTouched;

  const inputValueChangeHandler = (event) => {
    setInputValue(event.target.value);
  };
  const inputValueBlurHandler = (event) => {
    setIsTouched(true);
  };
  const reset = () => {
    setInputValue("");
    setIsTouched(false);
  };
  return {
    value: inputValue,
    isValid: valueIsValid,
    hasError,
    inputValueChangeHandler,
    inputValueBlurHandler,
    reset,
  };
};

export default useValidate;
// const toastFunction = () => {
//     if (inputEmail.trim() === "") {
//       toast.error("Email field can not be empty");
//     } else if (!inputEmail.includes("@")) {
//       toast.error("Enter a valid email");
//     } else if (inputPassword.trim() === "") {
//       toast.error("Password can not be empty");
//     }
//   };
