import React from "react";

const IdContext = React.createContext();

export function InputField({ id, className = "", ...rest }) {
  return (
    <IdContext.Provider value={id}>
      <div className={"inputField" + className} {...rest} />
    </IdContext.Provider>
  );
}

export function Label({ className = "", ...rest }) {
  const id = React.useContext(IdContext);
  return (
    <label htmlFor={id} className={"inputField__label" + className} {...rest} />
  );
}

export function Info({ className = "", ...rest }) {
  const id = React.useContext(IdContext);
  return (
    <div
      id={id + "-info"}
      className={"inputField__info" + className}
      {...rest}
    />
  );
}

export function Input({ className = "", ...rest }) {
  const id = React.useContext(IdContext);
  return (
    <input
      id={id}
      className={"inputField__input" + className}
      aria-describedby={id + "-info"}
      {...rest}
    />
  );
}
