import React from "react";

function Dropdown(props) {
  return (
    <select
      className="dropdown"
      name="cards"
      id="cards"
      ref={props.myRef}
      autoFocus
    >
      {props.options.map((item, id) => {
        return (
          <option key={id} value={item.name}>
            {item.name}
          </option>
        );
      })}
    </select>
  );
}

export default Dropdown;
