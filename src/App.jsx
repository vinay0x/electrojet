import React from 'react'
import './styles/main.css'

class App extends React.Component {
  state = {
    count: 0
  }
  increment = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  decrement = () => {
    this.setState({
      count: this.state.count - 1
    })
  }
  render () {
    return (
      <div>
        <p>Count is { this.state.count }!</p>
        <button
          onClick={this.increment}
        >Increment</button>
        <button
          onClick={this.decrement}
        >Decrement</button>
      </div>
    )
  }
}
export default App
