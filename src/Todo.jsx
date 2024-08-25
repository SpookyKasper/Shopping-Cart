import { Component } from "react";
import React from "react";

class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEdditing: false,
      inputVal: this.props.todo,
    };
  }

  handleInputChange = (e) => {
    this.setState((state) => ({
      ...state,
      inputVal: e.target.value,
    }));
  };

  handleEdit = () => {
    this.setState((state) => ({
      ...state,
      isEdditing: true,
    }));
  };

  handleResubmit = (e) => {
    this.setState((state) => ({
      ...state,
      isEdditing: false,
    }));
  };

  todoContent() {
    if (this.state.isEdditing) {
      return (
        <>
          <input
            type="text"
            value={this.state.inputVal}
            onChange={this.handleInputChange}
          />
          <button id={this.props.todo} onClick={this.props.handleDeleteItem}>
            X
          </button>
          <button id={this.props.todo} onClick={this.handleResubmit}>
            Resubmit
          </button>
        </>
      );
    } else {
      return (
        <>
          <li>{this.state.inputVal}</li>
          <button id={this.props.todo} onClick={this.props.handleDeleteItem}>
            X
          </button>
          <button id={this.props.todo} onClick={this.handleEdit}>
            Edit
          </button>
        </>
      );
    }
  }
  render() {
    return <>{this.todoContent()}</>;
  }
}

export default Todo;
