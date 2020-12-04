import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function Fullscreen(props) {
  return (
    <div className="task__content">
      <div className="task__body">
        <div className="task__title">{props.location.date.title}</div>
        <p className="task__description">{props.location.date.desc}</p>
        <Link to="/">
          <button className="task__close">X</button>
        </Link>
      </div>
    </div>
  );
}

const mapStateToProps = function (state) {
  return {
    store: state.listsReducer,
  };
};

export default connect(mapStateToProps)(Fullscreen);
