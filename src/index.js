import React from "react";
import ReactDOM from "react-dom";
import InputField from "./InputField";

function App() {
  return <InputField id="email" label="Email address" type="email" required />;
}

ReactDOM.render(<App />, document.getElementById("root"));
