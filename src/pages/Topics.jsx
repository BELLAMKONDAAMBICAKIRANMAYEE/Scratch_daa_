import data from "../data/syllabus.json";
import { Link, useNavigate } from "react-router-dom";

function Topics() {
  const navigate = useNavigate();

  return (
    <div className="container">

      {/* ✅ FIX: data.topics */}
      {data.topics.map((t) => (
        <div className="card" key={t.id}>
          <h2>{t.title}</h2>
          <p>{t.definition}</p>

          <Link to={`/topic/${t.id}`}>
            <button>Learn More</button>
          </Link>

          <button onClick={() => navigate(`/quiz/${t.id}`)}>
            Start Quiz
          </button>
          {/* <button onClick={() => navigate(`/code/${t.id}`)}>
  Practice Coding
</button> */}
        </div>
      ))}

    </div>
  );
}

export default Topics;