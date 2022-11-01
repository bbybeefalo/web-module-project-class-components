import React from 'react'
import Todo from './Todo'

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        To-Do List here
        {this.props.tasks.map(task => (
          console.log(task.id, task.name),
          <Todo key={task.id} task={task.name} />
        ))}
      </div>
    )
  }
}
