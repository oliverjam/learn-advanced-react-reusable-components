import React from "react";

function InputField({ id, label, subLabel, ...rest }) {
  return (
    <div className="inputField">
      <label className="inputField__label" htmlFor={id}>
        <div>{label}</div>
        <div style={{ fontSize: 14 }}>{subLabel}</div>
      </label>
      <input className="inputField__input" id={id} {...rest} />
    </div>
  );
}

export default InputField;
