import React, { Component } from 'react';
import './TaskLister.css';
import TaskItem from './TaskItem';

class TaskLister extends Component {
  constructor(props) {
    super(props);
    this.handleDel = this.handleDel.bind(this);
    this.handleTaskStatusChange = this.handleTaskStatusChange.bind(this);
  }

  handleDel(taskId) {
    this.props.handleDel(taskId);
  }

  handleTaskStatusChange(taskId) {
    this.props.handleTaskStatusChange(taskId);
  }

  render() {
    const items = this.props.tasks.map(task => {
      return (
        <TaskItem
          key={task.id}
          taskId={task.id}
          checked={task.done}
          description={task.description}
          handleDel={this.handleDel}
          handleTaskStatusChange={this.handleTaskStatusChange}
        />
      );
    });

    return (
      <form className="Lister">
        <span className="Lister-title">{this.props.title}</span><br />
        {items}
      </form>
    );
  }
}

export default TaskLister;
