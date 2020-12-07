import React from "react";
import { Link } from "react-router-dom";
import Description from "./Description/Description";

function Fullscreen(props) {
  return (
    <div className="task__content">
      <div className="task__body">
        <div className="task__title">{props.location.date.title}</div>
        {
          <Description
            cardPos={props.location.date.cardPos}
            listId={props.location.date.listId}
            cardid={props.location.date.cardid}
          />
        }
        <Link to="/">
          <button className="task__close">X</button>
        </Link>
      </div>
    </div>
  );
}

export default Fullscreen;
