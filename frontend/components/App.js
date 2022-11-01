import React from 'react'
import Form from './Form'
import TodoList from './TodoList';


export default class App extends React.Component {
constructor () {
  super();
  this.state = {
    tasks: []
  };
}

addTask = (e, task) => {
  e.preventDefault();
  const newTask = {
    name: task,
    id: Date.now(),
    completed: false
  }
  this.setState({...this.state, tasks: [...this.state.tasks, newTask]})
}

  render() {
    return (
      <div>
        <TodoList tasks={this.state.tasks}/>
        <Form addTask={this.addTask}/>
      </div>
    )
  }
}
