import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as css_imp from "./test.module.css";
import * as scss_imp from "./test.module.scss";
import * as scss_var_imp from "./test_with_vars.module.scss";

console.log("pure css:\n", css_imp, "\nscss:\n", scss_imp, "\nscss from vars:\n", scss_var_imp);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
