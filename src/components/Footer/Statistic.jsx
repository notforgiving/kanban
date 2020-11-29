import React from "react";

function Statistic(props) {
  return (
    <div className="footer">
      <div className="info-tasks">
        <div className="info-tasks__active-tasks">
          Active tasks: {props.date.active}
        </div>
        <div className="info-tasks__finished-tasks">
          Finished tasks: {props.date.finish}
        </div>
      </div>
      <div className="holder-desk">
        Kanban board by LudmilaIvleva {props.date.year}
      </div>
    </div>
  );
}

export default Statistic;
