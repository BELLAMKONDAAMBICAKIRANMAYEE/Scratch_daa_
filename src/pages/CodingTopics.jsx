import { Link } from "react-router-dom";
import codingQuestions from "../data/codingQuestions";

function CodingTopics() {
  return (
    <div
      className="container-fluid py-5"
      style={{
        background: "#0f172a",
        minHeight: "100vh",
      }}
    >
      <div className="container">

        {/* Heading */}
        <h1 className="text-center text-success fw-bold mb-5">
          💻 Coding Practice Topics
        </h1>

        <div className="row g-4">

          {codingQuestions.map((topic) => (
            <div
              key={topic.topicId}
              className="col-12 col-sm-6 col-lg-4"
            >
              <div
                className="card h-100 shadow-lg border-secondary"
                style={{
                  background: "#111827",
                  color: "white",
                  transition: "0.3s",
                }}
              >
                <div className="card-body d-flex flex-column">

                  {/* Topic Number */}
                  <h3 className="text-success mb-3">
                    📚 Topic {topic.topicId}
                  </h3>

                  {/* Topic Name (if available) */}
                  {topic.topicName && (
                    <h5 className="text-info mb-3">
                      {topic.topicName}
                    </h5>
                  )}

                  {/* Total Questions */}
                  <div className="mb-3">
                    <span className="badge bg-warning text-dark fs-6">
                      {topic.questions.length} Questions
                    </span>
                  </div>

                  {/* Difficulty Count */}
                  <div className="mb-4">
                    <small className="text-secondary">
                      Practice coding problems for this topic.
                    </small>
                  </div>

                  {/* Button */}
                  <Link
                    to={`/coding/${topic.topicId}`}
                    className="btn btn-success mt-auto"
                  >
                    🚀 Start Practice
                  </Link>

                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}

export default CodingTopics;