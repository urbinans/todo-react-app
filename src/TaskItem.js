import React, { Component } from 'react';
import './TaskItem.css';

class TaskItem extends Component {
  render() {
    return (
      <div className="Task">
        <input type="checkbox" checked={this.props.checked} />
        <div className="Task-actions">
          <input type="button" value="E" />
          <input type="button" value="D" />
        </div>
        <span className="Task-desc">{this.props.description}</span>
      </div>
    );
  }
}

export default TaskItem;
