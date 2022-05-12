import React, { useState, useRef, useEffect } from "react";

function useStateRef(initialValue) {
  const [value, _setValue] = useState(initialValue);

  const ref = useRef(value);

  const setValue = (e) => {
    _setValue(e);

    if (typeof e === "function") ref.current = e(ref.current);
    else ref.current = e;
  };
  
  // useEffect(() => {
  //   ref.current = value;
  // }, [value]);

  return [value, setValue, ref];
}

export default useStateRef;
