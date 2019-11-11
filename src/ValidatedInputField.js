import React from "react";

function InputField({ id, label, ...rest }) {
  const [validation, setValidation] = React.useState("");
  return (
    <div className="inputField" id={id}>
      <label className="inputField__label" htmlFor={id + "-input"}>
        {label}
      </label>
      <input
        className="inputField__input"
        id={id + "-input"}
        // if there's an error put it in state when user tabs out of input
        onBlur={e => setValidation("Error: " + e.target.validationMessage)}
        // we need to know the ID of the error div to link them together
        aria-describedby={id + "-validation"}
        {...rest}
      />
      <div className="inputField__validation" id={id + "-validation"}>
        {validation}
      </div>
    </div>
  );
}

export default InputField;
