import useInput from '../hooks/use-input';

const SomeInput = props => {
  const {
    value: enteredName,
    hasError: hasNameInputError,
    isValid: isEnteredNameValid,
    inputChangeHandler: nameInputChangeHandler,
    inputLostFocusHandler: nameInputLostFocusHandler,
    resetValues: resetNameInputValues,
  } = useInput(val => val.trim() !== '');

  const {
    value: enteredEmail,
    hasError: hasEmailInputError,
    isValid: isEnteredEmailValid,
    inputChangeHandler: emailInputChangeHandler,
    inputLostFocusHandler: emailInputLostFocusHandler,
    resetValues: resetEmailInputValues,
  } = useInput(val => val.includes('@'));

  let isFormValid = false;

  if (isEnteredNameValid && isEnteredEmailValid) {
    isFormValid = true;
  }

  const formSubmitHandler = event => {
    event.preventDefault();

    if (!isEnteredNameValid || !isEnteredEmailValid) {
      return;
    }

    console.log(enteredName);
    console.log(enteredEmail);

    resetNameInputValues();

    resetEmailInputValues();
  };

  const nameInputClasses = hasNameInputError
    ? 'form-control invalid'
    : 'form-control';

  const emailInputClasses = hasEmailInputError
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Enter your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputLostFocusHandler}
          value={enteredName}
        />
        {hasNameInputError && (
          <p className="error-text">You must enter a Name</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Enter E-Mail</label>
        <input
          type="email"
          id="email"
          onChange={emailInputChangeHandler}
          onBlur={emailInputLostFocusHandler}
          value={enteredEmail}
        />
        {hasEmailInputError && (
          <p className="error-text">You must enter an E-Mail</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!isFormValid}>Send</button>
      </div>
    </form>
  );
};

export default SomeInput;
