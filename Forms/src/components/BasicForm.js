import useInput from "../hooks/use-input-reducer";
const isNotEmpty = value => value.trim() !== "";
const isEmail = value => value.includes('@');

const BasicForm = (props) => {
  const {
    value: enteredFirstName,
    isValid: enteredFirstNameIsValid,
    hasError: firstNameInputHasError,
    valueChangeHandler: firstNameChangedHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstNameInput,
  } = useInput(isNotEmpty);

  const {
    value: enteredLastName,
    isValid: enteredLastNameIsValid,
    hasError: lastNameInputHasError,
    valueChangeHandler: lastNameChangedHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastNameInput,
  } = useInput(isNotEmpty);

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput(isEmail);

  let formIsValid = false;

  if (enteredFirstNameIsValid && enteredLastNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }
  const lastNameInputClasses = lastNameInputHasError
    ? 'form-control invalid'
    : 'form-control';

  const firstNameInputClasses = lastNameInputHasError
    ? 'form-control invalid'
    : 'form-control';
  const emailInputClasses = emailInputHasError
    ? 'form-control invalid'
    : 'form-control';

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }
    
    let formResponse = {
      enteredFirstName,
      enteredLastName,
      enteredEmail
    }
    console.log('data to send :', formResponse)
    // nameInputRef.current.value = ''; => NOT IDEAL, DON'T MANIPULATE THE DOM
    resetFirstNameInput();
    resetLastNameInput();
    resetEmailInput();
  };
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="control-group">
        <div className={firstNameInputClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={firstNameChangedHandler}
            onBlur={firstNameBlurHandler}
            value={enteredFirstName}
          />
          {firstNameInputHasError && (
            <p className='error-text'>First Name must not be empty.</p>
          )}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="lastName"
            onChange={lastNameChangedHandler}
            onBlur={lastNameBlurHandler}
            value={enteredLastName}
          />
          {lastNameInputHasError && (
            <p className='error-text'>Last Name must not be empty.</p>
          )}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="email"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailInputHasError && (
            <p className='error-text'>E-Mail Address invalid.</p>
          )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
