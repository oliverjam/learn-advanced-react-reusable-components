import React from "react";

function InputField({ id, label, subLabel, ...rest }) {
  const [value, setValue] = React.useState("");
  const [validation, setValidation] = React.useState("");

  return (
    <div>
      <label htmlFor={id + "input"}>
        <div>{label}</div>
        <div>{subLabel}</div>
      </label>
      <input
        id={id + "input"}
        aria-describedby={id + "validation"}
        value={value}
        onChange={e => setValue(e.target.value)}
        onBlur={e => setValidation("Error: " + e.target.validationMessage)}
        type="email"
        required
        {...rest}
      />
      <div id={id + "validation"} style={{ color: "red" }}>
        {validation}
      </div>
    </div>
  );
}

export default InputField;
