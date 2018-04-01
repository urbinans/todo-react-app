import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import './TaskAdder.css'

class TaskAdder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTask: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleSave() {
    this.props.handleSave(this.state.newTask);
    this.setState({
      newTask: ""
    });
  }

  handleCancel() {
    this.props.handleCancel();
    this.setState({
      newTask: ""
    });
  }

  handleChange(e) {
    this.setState({
      newTask: e.target.value
    });
  }

  render() {
    let element = null;
    if (this.props.addNewTask) {
      element = <div className="Task-adder">
                  <TextField
                    hintText="New Task"
                    floatingLabelText="Please, add a new task:"
                    multiLine={true}
                    defaultValue={this.state.newTask}
                    onChange={this.handleChange}
                    floatingLabelStyle={{display: 'block'}}
                  />
                  <div className="Adder-buttons">
                    <RaisedButton label="Save Task" primary={true} onClick={this.handleSave} />
                    <RaisedButton label="Cancel" secondary={true} onClick={this.handleCancel} />
                  </div>
                </div>
    } else {
      element = <div>
                  <RaisedButton primary={true} label="New Task" onClick={this.props.handleNewTask} />
                  <RaisedButton secondary={true} label="Reset List" onClick={this.props.handleReset} />
                </div>
    }

    return (
      <div>
        {element}
      </div>
    );
  }
}

export default TaskAdder;
