import { useRef, useState } from 'react';

/**
 * * useBoolean Hook
 * @param {boolean} initialValue
 * @returns true, false or toogle opposite
 */
const useBoolean = (initialValue) => {
  const [value, setvalue] = useState(initialValue);

  const updatevalue = useRef(
    {
      toggle: () => { setvalue((oldValue) => !oldValue); },
      on: () => { setvalue(true); },
      off: () => { setvalue(false); },
    },
  );

  return [value, updatevalue.current];
};

export default useBoolean;
