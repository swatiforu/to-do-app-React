import React from "react";

function List({list}){
    return(
    <div className="list">
        <ul>
          {list.map((item)=>{
            return <li>{item}</li>
          })}
        </ul>
      </div>
    );
}

export default List;