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

  function deleteItem(index) {
    const newList = list.filter((_, i) => i !== index);
    setList(newList);
  }

  return (
    <div>
      <Header inputChange={inputChange} submitbtn={submitbtn}/>
      <List list={list} deleteitem={deleteItem}/>
    </div>
  );
}

export default App;
