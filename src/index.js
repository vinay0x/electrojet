import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import createStore from './store'
import App from './App.jsx'

ReactDOM.render(
  <Provider store={createStore()}>
    <App />
  </Provider>, document.getElementById('app'))
