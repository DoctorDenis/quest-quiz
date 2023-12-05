import { useState } from "react";
import "./App.css";
import React from "react";

const answers = ["аполон", "аполлон", "апалон", "апаллон"];

function checkAnswer(data) {
  const answer = data.target.elements.word.value;
  return answers.includes(answer.toLowerCase());
}

function App() {
  const [inputText, setInputText] = useState("");
  const [result, setResult] = useState(false);

  return (
    <div className="App">
      <img src="./picture.jpg" alt="The god of the" className="image"></img>
      <h3>
        Він є давньогрецький бог, що керує світлом, музикою, мистецтвом,
        знанням, передбаченням, зціленням і очищенням.
        <br />
        Хто це?
      </h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setResult(checkAnswer(e));
          setInputText(e.target.elements.word.value);
          // e.target.elements.word.validity = checkAnswer(e);
          console.log(e.target.elements.word.validity);
        }}
      >
        <label className="label">
          Відповідь введіть сюди
          <span>⬇️</span>
          <input
            type="text"
            name="word"
            className={!result && inputText.length ? "false" : "true"}
          />
        </label>
        <button className="submit button" type="submit">
          Перевірити
        </button>
      </form>
      {result && (
        <>
          <p className="greeting">Правильно! Слово підказка:</p>
          <h1 className="answer">Акваріум</h1>
        </>
      )}
      {!result && inputText.length ? <h1>Ні. Спробуйте ще ... 😉</h1> : null}
    </div>
  );
}

export default App;
