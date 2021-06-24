import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😊": "Smiling",
  "🙂": "Ok Bhai",
  "😘": "Love",
  "😫": "Annoyed",
  "😔": "Sad",
  "😳": "Shocking",
  "🤪": "Tease",
  "🥺": "Please"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState(" ");

  function emojiClickHandler(item) {
    var meaning = emojiDictionary[item];
    setMeaning(meaning);
  }

  function inputChangeHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "Sorry! We don't have it in out database";
    }
    setMeaning(meaning);

    //target value means whatever typed in the input box
  }

  return (
    <div className="App">
      <h1>Express With Meaning</h1>
      <input onChange={inputChangeHandler}></input>
      <h2> {meaning} </h2>
      <h3> Emojis We Know</h3>
      {emojisWeKnow.map((item) => {
        return (
          <span
            onClick={() => emojiClickHandler(item)}
            style={{ padding: "0.4rem", fontSize: "2rem" }}
            key={item}
          >
            {item}
          </span>
        );
      })}
    </div>
  );
}
