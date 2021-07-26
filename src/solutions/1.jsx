import React from "react";

function InputField({ id, label, info, ...rest }) {
  return (
    <div className="inputField">
      <label className="inputField__label" htmlFor={id}>
        {label}
      </label>
      <div className="inputField__info" id={id + "-info"}>
        {info}
      </div>
      <input className="inputField__input" id={id} {...rest} />
    </div>
  );
}

export default InputField;
