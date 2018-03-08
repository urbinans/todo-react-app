import React, { Component } from 'react';
import './App.css';
import TaskLister from './TaskLister';

class App extends Component {
  render() {
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

    const doneTasks = tasks.filter(task => {
      return task.done === true;
    });

    const undoneTasks = tasks.filter(task => {
      return task.done === false;
    });

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">My Todo List</h1>
        </header>
        <TaskLister title="Undone" tasks={undoneTasks} />
        <TaskLister title="Done" tasks={doneTasks} />
        <button>New Task</button>
      </div>
    );
  }
}

export default App;
