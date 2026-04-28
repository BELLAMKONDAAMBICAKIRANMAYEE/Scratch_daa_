import { useParams } from "react-router-dom";
import data from "../data/syllabus.json";

function TopicDetail() {
  const { id } = useParams();

  // ✅ FIX: access topics array
  const topic = data.topics.find((t) => t.id == id);

  if (!topic) return <h2>Topic not found</h2>;

  return (
    <div className="container">

      {/* TITLE */}
      <h1>{topic.title}</h1>

      {/* DEFINITION */}
      <section className="card">
        <h2>📘 Definition</h2>
        <p>{topic.definition}</p>
      </section>

      {/* FLOW */}
      <section className="card">
        <h2>🔄 Flow</h2>
        <p>{topic.flow}</p>
      </section>

      {/* RULES */}
      {topic.rules?.length > 0 && (
        <section className="card">
          <h2>📏 Rules</h2>
          <ul>
            {topic.rules.map((rule, i) => (
              <li key={i}>{rule}</li>
            ))}
          </ul>
        </section>
      )}

      {/* FLOWCHARTS */}
      {topic.flowcharts?.length > 0 && (
        <section className="card">
          <h2>📊 Flowcharts</h2>
          <ul>
            {topic.flowcharts.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </section>
      )}

      {/* TABLES */}
      {topic.tables?.length > 0 &&
        topic.tables.map((table, index) => (
          <section className="card" key={index}>
            <h2>📋 {table.title}</h2>
            <table border="1" cellPadding="8">
              <thead>
                <tr>
                  {table.headers?.map((col, i) => (
                    <th key={i}>{col}</th>
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
          </section>
        ))}

      {/* EXAMPLES */}
      {topic.examples?.length > 0 && (
        <section className="card">
          <h2>💻 Examples</h2>
          {topic.examples.map((ex, i) => (
            <div key={i}>
              <pre style={{ background: "#eee", padding: "10px" }}>
                {ex.code}
              </pre>
              <p>{ex.explanation}</p>
            </div>
          ))}
        </section>
      )}

      {/* IMPORTANT NOTES */}
      {topic.important_notes?.length > 0 && (
        <section className="card">
          <h2>⚠️ Important Notes</h2>
          <ul>
            {topic.important_notes.map((note, i) => (
              <li key={i}>{note}</li>
            ))}
          </ul>
        </section>
      )}

      {/* CONCEPT (SAFE) */}
      {topic.concept && (
        <section className="card">
          <h2>🧠 Concept</h2>
          <p>{topic.concept}</p>
        </section>
      )}

      {/* SUMMARY */}
      <section className="card">
        <h2>📌 Summary</h2>
        <p>{topic.summary}</p>
      </section>

      {/* REAL-TIME */}
      {topic.real_time_examples?.length > 0 && (
        <section className="card">
          <h2>🌍 Real-Time Examples</h2>
          <ul>
            {topic.real_time_examples.map((ex, i) => (
              <li key={i}>{ex}</li>
            ))}
          </ul>
        </section>
      )}

    </div>
  );
}

export default TopicDetail;