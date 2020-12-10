import React from "react";
import { render } from "react-dom";
import StorePicker from "./components/StorePicker";
import App from "./components/App";
// Applies the styling to the entire app
import "./css/style.css";

render(<App />, document.querySelector("#main"));
