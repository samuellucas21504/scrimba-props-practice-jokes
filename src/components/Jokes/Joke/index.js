import React from "react";
import "./style.css";

export default function Joke(props) {
    return (
      <div className="joke">
        {props.setup ? 
            <>
                <h2>{props.setup}</h2> 
                <p>{props.punchline}</p>
            </>
        : 
            <>
                <h2>{props.punchline}</h2>
            </>
        }
        <p><span className="upvote">{props.upvote}</span> | <span className="downvote">{props.downvote}</span></p>
      </div>
    );
}
