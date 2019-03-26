import React from "react";
import ReactDOM from "react-dom";

//this is how your import bootstrap
//after npm install bootstrap --save
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/App.css';

import App from "./components/App";

ReactDOM.render(<App />, document.querySelector("#root"));
