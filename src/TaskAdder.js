import React, { Component } from 'react';
import './TaskAdder.css'

class TaskAdder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTask: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  handleSave() {
    this.props.handleSave(this.state.newTask);
  }

  handleChange(e) {
    this.setState({
      newTask: e.target.value
    });
  }

  render() {
    return (
      <div className="Task-adder">
        Please, add a new task:
        <textarea cols="30" rows="2" placeholder="New Task" defaultValue={this.state.newTask} onChange={this.handleChange}></textarea>
        <div className="Adder-buttons">
          <button className="Save-button" onClick={this.handleSave}>Save Task</button>
          <button className="Cancel-button" onClick={this.props.handleCancel}>Cancel</button>
        </div>
      </div>
    );
  }
}

export default TaskAdder;
