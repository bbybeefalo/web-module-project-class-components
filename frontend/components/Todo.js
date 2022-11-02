import React from 'react'

export default class Todo extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div 
      className={`${this.props.task.completed ? 'completed': ''}`}
      onClick={() => this.props.toggleDone(this.props.task.id) } >
        <p>
          {this.props.task.name}
        </p>
      </div>
    )
  }
}
