import React from "react";

function List({list, deleteitem, moveUp, moveDown}){
    return(
    <div className="list">
        <ul>
          {list.map((item, index)=>{
            return (
            <li key={index}>
              <div className="item-content">
              <span>{index + 1}.</span>{item}
              </div>
              <div className="move-btns">
              <button className="delete" onClick={()=>deleteitem(index)}>X</button>
              <button className="move-btn" onClick={() => moveUp(index)}>⬆️</button>
              <button className="move-btn" onClick={() => moveDown(index)}>⬇️</button>
              </div>
            </li>
            )
          })}
        </ul>
      </div>
    );
}

export default List;