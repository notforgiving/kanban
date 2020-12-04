import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Textarea from "react-textarea-autosize";
import { connect } from "react-redux";
import addDesc from "./../../redux/action/addDesc";

const style = {
  border: "1px solid #0067a3",
};

// class RenderTextarea extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handlechange = this.handlechange.bind(this);
//     this.handleAddDesc = this.handleAddDesc.bind(this);
//     this.state = {
//       newDesc: "",
//     };
//   }

//   handlechange(e) {
//     this.setState({ newDesc: e.target.value });
//   }

//   handleAddDesc() {
//     console.log(123)
//     console.log(this.props.dispatch)
//     this.props.dispatch(
//       addDesc(this.state.newDesc, this.props.listId, this.props.cardid)
//     );
//   }

//   render() {
//     return (
//       <>
//         <Textarea
//           onChange={this.handlechange}
//           style={style}
//           className="tasks__textarea"
//           autoFocus
//           value={this.state.newDesc}
//           minRows={3}
//           maxRows={6}
//           placeholder="Enter the description..."
//         />
//         <div>
//           <button onClick={this.handleAddDesc} className="tasks__add-task">
//             Add description
//           </button>
//         </div>
//       </>
//     );
//   }
// }

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
