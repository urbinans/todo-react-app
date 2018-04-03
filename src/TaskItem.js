import React, { Component } from 'react';
import IconButton from 'material-ui/IconButton';
import Delete from 'material-ui/svg-icons/action/delete';
import Edit from 'material-ui/svg-icons/image/edit';
import Save from 'material-ui/svg-icons/content/save';
import Cancel from 'material-ui/svg-icons/content/clear';
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
    this.handleCancelEdit = this.handleCancelEdit.bind(this);
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

  handleCancelEdit() {
    if (window.confirm("Are you sure you want to discard these changes?")) {
      this.toggleEdit();
    }
  }

  render() {
    let actions = null;
    const styles = {
      smallIcon: {
        width: 20,
        height: 20
      },
      small: {
        width: 20,
        height: 20,
        padding: 0,
        borderWidth: '0px'
      }
    };

    if (this.state.edit) {
      //actions = <i className="fas fa-save" onClick={this.handleSaveEdit}></i>
      actions = (
        <div className="Task-actions">
          <IconButton iconStyle={styles.smallIcon} style={styles.small}  onClick={this.handleSaveEdit} >
            <Save />
          </IconButton>
          <IconButton iconStyle={styles.smallIcon} style={styles.small}  onClick={this.handleCancelEdit} >
            <Cancel color="#c82333" />
          </IconButton>
        </div>
      );
                
    } else {
      actions = (
        <div className="Task-actions">
          <i className="fas fa-pencil-alt Task-edit" onClick={this.toggleEdit}></i>
          <i className="fas fa-trash-alt Task-delete" onClick={this.handleDel}></i>
          <IconButton className="Task-edit" iconStyle={styles.smallIcon} style={styles.small} onClick={this.toggleEdit} >
            <Edit color="#e0a800" />
          </IconButton>
          <IconButton className="Task-delete" iconStyle={styles.smallIcon} style={styles.small}onClick={this.handleDel} >
            <Delete color="#c82333" />
          </IconButton>
          <input type="checkbox" defaultChecked={this.props.checked} onChange={this.handleTaskStatusChange} />
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
        {taskDesc}
      </div>
    );
  }
}

export default TaskItem;
