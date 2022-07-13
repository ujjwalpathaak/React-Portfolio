import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Particles from "../node_modules/particlesjs/dist/particles";

ReactDOM.render(<App />, document.getElementById("root"));

document.getElementById("hover").addEventListener("mouseover", mouseOver);
document.getElementById("hover").addEventListener("mouseout", mouseOut);

function mouseOver() {
  document.getElementById("mern-hover").style.display = "block";
}

function mouseOut() {
  document.getElementById("mern-hover").style.display = "none";
}

window.onload = function () {
  Particles.init({
    selector: ".background",
  });
};
