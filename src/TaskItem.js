import React, { Component } from 'react';
import Delete from 'material-ui/svg-icons/action/delete';
import Edit from 'material-ui/svg-icons/image/edit';
import Save from 'material-ui/svg-icons/content/save';
import './TaskItem.css';

class TaskItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false
    };
    this.handleDel = this.handleDel.bind(this);
    this.handleTaskStatusChange = this.handleTaskStatusChange.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.handleSaveEdit = this.handleSaveEdit.bind(this);
  }

  handleDel() {
    this.props.handleDel(this.props.taskId);
  }

  handleTaskStatusChange() {
    this.props.handleTaskStatusChange(this.props.taskId);
  }

  toggleEdit() {
    this.setState(prevState => {
      return {edit: !prevState.edit}; 
    });
  }

  handleSaveEdit() {
    this.toggleEdit();
    const newDesc = document.getElementById("taskEdit").value;
    this.props.handleSaveEdit(this.props.taskId, newDesc);
  }

  render() {
    let actions = null;
    if (this.state.edit) {
      //actions = <i className="fas fa-save" onClick={this.handleSaveEdit}></i>
      actions = <Save onClick={this.handleSaveEdit} />
                
    } else {
      actions = (
        <div className="Task-actions">
          <i className="fas fa-pencil-alt Task-edit" onClick={this.toggleEdit}></i>
          <i className="fas fa-trash-alt Task-delete" onClick={this.handleDel}></i>
          <Edit className="Task-edit" color="#e0a800" onClick={this.toggleEdit} />
          <Delete className="Task-delete" color="#c82333" onClick={this.handleDel} />
        </div>
      );
    }

    let taskDesc = null;
    if (this.state.edit) {
      taskDesc = <input type="text" id="taskEdit" className="Task-desc" defaultValue={this.props.description} />
    } else {
      taskDesc = <span className="Task-desc">{this.props.description}</span>
    }

    return (
      <div className="Task">
        {actions}
        <input type="checkbox" defaultChecked={this.props.checked} onChange={this.handleTaskStatusChange} />
        {taskDesc}
      </div>
    );
  }
}

export default TaskItem;
