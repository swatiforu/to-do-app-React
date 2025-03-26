import React, { useState } from "react";
import InputField from "./components/inputField";
import SubmitBtn from "./components/submitBtn";
import List from "./components/list";
import Header from "./components/header";

function App() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");
  const [fileEvent, setFileEvent] = useState(null);

  function submitbtn() {
    if (input === "") {
      return;
    }
    setList([...list, input]);
    setInput("");
    document.getElementById("field").value = "";
  }

  function inputChange() {
    setInput(document.getElementById("field").value);
  }

  function deleteItem(index) {
    const newList = list.filter((_, i) => i !== index);
    setList(newList);
  }

  function moveUp(index) {
    if (index === 0) return; // If it's the first item, do nothing
    const newList = [...list];
    [newList[index], newList[index - 1]] = [newList[index - 1], newList[index]]; // Swap
    setList(newList);
  }

  function moveDown(index) {
    if (index === list.length - 1) return; // If it's the last item, do nothing
    const newList = [...list];
    [newList[index], newList[index + 1]] = [newList[index + 1], newList[index]]; // Swap
    setList(newList);
  }

  function saveToJson() {
    const data = JSON.stringify(list);
    const blob = new Blob([data], {type: "application/json"});
    const url = URL.createObjectURL(blob);

    let a = document.createElement("a");
    a.href = url;
    a.download = "list.json";
    a.click();

    URL.revokeObjectURL(url);
    a.remove();
  }

  function uploadJson(){
    const file = fileEvent.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      const data = JSON.parse(e.target.result);
      setList([...list, ...data]);
    };
    reader.readAsText(file);
  }

  function setEvent(event){
    setFileEvent(event);
  }
  return (
    <div>
      <Header inputChange={inputChange} submitbtn={submitbtn} />
      <List list={list} deleteitem={deleteItem} moveUp={moveUp} moveDown={moveDown} />
      <button className="save-btn" onClick={saveToJson}>💾 Save to JSON</button>
      <br/>
      <input type="file" accept=".json" className="upload-btn" onChange={setEvent}></input>
      <button className="save-btn" onClick={uploadJson}>Upload JSON</button>
    </div>
  );
}

export default App;
