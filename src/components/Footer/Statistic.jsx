import React from "react";

function Statistic(props) {
  return (
    <div className="footer">
      <div className="info-tasks">
        <div className="info-tasks__active-tasks">
          Active tasks: {props.active}
        </div>
        <div className="info-tasks__finished-tasks">
          Finished tasks: {props.finish}
        </div>
      </div>
      <div className="holder-desk">
        Kanban board by LudmilaIvleva {props.year}
      </div>
    </div>
  );
}

export default Statistic;
