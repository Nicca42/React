import React from "react";
import { render } from "react-dom";
import Router from "./components/Router";
// Applies the styling to the entire app
import "./css/style.css";

render(<Router />, document.querySelector("#main"));
