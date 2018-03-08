import React, { Component } from 'react';
import './TaskItem.css';

class TaskItem extends Component {
  render() {
    return (
      <div className="Task">
        <input type="checkbox" defaultChecked={this.props.checked} />
        <div className="Task-actions">
          <i className="fas fa-pencil-alt"></i>
          <i className="fas fa-trash-alt"></i>
        </div>
        <span className="Task-desc">{this.props.description}</span>
      </div>
    );
  }
}

export default TaskItem;
