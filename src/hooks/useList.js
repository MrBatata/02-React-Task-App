import { useState } from 'react';

const useList = (initialValue = []) => {
  // Creates a new state with `value` as `initialValue` or `setValue` return
  const [value, setValue] = useState(initialValue);

  // Push new value to list
  const pushTask = (element) => {
    setValue((oldValue) => [...oldValue, element]);
  };

  // Remove value to list
  const removeTask = (index) => {
    setValue((oldValue) => oldValue.filter((_, i) => i !== index));
  };

  // List is Empty ? boolean
  const isEmpty = () => value.length === 0;

  return {
    value, setValue, pushTask, removeTask, isEmpty,
  };
};

export default useList;
