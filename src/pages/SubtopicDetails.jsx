import { useParams } from "react-router-dom";
import data from "../data/syllabus.json";

function SubtopicDetail() {
  const { topicId, subId } = useParams();

  const topic = data.topics.find(t => t.id === Number(topicId));
  const sub = topic?.subtopics?.find(s => s.id === subId);

  if (!sub) return <h2>Subtopic not found</h2>;

  return (

    <div className="container subtopic">
      <style>  {`
      .subtopic {
  max-width: 900px;
  margin: auto;
  padding: 20px;
}

.title {
  margin-bottom: 20px;
}

section {
  background: white;
  margin-bottom: 15px;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
}

h2 {
  margin-bottom: 10px;
  color: #333;
}

ul {
  padding-left: 20px;
}

.example pre {
  background: #222;
  color: #0f0;
  padding: 10px;
  border-radius: 5px;
  overflow-x: auto;
}

.table-box {
  background: #f1f1f1;
  padding: 10px;
  border-radius: 5px;
}

/* Mobile Responsive */
@media (max-width: 600px) {
  .subtopic {
    padding: 10px;
  }

  section {
    padding: 10px;
  }
}
`}</style>
      <h1 className="title">{sub.title}</h1>

      {/* Definition */}
      <section>
        <h2>Definition</h2>
        <p>{sub.definition}</p>
      </section>

      {/* Flow */}
      <section>
        <h2>Flow</h2>
        <p>{sub.flow}</p>
      </section>

      {/* Rules */}
      <section>
        <h2>Rules</h2>
        <ul>
          {sub.rules?.map((rule, i) => (
            <li key={i}>{rule}</li>
          ))}
        </ul>
      </section>

      {/* Flowcharts */}
      <section>
        <h2>Flowchart</h2>
        <ul>
          {sub.flowcharts?.map((flow, i) => (
            <li key={i}>{flow}</li>
          ))}
        </ul>
      </section>

      {/* Tables */}
      
      <section>
  <h2>Tables</h2>
  {sub.tables?.map((table, i) => (
    <div key={i} className="table-box">
      <h4>{table.title}</h4>
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            {table.columns?.map((col, idx) => (
              <th
                key={idx}
                style={{
                  border: '1px solid #ccc',
                  padding: '8px 12px',
                  backgroundColor: '#f0f0f0',
                  textAlign: 'left',
                  fontWeight: 'bold'
                }}
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows?.map((row, rIdx) => (
            <tr key={rIdx} style={{ backgroundColor: rIdx % 2 === 0 ? '#fff' : '#f9f9f9' }}>
              {row.map((cell, cIdx) => (
                <td
                  key={cIdx}
                  style={{
                    border: '1px solid #ccc',
                    padding: '8px 12px',
                    textAlign: 'left'
                  }}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ))}
</section>

      {/* Examples */}
      <section>
        <h2>Examples</h2>
        {sub.examples?.map((ex, i) => (
          <div key={i} className="example">
            <pre>{ex.code}</pre>
            <p>{ex.explanation}</p>
          </div>
        ))}
      </section>

      {/* Important Notes */}
      <section>
        <h2>Important Notes</h2>
        <ul>
          {sub.important_notes?.map((note, i) => (
            <li key={i}>{note}</li>
          ))}
        </ul>
      </section>

      {/* Summary */}
      <section>
        <h2>Summary</h2>
        <p>{sub.summary}</p>
      </section>

      {/* Real-time Examples */}
      <section>
        <h2>Real-time Examples</h2>
        <ul>
          {sub.real_time_examples?.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default SubtopicDetail;