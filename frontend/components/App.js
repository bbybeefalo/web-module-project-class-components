import React from 'react'
import Form from './Form'
import TodoList from './TodoList';


export default class App extends React.Component {
  constructor() {
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
    this.setState({ ...this.state, tasks: [...this.state.tasks, newTask] })
  }

  toggleDone = taskId => {
    console.log('hi')
    this.setState({...this.state, tasks: this.state.tasks.map(task => {
        if (task.id === taskId) {
          return { ...task, completed: !task.completed }
        }
        return task;
      })})
  }

  clearDone = () => {
    this.setState({...this.state, tasks: this.state.tasks.filter(task => {
      if (!task.completed) return task;
    })})
  }

  render() {
    return (
      <div>
        <TodoList toggleDone={this.toggleDone} tasks={this.state.tasks} />
        <Form addTask={this.addTask} />
        <button onClick={this.clearDone}>Clear Completed</button>
      </div>
    )
  }
}
