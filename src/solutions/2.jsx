import React from "react";

function InputField({ id, label, info, showLabelBelow, ...rest }) {
  const labels = (
    <>
      <label className="inputField__label" htmlFor={id}>
        {label}
      </label>
      <div className="inputField__info" id={id + "-info"}>
        {info}
      </div>
    </>
  );
  return (
    <div className="inputField">
      {!showLabelBelow && labels}
      <input className="inputField__input" id={id} {...rest} />
      {showLabelBelow && labels}
    </div>
  );
}

export default InputField;
