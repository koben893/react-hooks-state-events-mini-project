import React from "react";

function Task( props ) {
  const { text, category, onDelete} = props;

  const deleteTask = () => {
    onDelete();
  };

  
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick = {deleteTask} >
        X
      </button>
    </div>
  );
}

export default Task;
