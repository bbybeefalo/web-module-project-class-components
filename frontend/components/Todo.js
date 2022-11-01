import React from 'react'

export default class Todo extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <p>
          {this.props.task}
        </p>
      </div>
    )
  }
}
