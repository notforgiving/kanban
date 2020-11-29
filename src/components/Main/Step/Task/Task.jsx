import React from 'react';

function Task(props) {
  return (
      <div className="task__item">{props.text}</div>
  );
}

export default Task;