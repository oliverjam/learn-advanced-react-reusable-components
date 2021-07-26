import React from "react";

export function InputField({ className = "", ...rest }) {
  return <div {...rest} className={"inputField " + className} />;
}

export function Label({ className = "", ...rest }) {
  return <label {...rest} className={"inputField__label " + className} />;
}

export function Info({ className = "", ...rest }) {
  return <div {...rest} className={"inputField__info " + className} />;
}

export function Input({ className = "", ...rest }) {
  return <input {...rest} className={"inputField__input " + className} />;
}
