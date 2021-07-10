import * as React from "react";
import * as ReactDOM from "react-dom";
import { OptionsApp } from "./OptionsApp";

import "./popup.css";

var mountNode = document.getElementById("popup");
ReactDOM.render(<OptionsApp />, mountNode);
