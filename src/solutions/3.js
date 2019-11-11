import React from "react";

const InputContext = React.createContext();

export function InputField({ id, children, ...rest }) {
  const [validation, setValidation] = React.useState("");

  return (
    <div {...rest}>
      <InputContext.Provider value={{ id, validation, setValidation }}>
        {children}
      </InputContext.Provider>
    </div>
  );
}

export function Label(props) {
  const { id } = React.useContext(InputContext);
  return <label htmlFor={id + "-input"} {...props} />;
}

export function Input(props) {
  const { id, setValidation } = React.useContext(InputContext);
  return (
    <input
      id={id + "input"}
      aria-describedby={id + "-validation"}
      onBlur={e => setValidation("Error: " + e.target.validationMessage)}
      type="email"
      required
      {...props}
    />
  );
}

export function Validation(props) {
  const { id, validation } = React.useContext(InputContext);
  return (
    <div id={id + "-validation"} style={{ color: "red" }}>
      {validation}
    </div>
  );
}

export default InputField;
