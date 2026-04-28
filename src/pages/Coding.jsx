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

  // 🔁 Reset when topic changes
  useEffect(() => {
    setCurrentIndex(0);
    setShowSolution(false);
    setShowHints(false);
  }, [id]);

  if (!topicData || topicData.questions.length === 0) {
    return <h2>⚠️ No Coding Questions Available</h2>;
  }

  const total = topicData.questions.length;
  const currentQuestion = topicData.questions[currentIndex];

  // ✅ NEXT (Question first → then Topic)
  const handleNext = () => {
    if (currentIndex < total - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      // Move to next topic
      const nextTopic = codingQuestions.find(
        (item) => item.topicId === currentId + 1
      );

      if (nextTopic) {
        navigate(`/coding/${currentId + 1}`);
      }
    }

    setShowSolution(false);
    setShowHints(false);
  };

  // ✅ PREVIOUS (Question first → then Topic)
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    } else {
      // Move to previous topic
      const prevTopic = codingQuestions.find(
        (item) => item.topicId === currentId - 1
      );

      if (prevTopic) {
        navigate(`/coding/${currentId - 1}`);
      }
    }

    setShowSolution(false);
    setShowHints(false);
  };

  return (
    <div className="container">
      <style>
        {`
        .code-box { background: #222; color: #0f0; padding: 10px; border-radius: 5px; white-space: pre-wrap; }
        .solution-box { background: #111; color: #00ffcc; padding: 10px; border-radius: 5px; white-space: pre-wrap; }
        .hint-box { background: #1a1a1a; color: #ffd700; padding: 10px; border-radius: 5px; }
        .badge { padding: 4px 10px; border-radius: 10px; margin-left: 10px; font-size: 12px; background: #444; color: white; }
        pre { font-size: 18px; }
        button { margin: 5px; }
      `}
      </style>

      <h2>💻 Coding Practice</h2>

      {/* ✅ Topic + Question Info */}
      <p>
        Topic {currentId} | Question { currentId} {/*/ {total}*/}
      </p>

      <h3>
        {/* Q{currentIndex + 1}. {currentQuestion.title} */}
        Q{currentId}. {currentQuestion.title}
        <span className="badge">{currentQuestion.difficulty}</span>
      </h3>

      <p>{currentQuestion.problem}</p>

      <h4>Starter Code:</h4>
      <pre className="code-box">{currentQuestion.starterCode}</pre>
 <pre className="code-box">{currentQuestion.examples}</pre>

      {/* Buttons */}
      <div>
        <button onClick={() => setShowHints(!showHints)}>
          {showHints ? "Hide Hints" : "Show Hints"}
        </button>

        <button onClick={() => setShowSolution(!showSolution)}>
          {showSolution ? "Hide Solution" : "Show Solution"}
        </button>
      </div>

      {/* Hints */}
      {showHints && (
        <div className="hint-box">
          <ul>
            {currentQuestion.hints.map((h, i) => (
              <li key={i}>💡 {h}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Solution */}
      {showSolution && (
        <pre className="solution-box">{currentQuestion.solution}</pre>
      )}

      {/* Navigation */}
      <div style={{ marginTop: "15px" }}>
        <button onClick={handlePrev}>
          ⬅ Previous
        </button>

        <button onClick={handleNext}>
          Next ➡
        </button>
      </div>
    </div>
  );
}

export default Coding;