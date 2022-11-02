import React from 'react'

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: ''
    }
  }

  handleChange = e => {
    e.preventDefault();
    this.setState({ ...this.state, task: e.target.value })
  }

  submitForm = e => {
    e.preventDefault();
    this.props.addTask(e, this.state.task);
    this.setState({ ...this.state, task: '' });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitForm} >
          <input 
          type="text" 
          name="task" 
          value={this.state.task} 
          onChange={this.handleChange} />
          <button>Add</button>
          
        </form>
      </div>
    )
  }
}
