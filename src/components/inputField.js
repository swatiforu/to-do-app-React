import React from "react";

function InputField({fun}) {
  return (
      <input id="field" type="text" onChange={fun} />
  );
}

export default InputField;