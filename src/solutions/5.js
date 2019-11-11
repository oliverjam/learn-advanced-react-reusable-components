import React from "react";
import { ValidatedInputField, Label, Input, Validation } from "./4";

function App() {
  const [visible, setVisible] = React.useState(false);
  return (
    <ValidatedInputField id="password">
      <Label>Password</Label>
      <div style={{ display: "flex" }}>
        <Input type={visible ? "text" : "password"} />
        <button onClick={() => setVisible(!visible)}>
          {visible ? "Hide" : "Show"}
        </button>
      </div>
      <Validation />
    </ValidatedInputField>
  );
}

export default App;
