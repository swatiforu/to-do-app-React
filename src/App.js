import React, {useState}from "react";
import InputField from "./components/inputField";
import SubmitBtn from "./components/submitBtn";
import List from "./components/list";
import Header from "./components/header";

function App() {

  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  function submitbtn() {
    if(input === ""){
      return;
    }
    setList([...list, input]);
    setInput("");
    document.getElementById("field").value = "";
  }

  function inputChange(){
    setInput(document.getElementById("field").value);
  }
  return (
    <div>
      <Header inputChange={inputChange} submitbtn={submitbtn}/>
      <List list={list}/>
    </div>
  );
}

export default App;
