import { createStore, applyMiddleware, compose } from 'redux'
import { createBrowserHistory } from 'history'
import thunk from 'redux-thunk'
import { routerMiddleware } from 'connected-react-router'
import createRootReducer from './reducers'
export const history = createBrowserHistory()
export default createStore(
  createRootReducer(history),
  compose(
    applyMiddleware(
      thunk,
      routerMiddleware(history)
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : () => null
  )
)
