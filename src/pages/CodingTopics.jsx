import { Link } from "react-router-dom";
import codingQuestions from "../data/codingQuestions";

function CodingTopics() {
  return (
    <div className="container">
      <h2>💻 Coding Topics</h2>

      {codingQuestions.map((topic) => (
        <div key={topic.topicId} className="card">
          <h3>Topic {topic.topicId}</h3>

          <p>Total Questions: {topic.questions.length}</p>

          <Link to={`/coding/${topic.topicId}`}>
            <button>Start Practice</button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default CodingTopics;