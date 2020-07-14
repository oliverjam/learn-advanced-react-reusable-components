import React from "react";
import { InputField, Label, Input } from "./4";

function App() {
  const [visible, setVisible] = React.useState(false);
  return (
    <InputField id="password">
      <Label>Password</Label>
      <Input type={visible ? "text" : "password"} />
      <button onClick={() => setVisible(!visible)}>
        {visible ? "Hide" : "Show"}
      </button>
    </InputField>
  );
}

export default App;
