import React from "react";
import Joke from "./Joke";
import "./style.css";

export default function Jokes() {
  return (
    <div className="jokes">
      <Joke
        setup="I got my daughter a fridge for her birthday."
        punchline="I can't wait to see her face light up when she opens it."
        upvote={1}
        downvote={0}
      />
      <Joke
        setup="How did the hacker escape the police?"
        punchline="He just ransomware!"
        upvote={12}
        downvote={2}
      />
      <Joke
        setup="Why don't pirates travel on mountain roads?"
        punchline="Scurvy."
        upvote={123}
        downvote={10}
      />
      <Joke
        setup="Why do bees stay in the hive in the winter?"
        punchline="Swarm."
        upvote={1}
        downvote={100}
      />
      <Joke
        setup="What's the best thing about Switzerland?"
        punchline="I don't know, but the flag is a big plus!"
        upvote={1}
        downvote={90}
      />
      <Joke
        punchline="It’s hard to explain puns to kleptomaniacs because 
                they always take things literally."
        upvote={12233}
        downvote={200}
      />
    </div>
  );
}
