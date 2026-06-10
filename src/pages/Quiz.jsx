import { useState } from "react";
import quiz from "../data/quiz.json";

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (option) => {
    if (option === quiz[currentQuestion].answer) {
      setScore((prev) => prev + 1);
    }

    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < quiz.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
  };

  return (
    <div
      className="container-fluid py-5"
      style={{
        background: "#0f172a",
        minHeight: "100vh",
      }}
    >
      <div className="container">

        <h1 className="text-center text-success fw-bold mb-5">
          📝 Python Quiz
        </h1>

        {showResult ? (
          <div
            className="card bg-dark text-light shadow-lg mx-auto"
            style={{ maxWidth: "600px" }}
          >
            <div className="card-body text-center">

              <h2 className="text-success mb-4">
                🎉 Quiz Completed
              </h2>

              <h3>
                Score:{" "}
                <span className="text-warning">
                  {score} / {quiz.length}
                </span>
              </h3>

              <button
                className="btn btn-success mt-4"
                onClick={restartQuiz}
              >
                Restart Quiz
              </button>

            </div>
          </div>
        ) : (
          <div
            className="card bg-dark text-light shadow-lg mx-auto"
            style={{ maxWidth: "800px" }}
          >
            <div className="card-body">

              <h5 className="text-info mb-3">
                Question {currentQuestion + 1} / {quiz.length}
              </h5>

              <h3 className="mb-4">
                {quiz[currentQuestion].question}
              </h3>

              <div className="d-grid gap-3">
                {quiz[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    className="btn btn-outline-success"
                    onClick={() => handleAnswer(option)}
                  >
                    {option}
                  </button>
                ))}
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default Quiz;