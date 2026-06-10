import data from "../data/syllabus.json";
import { Link, useNavigate } from "react-router-dom";

function Topics() {
  const navigate = useNavigate();

  return (
    <div
      className="container-fluid py-5 min-vh-100"
      style={{ background: "#0f172a" }}
    >
      <div className="container">

        <h1 className="text-center text-success fw-bold mb-5">
          Python Topics
        </h1>

        <div className="row g-4">

          {data.topics.map((t) => (
            <div className="col-12 col-md-6 col-lg-4" key={t.id}>
              <div
                className="card h-100 shadow"
                style={{
                  backgroundColor: "#111827",
                  color: "white",
                  border: "1px solid #374151",
                }}
              >
                <div className="card-body d-flex flex-column">

                  <h3 className="card-title text-success mb-3">
                    {t.title}
                  </h3>

                  <p className="card-text flex-grow-1">
                    {t.definition}
                  </p>

                  <div className="d-grid gap-2">

                    <Link
                      to={`/topic/${t.id}`}
                      className="btn btn-success"
                    >
                      Learn More
                    </Link>

                    <button
                      className="btn btn-primary"
                      onClick={() => navigate(`/quiz/${t.id}`)}
                    >
                      Start Quiz
                    </button>

                    {/* Practice Coding Button */}
                    {/* 
                    <button
                      className="btn btn-warning"
                      onClick={() => navigate(`/code/${t.id}`)}
                    >
                      Practice Coding
                    </button>
                    */}

                  </div>

                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}

export default Topics;