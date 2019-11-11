import React from "react";

export function InputField({ className = "", ...rest }) {
  return <div className={"inputField" + className} {...rest} />;
}

export function Label({ className = "", ...rest }) {
  return <label className={"inputField__label" + className} {...rest} />;
}

export function Input({ className = "", ...rest }) {
  return <input className={"inputField__input" + className} {...rest} />;
}
