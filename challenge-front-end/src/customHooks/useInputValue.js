import { useState, useCallback } from "react";

//this stuff is really clean, this way you can return an object
//and spread the object into an input, and this hook will
//keep track of the state per each input.
// by returning on change with the value of the function the input
// will automatically use that has the onChange value
//https://github.com/rehooks/input-value
function useInputValue(initialValue) {
  let [value, setValue] = useState(initialValue);
  let onChange = useCallback(function(event) {
    setValue(event.currentTarget.value);
  }, []);

  return {
    value,
    onChange
  };
}

export default useInputValue;
