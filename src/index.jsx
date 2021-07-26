import React from "react";
import ReactDOM from "react-dom";
import "./global.css";
import "./InputField.css";
import InputField from "./InputField";

function App() {
  return <InputField id="first-name" label="First name" />;
}

ReactDOM.render(<App />, document.getElementById("root"));
