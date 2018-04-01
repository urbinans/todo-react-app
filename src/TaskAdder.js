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
  }

  handleSave() {
    this.props.handleSave(this.state.newTask);
  }

  handleChange(e) {
    this.setState({
      newTask: e.target.value
    });
  }

  render() {
    return (
      <div className="Task-adder">
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
          <RaisedButton label="Cancel" secondary={true} onClick={this.props.handleCancel} />
        </div>
      </div>
    );
  }
}

export default TaskAdder;
