import React, { useState } from "react";
import Textarea from "react-textarea-autosize";
import addDesc from "../../../redux/action/addDesc";
import { connect } from "react-redux";
import plus from "./../../../assets/img/plus.svg";

function Description(props) {
  const [description, setDescription] = useState("");
  const { listId, cardid, cardPos } = props;
  const hadleChange = (e) => {
    setDescription(e.target.value);
  };

  const addDescription = () => {
    const { dispatch } = props;
    dispatch(addDesc(listId, cardid, description));
    setDescription("");
  };

  const renderTextarea = () => {
    return (
      <>
        <Textarea
          className="tasks__textarea"
          autoFocus
          style={style}
          minRows={3}
          maxRows={6}
          onChange={hadleChange}
          value={description}
          placeholder="Enter the desc..."
        />
        <div className="btn__group">
           <button onClick={addDescription} className="tasks__add-task">
            <img src={plus} alt="Плюс" className="task__add-img" />
            Add desc
          </button>
        </div>
      </>
    );
  };

  const renderDescription = () => {
    return (
      <p className="task__description">
        {props.state[listId].card[cardPos].desc}
      </p>
    );
  };

  return (
    <>
      {props.state[listId].card[cardPos].desc === ""
        ? renderTextarea()
        : renderDescription()}
    </>
  );
}

const style = {
  border: "3px solid #0079bf57",
};

const mapStateToProps = function (state) {
  return {
    state: state.listsReducer,
  };
};

export default connect(mapStateToProps)(Description);
