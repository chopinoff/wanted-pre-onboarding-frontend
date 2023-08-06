import { useState, useEffect, ChangeEvent } from 'react';

type ValidationType = 'email' | 'password';

function useInputValidation(initialValue: string, type: ValidationType) {
  const [value, setValue] = useState(initialValue);
  const [isValid, setIsValid] = useState(false);
  const [hasChanged, setHasChanged] = useState(false);

  function validate(value: string, type: ValidationType) {
    if (type === 'email') {
      return value.includes('@');
    } else if (type === 'password') {
      return value.length >= 8;
    }
    return false;
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
    if (event.target.value !== '') {
      setHasChanged(true);
    }
  }

  useEffect(() => {
    setIsValid(validate(value, type));
  }, [value, type]);

  return { value, isValid, hasChanged, handleChange };
}

export default useInputValidation;
