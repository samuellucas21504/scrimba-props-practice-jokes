import React from "react";
import "./style.css";

export default function Joke(props) {
  if (props.setup) {
    return (
      <div className="joke">
        <h2>{props.setup}</h2>
        <p>{props.punchline}</p>
      </div>
    );
  } else {
    return (
      <div className="joke">
        <h2>{props.punchline}</h2>
      </div>
    );
  }
}
