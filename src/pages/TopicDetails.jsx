import { useParams } from "react-router-dom";
import data from "../data/syllabus.json";

function TopicDetail() {
  const { id } = useParams();

  const topic = data.topics.find((t) => t.id == id);

  if (!topic) {
    return (
      <div
        className="container-fluid min-vh-100 d-flex justify-content-center align-items-center"
        style={{ background: "#0f172a" }}
      >
        <h2 className="text-danger">Topic not found</h2>
      </div>
    );
  }

  return (
    <div
      className="container-fluid py-5"
      style={{ background: "#0f172a", minHeight: "100vh" }}
    >
      <div className="container">

        {/* Title */}
        <h1 className="text-success text-center fw-bold mb-5">
          {topic.title}
        </h1>

        {/* Definition */}
        <div className="card bg-dark text-light shadow mb-4">
          <div className="card-body">
            <h3>📘 Definition</h3>
            <p>{topic.definition}</p>
          </div>
        </div>

        {/* Flow */}
        <div className="card bg-dark text-light shadow mb-4">
          <div className="card-body">
            <h3>🔄 Flow</h3>
            <p>{topic.flow}</p>
          </div>
        </div>

        {/* Rules */}
        {topic.rules?.length > 0 && (
          <div className="card bg-dark text-light shadow mb-4">
            <div className="card-body">
              <h3>📏 Rules</h3>

              <ul>
                {topic.rules.map((rule, i) => (
                  <li key={i}>{rule}</li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Flowcharts */}
        {topic.flowcharts?.length > 0 && (
          <div className="card bg-dark text-light shadow mb-4">
            <div className="card-body">
              <h3>📊 Flowcharts</h3>

              <ul>
                {topic.flowcharts.map((flow, i) => (
                  <li key={i}>{flow}</li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Tables */}
        {topic.tables?.length > 0 &&
          topic.tables.map((table, index) => (
            <div
              className="card bg-dark text-light shadow mb-4"
              key={index}
            >
              <div className="card-body">

                <h3>📋 {table.title}</h3>

                <div className="table-responsive">
                  <table className="table table-bordered table-striped table-dark">
                    <thead>
                      <tr>
                        {table.headers?.map((head, i) => (
                          <th key={i}>{head}</th>
                        ))}
                      </tr>
                    </thead>

                    <tbody>
                      {table.rows?.map((row, i) => (
                        <tr key={i}>
                          {row.map((cell, j) => (
                            <td key={j}>{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

              </div>
            </div>
          ))}

        {/* Examples */}
        {topic.examples?.length > 0 && (
          <div className="card bg-dark text-light shadow mb-4">
            <div className="card-body">
              <h3>💻 Examples</h3>

              {topic.examples.map((ex, i) => (
                <div key={i} className="mb-4">

                  <pre
                    className="p-3 rounded"
                    style={{
                      background: "#1e293b",
                      color: "#22c55e",
                      overflowX: "auto",
                    }}
                  >
                    {ex.code}
                  </pre>

                  <p>{ex.explanation}</p>

                  <hr />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Important Notes */}
        {topic.important_notes?.length > 0 && (
          <div className="card bg-dark text-light shadow mb-4">
            <div className="card-body">
              <h3>⚠️ Important Notes</h3>

              <ul>
                {topic.important_notes.map((note, i) => (
                  <li key={i}>{note}</li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Concept */}
        {topic.concept && (
          <div className="card bg-dark text-light shadow mb-4">
            <div className="card-body">
              <h3>🧠 Concept</h3>
              <p>{topic.concept}</p>
            </div>
          </div>
        )}

        {/* Summary */}
        <div className="card bg-dark text-light shadow mb-4">
          <div className="card-body">
            <h3>📌 Summary</h3>
            <p>{topic.summary}</p>
          </div>
        </div>

        {/* Real-Time Examples */}
        {topic.real_time_examples?.length > 0 && (
          <div className="card bg-dark text-light shadow mb-4">
            <div className="card-body">
              <h3>🌍 Real-Time Examples</h3>

              <ul>
                {topic.real_time_examples.map((ex, i) => (
                  <li key={i}>{ex}</li>
                ))}
              </ul>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default TopicDetail;