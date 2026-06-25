import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import mammoth from "mammoth";

function TopicDetail() {
  const { id } = useParams();

  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    fetchTopic();
  }, [id]);

  async function fetchTopic() {
    try {
      const response = await fetch("/docs/web_site_content.docx");

      const arrayBuffer = await response.arrayBuffer();

      const result = await mammoth.convertToHtml({
        arrayBuffer,
      });

      setContent(result.value);

      // Extract first heading or paragraph as title
      const parser = new DOMParser();
      const doc = parser.parseFromString(result.value, "text/html");

      const heading =
        doc.querySelector("h1")?.textContent ||
        doc.querySelector("h2")?.textContent ||
        doc.querySelector("p")?.textContent ||
        "Topic Detail";

      setTitle(heading);
      document.title = heading;
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div
      className="container-fluid py-5"
      style={{
        background: "#0f172a",
        minHeight: "100vh",
      }}
    >
      <div className="container">
        <h1 className="text-success text-center mb-4">
          {title}
        </h1>

        <div className="card bg-dark text-light shadow p-4">
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </div>
    </div>
  );
}

export default TopicDetail;