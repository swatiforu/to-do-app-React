import React from "react";

function List({list, deleteitem}){
    return(
    <div className="list">
        <ul>
          {list.map((item, index)=>{
            return <li>{item} <button className="delete" onClick={()=>deleteitem(index)}>X</button></li>
          })}
        </ul>
      </div>
    );
}

export default List;