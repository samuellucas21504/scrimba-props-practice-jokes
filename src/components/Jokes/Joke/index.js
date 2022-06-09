import React from "react";
import "./style.css";

export default function Joke(props) {
    return (
      <div className="joke">
        {props.setup && <h2>{props.setup}</h2>}
        <p>{props.punchline}</p>
      </div>
    );
}
