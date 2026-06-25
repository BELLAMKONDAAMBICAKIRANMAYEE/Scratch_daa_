import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import mammoth from "mammoth";

function SubtopicDetails() {
  const { subId } = useParams();

  const [content, setContent] = useState("");

  useEffect(() => {
    loadDoc();
  }, [subId]);

  async function loadDoc() {
  try {
    const response = await fetch("/docs/web_site_content.docx");

    const arrayBuffer = await response.arrayBuffer();

    const result = await mammoth.convertToHtml({
      arrayBuffer,
    });

    setContent(result.value);

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
        <div className="card bg-dark text-light shadow p-4">
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </div>
    </div>
  );
}

export default SubtopicDetails;