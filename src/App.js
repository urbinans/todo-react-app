/*  Name: Todo React App
*   Author: Nelson Urbina
*/

import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import MenuItem from 'material-ui/MenuItem';
import './App.css';
import TaskLister from './TaskLister';
import TaskAdder from './TaskAdder';

class App extends Component {
  constructor(props) {
    super(props);
    /*  The "task" variable will have some dummy data to show on first run. This can be cleared using
    *   the reset button on the app
    */
    const tasks = [
      {
        "id": 1,
        "description": "This is one task",
        "done": false
      },
      {
        "id": 2,
        "description": "This is another task",
        "done": false
      },
      {
        "id": 3,
        "description": "This task is done",
        "done": true
      },
      {
        "id": 4,
        "description": "Done, done, done",
        "done": true
      },
      {
        "id": 5,
        "description": "This is yet one more task",
        "done": false
      }
    ];

    this.state = {
      addNewTask: false,
      tasks: tasks,
      idCount: 5,
      drawerIsOpen: false
    };
    this.handleNewTask = this.handleNewTask.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleDel = this.handleDel.bind(this);
    this.handleTaskStatusChange = this.handleTaskStatusChange.bind(this);
    this.handleSaveEdit = this.handleSaveEdit.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleOpenDrawer = this.handleOpenDrawer.bind(this);
  }

  //  handleNewTask() will change the state of the app to render the section to add a new task
  handleNewTask() {
    this.setState({
      addNewTask: true
    });
  }

  /*  handleSave() will add a new task to the list. If the user leave the text box empty, it wil
  *   return to the initial state of the app without changing the list
  */
  handleSave(value) {
    if (value !== "") {
      let tasks = this.state.tasks;
      tasks.push({
        "id": this.state.idCount + 1,
        "description": value,
        "done": false
      });
      this.setState({
        addNewTask: false,
        task: tasks,
        idCount: this.state.idCount + 1
      });
    } else {
      this.setState({
        addNewTask: false,
      });
    }
  }

  //  handleCancel() will return the app to the initial state ignoring the user input
  handleCancel() {
    if (window.confirm("Are you sure you want to cancel?\nAll your input will be lost")) {
      this.setState({
        addNewTask: false
      });
    }
  }

  //  handleDel() deletes a task from the lists
  handleDel(taskId) {
    const tasks = this.state.tasks.filter(task => {
      return task.id !== taskId;
    });
    this.setState({
      tasks: tasks
    });
  }

  //  handleTaskStatusChange() move a task between the done and undone sections
  handleTaskStatusChange(taskId) {
    const tasks = this.state.tasks.map(task => {
      if (task.id === taskId) {
        task.done = !task.done;
      }
      return task;
    });
    this.setState({
      tasks: tasks
    });
  }

  /* handleSaveEdit() will store the changes on a task description, but if the user clears the textbox
  *  then it will completely remove the task from the list
  */
  handleSaveEdit(taskId,newDesc) {
    if (newDesc === "") {
      this.handleDel(taskId);
    } else {
      const tasks = this.state.tasks.map(task => {
        if (task.id === taskId) {
          task.description = newDesc;
        }
        return task;
      });
      this.setState({
        tasks: tasks
      });
    }
  }

  // handleReset() will clear all the tasks from the list!
  handleReset() {
    if (window.confirm("This will clear all the tasks.\nAre you sure to proceed?")) {
      this.setState({tasks: []});
    }
  }

  handleOpenDrawer() {
    this.setState(prevState => {
      return {drawerIsOpen: !prevState.drawerIsOpen}
    });
  }

  render() {
    const doneTasks = this.state.tasks.filter(task => {
      return task.done === true;
    });

    const undoneTasks = this.state.tasks.filter(task => {
      return task.done === false;
    });

    return (
      <MuiThemeProvider>
        <div className="App">
          <AppBar title="My Todo List" onLeftIconButtonClick={this.handleOpenDrawer} />
          <Drawer open={this.state.drawerIsOpen} docked={false} >
            <MenuItem disabled={true}>Main Menu</MenuItem>
            <Divider />
            <MenuItem primaryText="Reset List" onClick={this.handleReset} />
            <MenuItem primaryText="Close" onClick={this.handleOpenDrawer} />
          </Drawer>
          <div className="App-listers">
            <TaskLister 
              title="Undone"
              tasks={undoneTasks}
              handleDel={this.handleDel}
              handleTaskStatusChange={this.handleTaskStatusChange}
              handleSaveEdit={this.handleSaveEdit}
            />
            <TaskLister
              title="Done"
              tasks={doneTasks}
              handleDel={this.handleDel}
              handleTaskStatusChange={this.handleTaskStatusChange}
              handleSaveEdit={this.handleSaveEdit}
            />
          </div>
          <TaskAdder
            newTask={this.state.newTask}
            handleSave={this.handleSave}
            handleCancel={this.handleCancel}
            handleNewTask={this.handleNewTask}
            addNewTask={this.state.addNewTask}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
