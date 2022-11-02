import React from 'react'
import Todo from './Todo'

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.tasks.map(task => (
          <Todo toggleDone={this.props.toggleDone} key={task.id} task={task} />
        ))}
      </div>
    )
  }
}
