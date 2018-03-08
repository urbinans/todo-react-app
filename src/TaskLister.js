import React, { Component } from 'react';
import TaskItem from './TaskItem';

class TaskLister extends Component {
  render() {
    const items = this.props.tasks.map(task => {
      return (
        <TaskItem key={task.id} checked={task.done} description={task.description} />
      );
    });

    return (
      <form>
        {this.props.title}<br />
        {items}
      </form>
    );
  }
}

export default TaskLister;
