import React from "react";
import InputField from "./inputField";
import SubmitBtn from "./submitBtn";
function Header({inputChange, submitbtn}) {
    return (
        <div className="header">
        <h1>To-do List</h1>
        <InputField fun={inputChange}/>
        <SubmitBtn event={submitbtn}/>
      </div>
    );
}

export default Header;