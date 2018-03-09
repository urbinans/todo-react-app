import React, { Component } from 'react';
import './TaskItem.css';

class TaskItem extends Component {
  constructor(props) {
    super(props);
    this.handleDel = this.handleDel.bind(this);
  }

  handleDel() {
    this.props.handleDel(this.props.taskId);
  }

  render() {
    return (
      <div className="Task">
        <input type="checkbox" defaultChecked={this.props.checked} />
        <div className="Task-actions">
          <i className="fas fa-pencil-alt Task-edit"></i>
          <i className="fas fa-trash-alt Task-delete" onClick={this.handleDel}></i>
        </div>
        <span className="Task-desc">{this.props.description}</span>
      </div>
    );
  }
}

export default TaskItem;
