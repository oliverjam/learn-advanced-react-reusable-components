import React from "react";

function InputField({ id, label, subLabel, showLabelBelow, ...rest }) {
  return (
    <div className="inputField">
      {!showLabelBelow && (
        <label className="inputField__label" htmlFor={id}>
          <div>{label}</div>
          <div style={{ fontSize: 14 }}>{subLabel}</div>
        </label>
      )}

      <input className="inputField__input" id={id} {...rest} />

      {showLabelBelow && (
        <label className="inputField__label" htmlFor={id}>
          <div>{label}</div>
          <div style={{ fontSize: 14 }}>{subLabel}</div>
        </label>
      )}
    </div>
  );
}

export default InputField;
