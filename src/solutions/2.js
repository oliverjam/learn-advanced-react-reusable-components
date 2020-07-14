import React from "react";

function InputField({ id, label, info, showLabelBelow, ...rest }) {
  return (
    <div className="inputField">
      {!showLabelBelow && (
        <label className="inputField__label" htmlFor={id}>
          {label}
          <div className="inputField__info" id={id + "-info"}>
            {info}
          </div>
        </label>
      )}

      <input className="inputField__input" id={id} {...rest} />

      {showLabelBelow && (
        <label className="inputField__label" htmlFor={id}>
          <div>{label}</div>
          <div className="inputField__info" id={id + "-info"}>
            {info}
          </div>
        </label>
      )}
    </div>
  );
}

export default InputField;
