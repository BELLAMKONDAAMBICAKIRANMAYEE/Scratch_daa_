import { useParams } from "react-router-dom";
import { useState } from "react";
import quizData from "../data/quiz.json";

function QuizPage() {
  const { id } = useParams();

  const topicQuiz = quizData.find((q) => q.topicId == id);

  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  if (!topicQuiz) {
    return (
      <div
        className="container-fluid min-vh-100 d-flex justify-content-center align-items-center"
        style={{ background: "#0f172a" }}
      >
        <h2 className="text-danger">No Quiz Found</h2>
      </div>
    );
  }

  const question = topicQuiz.quiz[current];

  const handleAnswer = (option) => {
    const newScore =
      option === question.answer ? score + 1 : score;

    setScore(newScore);

    if (current < topicQuiz.quiz.length - 1) {
      setCurrent((prev) => prev + 1);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrent(0);
    setScore(0);
    setShowResult(false);
  };

  return (
    <div
      className="container-fluid py-5"
      style={{ background: "#0f172a", minHeight: "100vh" }}
    >
      <div className="container">

        <h1 className="text-center text-success fw-bold mb-5">
          📝 {topicQuiz.title}
        </h1>

        {showResult ? (
          <div
            className="card bg-dark text-light shadow-lg mx-auto"
            style={{ maxWidth: "700px" }}
          >
            <div className="card-body text-center">

              <h2 className="text-success mb-4">
                🎉 Quiz Completed
              </h2>

              <h3>
                Your Score:
                <span className="text-warning">
                  {" "}
                  {score} / {topicQuiz.quiz.length}
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

              <div className="d-flex justify-content-between mb-4">
                <span className="badge bg-info fs-6">
                  Question {current + 1}
                </span>

                <span className="badge bg-warning text-dark fs-6">
                  {topicQuiz.quiz.length} Questions
                </span>
              </div>

              <h3 className="mb-4">
                Q{current + 1}. {question.question}
              </h3>

              <div className="d-grid gap-3">
                {question.options.map((opt, i) => (
                  <button
                    key={i}
                    className="btn btn-outline-success"
                    onClick={() => handleAnswer(opt)}
                  >
                    {opt}
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

export default QuizPage;