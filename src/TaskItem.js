import React, { Component } from 'react';

class TaskItem extends Component {
  render() {
    return (
      <div>
        <input type="checkbox" checked={this.props.checked} />
        <input type="button" value="E" />
        <input type="button" value="D" />
        {this.props.description}
      </div>
    );
  }
}

export default TaskItem;
