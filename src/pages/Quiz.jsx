import { useState } from "react";
import quiz from "../data/quiz.json";

function Quiz() {
  const [score, setScore] = useState(0);

  const handleAnswer = (q, opt) => {
    if (opt === q.answer) setScore(score + 1);
  };

  return (
    <div className="container">
      {quiz.map((q, i) => (
        <div className="card" key={i}>
          <p>{q.question}</p>
          {q.options.map((opt) => (
            <button onClick={() => handleAnswer(q, opt)}>
              {opt}
            </button>
          ))}
        </div>
      ))}
      <h2>Score: {score}</h2>
    </div>
  );
}

export default Quiz;