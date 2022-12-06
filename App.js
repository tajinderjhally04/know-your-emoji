import "./styles.css";
import { useState } from "react";

const emojiDictionary = {
  "👍": "Thumbs Up",
  "🌏": "Earth",
  "⭐️": "Star",
  "😊": "Happy",
  "🌹": "Rose",
  "😇": "Blessed",
  "❤️": "Heart",
  "🙏🏻": "Namaste"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function inputEmojiHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "We don't have this emoji in our database.";
    }

    setMeaning(meaning);
  }

  function clickEmojiHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Mark8: Know your emoji</h1>

      <input onChange={inputEmojiHandler} style={{ padding: "1rem" }} />

      <div style={{ margin: "1rem" }}> Meaning is : {meaning} </div>

      <h3>Emoji's we have in our database </h3>

      {emojisWeKnow.map((emoji) => {
        return (
          <span
            onClick={() => clickEmojiHandler(emoji)}
            style={{ padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {" "}
            {emoji}{" "}
          </span>
        );
      })}
    </div>
  );
}
