import React from "react";

const IdContext = React.createContext();

export function InputField({ id, className = "", ...rest }) {
  return (
    <IdContext.Provider value={id}>
      <div {...rest} className={"inputField " + className} />
    </IdContext.Provider>
  );
}

export function Label({ className = "", ...rest }) {
  const id = React.useContext(IdContext);
  return (
    <label
      {...rest}
      htmlFor={id}
      className={"inputField__label " + className}
    />
  );
}

export function Info({ className = "", ...rest }) {
  const id = React.useContext(IdContext);
  return (
    <div
      {...rest}
      id={id + "-info"}
      className={"inputField__info " + className}
    />
  );
}

export function Input({ className = "", ...rest }) {
  const id = React.useContext(IdContext);
  return (
    <input
      {...rest}
      id={id}
      className={"inputField__input " + className}
      aria-describedby={id + "-info"}
    />
  );
}
