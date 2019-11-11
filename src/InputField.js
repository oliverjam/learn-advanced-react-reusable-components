import React from "react";

function InputField({ id, label, ...rest }) {
  return (
    <div className="inputField">
      <label className="inputField__label" htmlFor={id}>
        {label}
      </label>
      <input className="inputField__input" id={id} {...rest} />
    </div>
  );
}

export default InputField;
