import { useReducer } from 'react';
const initialInputState = {
  value: '',
  isTouched: false
};

const inputStateReducer = (state, action) => {
  if (action.type === 'INPUT') {
    return {value: action.value, isTouched: state.isTouched};
  }
  if (action.type === 'BLUR') {
    return {isTouched: true, value: state.value};
  }
  if (action.type === 'RESET') {
    return {isTouched: false, value: ''};

  }
  return inputStateReducer;
};

const useInput = (validateValue) => {
  const [inputState, dispath] = useReducer(inputStateReducer, initialInputState);

  // const [enteredValue, setEnteredValue] = useState('');
  // const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;

  const valueChangeHandler = (event) => {
    dispath({
      type: 'INPUT',
      value: event.target.value
    })
  };

  const inputBlurHandler = (event) => {
    dispath({
      type: 'BLUR'
    })
  };

  const reset = () => {
    dispath({
      type: 'RESET'
    })
  };

  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset
  };
};

export default useInput;