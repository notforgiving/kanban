import React from "react";
import Addcard from "./Addcard/Addcard";
import Task from "./Task/Task";
import { Link } from "react-router-dom";

function Step(props) {
  return (
    <div className="tasks__step">
      <h4 className="tasks__step-title">{props.data.title}</h4>
      <div className="task__items">
        {props.data.card.map((item, index) => {
          return (
            <Link
              key={`${index}${item}`}
              to={{
                pathname: "/Fullscreen",
                date: {
                  title: item.name,
                  desc: item.desc,
                  cardid: item.id,
                  listId: props.data.id,
                },
              }}
            >
              <Task key={index} text={item.name} />
            </Link>
          );
        })}
      </div>
      <Addcard data={props.data} id={props.data.id} />
    </div>
  );
}

export default Step;
