import data from "../data/syllabus.json";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function Sidebar({ isOpen, setIsOpen }) {
  const navigate = useNavigate();
  const location = useLocation();

  const [openTopicId, setOpenTopicId] = useState(null);

  // Extract URL params
  const pathParts = location.pathname.split("/");
  const topicId = pathParts[2];
  const subId = pathParts[3];

  // Auto-open topic
  useEffect(() => {
    if (topicId) {
      setOpenTopicId(Number(topicId));
    }
  }, [topicId]);

  const toggleTopic = (id) => {
    setOpenTopicId(openTopicId === id ? null : id);
  };

  return (
    <div className={`sidebar ${isOpen ? "expanded" : "collapsed"}`}>

      {/* Toggle */}
      <button className="toggle-btn" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "⬅" : "➡"}
      </button>

      <h3>{isOpen ? "📚 Topics" : "📂"}</h3>

      {data.topics.map((t) => (
        <div key={t.id} className="sidebar-item">

          {/* Topic */}
          <p className="topic-title" onClick={() => toggleTopic(t.id)}>
            {isOpen ? t.title : "•"}
            {isOpen && (openTopicId === t.id ? " ▲" : " ▼")}
          </p>

          {/* Subtopics */}
          {isOpen && openTopicId === t.id && (
            <ul className="subtopic-list">
              {t.subtopics.map((sub) => (
                <li
                  key={sub.id}
                  className={String(sub.id) === subId ? "active-subtopic" : ""}
                  onClick={() => {
                    navigate(`/topic/${t.id}/${sub.id}`);
                    setIsOpen(false); // 🔥 close on mobile
                  }}
                >
                  {sub.title}
                </li>
              ))}
            </ul>
          )}

        </div>
      ))}
    </div>
  );
}

export default Sidebar;