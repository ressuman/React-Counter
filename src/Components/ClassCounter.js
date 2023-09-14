import React, { Component } from 'react';

class ClassCounter extends Component {
  
  constructor(props){
    super(props);
    
    this.state = {
      count: 3
    }
  }

  handleIncrease = () => {
    this.setState({count: this.state.count + 9})
  };

  handleDecrease = () => {
    this.setState({count: this.state.count - 5})
  };

  render() {
    return (
      <div>
        <h1>CLASS COUNT</h1>
        <h1>COUNT</h1>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleIncrease}>Increase Count</button>
        <button onClick={this.handleDecrease}>Decrease Count</button>
      </div>
    )
  }
}

export default ClassCounter;
