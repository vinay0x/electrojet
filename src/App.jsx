import React from 'react'

class App extends React.Component {
  state = {
    counter: 1
  }
  render () {
    return (
      <div>
        <p>Count is { this.state.counter }!</p>
        <button
          onClick={ () => this.setState(state => ({ ...state, counter: state.counter + 1 })) }
        >Increment</button>
      </div>
    )
  }
}
export default App
