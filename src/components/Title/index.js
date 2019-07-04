import React from "react";
import "./style.css";

function Title(props) {
  return (
    <div className="row title-area">
      {/* <h1 className="title">{props.children}</h1> */}
      <div className="col-4"> <img alt="Zelda Game Title" src="/resources/images/ZeldaTitle.png" /> </div>
      <div className="col-4 align-middle">
        <div className="text-center score-div"><h2 className="scores">Current Score:  {props.currentScore}</h2></div>
        <div className="text-center score-div"><h2 className="scores">Best Score:  {props.bestScore}</h2></div>
      </div>
    </div>
  )

}

export default Title;
