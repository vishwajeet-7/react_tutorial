import React from "react";

const Label = ({title,propClassname}) => {
  return (
    <label for="exampleFormControlInput1" className={propClassname}>
      {title}
    </label>
  );
};

export default Label;
