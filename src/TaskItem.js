import React, { Component } from 'react';
import IconButton from 'material-ui/IconButton';
import Checkbox from 'material-ui/Checkbox';
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
          <IconButton className="Task-edit" iconStyle={styles.smallIcon} style={styles.small} onClick={this.toggleEdit} >
            <Edit color="#e0a800" />
          </IconButton>
          <IconButton className="Task-delete" iconStyle={styles.smallIcon} style={styles.small}onClick={this.handleDel} >
            <Delete color="#c82333" />
          </IconButton>
        </div>
      );
    } 

    let taskDesc = null;
    if (this.state.edit) {
      taskDesc = <input type="text" id="taskEdit" className="Task-desc" defaultValue={this.props.description} />
    } else {
      taskDesc = <span className="Task-desc">
                  <Checkbox style={{width:'0px'}} defaultChecked={this.props.checked} onCheck={this.handleTaskStatusChange} />
                  {this.props.description}
                 </span>
    }

    return (
      <div className="Task">
        {taskDesc}
        {actions}
      </div>
    );
  }
}

export default TaskItem;
