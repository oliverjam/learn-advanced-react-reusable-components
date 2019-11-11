import React from "react";

const InputContext = React.createContext();

export function ValidatedInputField({ className = "", id, children, ...rest }) {
  const [validation, setValidation] = React.useState("");
  return (
    <div className={"inputField" + className} id={id} {...rest}>
      <InputContext.Provider value={{ id, validation, setValidation }}>
        {children}
      </InputContext.Provider>
    </div>
  );
}

export function Label({ className = "", ...rest }) {
  const { id } = React.useContext(InputContext);
  return (
    <label
      className={"inputField__label" + className}
      htmlFor={id + "-input"}
      {...rest}
    />
  );
}

export function Input({ className = "", ...rest }) {
  const { id, setValidation } = React.useContext(InputContext);
  return (
    <input
      className={"inputField__input" + className}
      id={id + "-input"}
      aria-describedby={id + "-validation"}
      onBlur={e => setValidation("Error: " + e.target.validationMessage)}
      {...rest}
    />
  );
}

export function Validation({ className = "", ...rest }) {
  const { id, validation } = React.useContext(InputContext);
  return (
    <div
      className={"inputField__validation" + className}
      id={id + "-validation"}
      {...rest}
    >
      {validation}
    </div>
  );
}
