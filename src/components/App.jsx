// const react = require("react");
// const reactDOM = require("react-dom");
//在import里，大小写是很重要的
import React from "react";
import emojis from "./emojis";

function Term(props) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label="Tense Biceps">
          {props.img}
        </span>
        <span>{props.name}</span>
      </dt>
      <dd>{props.meaning}</dd>
    </div>
  );
}

function createEmoji(Emoji) {
  return (
    <Term
      key={Emoji.id}
      img={Emoji.emoji}
      name={Emoji.name}
      meaning={Emoji.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojis.map(createEmoji)}</dl>
    </div>
  );
}

export default App;
