import { useParams } from "react-router-dom";
import data from "../data/syllabus.json";

function SubtopicDetail() {
  const { topicId, subId } = useParams();

  const topic = data.topics.find((t) => t.id === Number(topicId));
  const sub = topic?.subtopics?.find((s) => s.id === subId);

  if (!sub) {
    return (
      <div
        className="container-fluid min-vh-100 d-flex justify-content-center align-items-center"
        style={{ background: "#0f172a" }}
      >
        <h2 className="text-danger">Subtopic not found</h2>
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
          {sub.title}
        </h1>

        {/* Definition */}
        <div className="card bg-dark text-light shadow mb-4">
          <div className="card-body">
            <h3>📘 Definition</h3>
            <p>{sub.definition}</p>
          </div>
        </div>

        {/* Flow */}
        <div className="card bg-dark text-light shadow mb-4">
          <div className="card-body">
            <h3>🔄 Flow</h3>
            <p>{sub.flow}</p>
          </div>
        </div>

        {/* Rules */}
        {sub.rules?.length > 0 && (
          <div className="card bg-dark text-light shadow mb-4">
            <div className="card-body">
              <h3>📏 Rules</h3>
              <ul>
                {sub.rules.map((rule, i) => (
                  <li key={i}>{rule}</li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Flowcharts */}
        {sub.flowcharts?.length > 0 && (
          <div className="card bg-dark text-light shadow mb-4">
            <div className="card-body">
              <h3>📊 Flowcharts</h3>
              <ul>
                {sub.flowcharts.map((flow, i) => (
                  <li key={i}>{flow}</li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Tables */}
        {sub.tables?.map((table, i) => (
          <div key={i} className="card bg-dark text-light shadow mb-4">
            <div className="card-body">

              <h3>📋 {table.title}</h3>

              <div className="table-responsive">
                <table className="table table-bordered table-dark table-striped">
                  <thead>
                    <tr>
                      {table.columns?.map((col, idx) => (
                        <th key={idx}>{col}</th>
                      ))}
                    </tr>
                  </thead>

                  <tbody>
                    {table.rows?.map((row, rowIndex) => (
                      <tr key={rowIndex}>
                        {row.map((cell, cellIndex) => (
                          <td key={cellIndex}>{cell}</td>
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
        {sub.examples?.length > 0 && (
          <div className="card bg-dark text-light shadow mb-4">
            <div className="card-body">
              <h3>💻 Examples</h3>

              {sub.examples.map((ex, i) => (
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

                  <p className="mt-3">{ex.explanation}</p>

                  <hr />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Important Notes */}
        {sub.important_notes?.length > 0 && (
          <div className="card bg-dark text-light shadow mb-4">
            <div className="card-body">
              <h3>⚠️ Important Notes</h3>

              <ul>
                {sub.important_notes.map((note, i) => (
                  <li key={i}>{note}</li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Summary */}
        <div className="card bg-dark text-light shadow mb-4">
          <div className="card-body">
            <h3>📌 Summary</h3>
            <p>{sub.summary}</p>
          </div>
        </div>

        {/* Real-time Examples */}
        {sub.real_time_examples?.length > 0 && (
          <div className="card bg-dark text-light shadow mb-4">
            <div className="card-body">
              <h3>🌍 Real-Time Examples</h3>

              <ul>
                {sub.real_time_examples.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default SubtopicDetail;