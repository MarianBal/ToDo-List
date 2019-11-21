import React from 'react';

const InputView = ({
  placeholder,
  value,
  onChaneFunction,
  onKeyPressFunction,
}) => {
  return (
    <input
      placeholder={placeholder}
      //value={value}
      onChange={onChaneFunction}
      onKeyPress={onKeyPressFunction}
    />
  );
};

export default InputView;
