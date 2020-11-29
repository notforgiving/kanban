import React from "react";
import plus from "./../../../../assets/img/plus.svg";
import Textarea from "react-textarea-autosize";
import { connect } from "react-redux";
import addCard from "./../../../../redux/action/addCard";
import moveCard from "./../../../../redux/action/moveCard";

class Addcard extends React.Component {
  constructor(props) {
    super(props);
    this.formOpen = this.formOpen.bind(this);
    this.formClose = this.formClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleAddCard = this.handleAddCard.bind(this);
    this.handleMoveCard = this.handleMoveCard.bind(this);
    this.myRef = React.createRef();
    this.state = {
      formOpen: false,
      newTask: localStorage.getItem("newTask")
        ? localStorage.getItem("newTask")
        : "",
      moveTask: "",
    };
  }

  formOpen() {
    this.setState({ formOpen: true });
  }

  formClose(e) {
    this.setState({ formOpen: false });
  }

  handleChange(e) {
    localStorage.setItem("newTask", e.target.value);
    this.setState({ newTask: e.target.value });
  }

  handleAddCard() {
    const { dispatch } = this.props;
    const { newTask } = this.state;
    if (newTask) {
      localStorage.removeItem("newTask");
      dispatch(addCard(this.state.newTask, this.props.id));
      this.setState({ newTask: "" });
    }
    return;
  }

  handleMoveCard() {
    const { dispatch } = this.props;
    dispatch(moveCard(this.myRef.current.value, this.props.id));
    this.formClose();
  }

  renderDropdown() {
    const check = false;
    let options = [];
    this.props.store.forEach((item) => {
      if (item.id === this.props.id - 1) {
        let cards = item.card.map((card) => {
          return card;
        });
        options = [...options, ...cards];
      }
    });
    if (options && options.length > 0) {
      return (
        <>
          <select
            className="dropdown"
            name="cards"
            id="cards"
            ref={this.myRef}
            autoFocus
          >
            {options.map((item, id) => {
              return (
                <option key={id} value={item.name}>
                  {item.name}
                </option>
              );
            })}
          </select>
          <div>
            <button onClick={this.handleMoveCard} className="tasks__add-task">
              Add task
            </button>
            <button onClick={this.formClose} className="close__textarea">
              X
            </button>
          </div>
        </>
      );
    } else {
      return this.renderButton(check);
    }
  }

  renderTextarea() {
    return (
      <>
        <Textarea
          className="tasks__textarea"
          autoFocus
          onBlur={this.formClose}
          minRows={3}
          maxRows={6}
          value={
            localStorage.getItem("newTask")
              ? localStorage.getItem("newTask")
              : this.state.newTask
          }
          onChange={this.handleChange}
          placeholder="Enter the task..."
        />
        <div>
          <button onMouseDown={this.handleAddCard} className="tasks__add-task">
            Add task
          </button>
          <button onClick={this.formClose} className="close__textarea">
            X
          </button>
        </div>
      </>
    );
  }

  renderButton(check) {
    const className = check ? "task__add" : "task__add disabled";
    return (
      <button onClick={this.formOpen} className={className}>
        <img src={plus} alt="Плюс" className="task__add-img" />
        Add card
      </button>
    );
  }

  render() {
    if (this.props.data.id === 0) {
      return this.state.formOpen
        ? this.renderTextarea()
        : this.renderButton(true);
    } else {
      return this.state.formOpen
        ? this.renderDropdown()
        : this.renderButton(true);
    }
  }
}

const mapStateToProps = function (state) {
  return {
    store: state.listsReducer,
  };
};

export default connect(mapStateToProps)(Addcard);
