import React from "react";
import Step from "./Step/Step";
import { connect } from "react-redux";

function Main(props) {
  console.log(props.state)

  return (
    <div className="tasks">
      {props.state.map((item, index) => (
        <Step
          key={`${index}${item}`}
          data={item}
        />
      ))}
    </div>
  );
}

const mapStateToProps = function (state) {
  return {
    state: state.listsReducer,
  };
};

export default connect(mapStateToProps)(Main);
