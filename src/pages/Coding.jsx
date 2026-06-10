import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import codingQuestions from "../data/codingQuestions";

function Coding() {
  const { id } = useParams();
  const navigate = useNavigate();

  const currentId = Number(id);

  const topicData = codingQuestions.find(
    (item) => item.topicId === currentId
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showSolution, setShowSolution] = useState(false);
  const [showHints, setShowHints] = useState(false);

  useEffect(() => {
    setCurrentIndex(0);
    setShowSolution(false);
    setShowHints(false);
  }, [id]);

  if (!topicData || topicData.questions.length === 0) {
    return (
      <div
        className="container-fluid min-vh-100 d-flex justify-content-center align-items-center"
        style={{ background: "#0f172a" }}
      >
        <h2 className="text-warning">
          ⚠️ No Coding Questions Available
        </h2>
      </div>
    );
  }

  const total = topicData.questions.length;
  const currentQuestion = topicData.questions[currentIndex];

  const handleNext = () => {
    if (currentIndex < total - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      const nextTopic = codingQuestions.find(
        (item) => item.topicId === currentId + 1
      );

      if (nextTopic) {
        navigate(`/coding/${currentId + 1}`);
      }
    }

    setShowHints(false);
    setShowSolution(false);
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    } else {
      const prevTopic = codingQuestions.find(
        (item) => item.topicId === currentId - 1
      );

      if (prevTopic) {
        navigate(`/coding/${currentId - 1}`);
      }
    }

    setShowHints(false);
    setShowSolution(false);
  };

  return (
    <div
      className="container-fluid py-5"
      style={{ background: "#0f172a", minHeight: "100vh" }}
    >
      <div className="container">

        {/* Title */}
        <h1 className="text-center text-success fw-bold mb-4">
          💻 Coding Practice
        </h1>

        {/* Question Card */}
        <div className="card bg-dark text-light shadow mb-4">
          <div className="card-body">

            <p className="text-secondary">
              Topic {currentId} | Question {currentIndex + 1} / {total}
            </p>

            <h3 className="mb-3">
              Q{currentIndex + 1}. {currentQuestion.title}

              <span className="badge bg-primary ms-3">
                {currentQuestion.difficulty}
              </span>
            </h3>

            <p>{currentQuestion.problem}</p>

          </div>
        </div>

        {/* Starter Code */}
        <div className="card bg-dark text-light shadow mb-4">
          <div className="card-body">

            <h4>🚀 Starter Code</h4>

            <pre
              className="p-3 rounded"
              style={{
                background: "#1e293b",
                color: "#22c55e",
                overflowX: "auto",
              }}
            >
              {currentQuestion.starterCode}
            </pre>

          </div>
        </div>

        {/* Examples */}
        <div className="card bg-dark text-light shadow mb-4">
          <div className="card-body">

            <h4>📝 Examples</h4>

            <pre
              className="p-3 rounded"
              style={{
                background: "#1e293b",
                color: "#facc15",
                overflowX: "auto",
              }}
            >
              {currentQuestion.examples}
            </pre>

          </div>
        </div>

        {/* Buttons */}
        <div className="d-flex flex-wrap gap-3 mb-4">

          <button
            className="btn btn-warning"
            onClick={() => setShowHints(!showHints)}
          >
            {showHints ? "Hide Hints" : "Show Hints"}
          </button>

          <button
            className="btn btn-info"
            onClick={() => setShowSolution(!showSolution)}
          >
            {showSolution ? "Hide Solution" : "Show Solution"}
          </button>

        </div>

        {/* Hints */}
        {showHints && (
          <div className="card bg-dark text-light shadow mb-4">
            <div className="card-body">

              <h4>💡 Hints</h4>

              <ul>
                {currentQuestion.hints.map((hint, i) => (
                  <li key={i}>{hint}</li>
                ))}
              </ul>

            </div>
          </div>
        )}

        {/* Solution */}
        {showSolution && (
          <div className="card bg-dark text-light shadow mb-4">
            <div className="card-body">

              <h4>✅ Solution</h4>

              <pre
                className="p-3 rounded"
                style={{
                  background: "#111827",
                  color: "#00ffcc",
                  overflowX: "auto",
                }}
              >
                {currentQuestion.solution}
              </pre>

            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="d-flex justify-content-between">

          <button
            className="btn btn-secondary"
            onClick={handlePrev}
          >
            ⬅ Previous
          </button>

          <button
            className="btn btn-success"
            onClick={handleNext}
          >
            Next ➡
          </button>

        </div>

      </div>
    </div>
  );
}

export default Coding;