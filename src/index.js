import ReactDOM from "react-dom";
import { Provider } from 'react-redux'

import App from './App'
import style from "./styles/main.css";

ReactDOM.render(
  <Provider>
    <App />
  </Provider>
  , document.getElementById("app"));