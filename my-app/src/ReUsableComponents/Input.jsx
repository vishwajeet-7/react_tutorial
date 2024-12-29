import React from "react";

const Input = ({propType,propClassName,propPlaceholder}) => {
  return (
    <input
      type={propType}
      className={propClassName}
      id="exampleFormControlInput1"
      placeholder={propPlaceholder}
    />
  );
};

export default Input;
