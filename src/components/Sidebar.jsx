import mammoth from "mammoth";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import data from "../data/syllabus.json";
import {
  FaBook,
  FaLayerGroup,
  FaAngleLeft,
  FaAngleRight,
  FaCode,
  FaPlus,
  FaRandom,
  FaRedo,
  FaCog,
  FaList,
  FaTable,
  FaBullseye,
  FaBookOpen,
  FaFont,
  FaFolderOpen,
  FaExclamationTriangle,
  FaCube,
  FaPuzzlePiece

} from "react-icons/fa";

function Sidebar({ isOpen, setIsOpen }) {
  const topicIcons = {
    Variables: <FaCode />,
    Operators: <FaPlus />,
    "Conditional Statements": <FaRandom />,
    Loops: <FaRedo />,
    Functions: <FaCog />,
    Lists: <FaList />,
    Tuples: <FaTable />,
    Sets: <FaBullseye />,
    Dictionary: <FaBook />,
    Strings: <FaFont />,
    Files: <FaFolderOpen />,
    "Exception Handling": <FaExclamationTriangle />,
    OOP: <FaCube />,
    Modules: <FaPuzzlePiece />
  };
  const navigate = useNavigate();
  const location = useLocation();

  const [openTopicId, setOpenTopicId] = useState(null);

const pathParts = location.pathname.split("/");
const subId = pathParts[2];

 useEffect(() => {
  data.topics.forEach((topic) => {
    const found = topic.subtopics.find(
      (sub) => sub.id === subId
    );

    if (found) {
      setOpenTopicId(topic.id);
    }
  });
}, [subId]);

  return (
    <div
      className={`bg-dark text-light position-fixed h-100 shadow ${isOpen ? "d-block" : "d-none d-md-block"
        }`}
      style={{
        width: isOpen ? "280px" : "70px",
        transition: "0.3s",
        overflowY: "auto",
        zIndex: 1050,
      }}
    >
      <div className="p-3 border-bottom">
        <button
          className="btn btn-outline-success w-100 d-flex align-items-center justify-content-center gap-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <>
              <FaAngleLeft />
              Coding Topics
            </>
          ) : (
            <>
              <i className="fa-solid fa-arrow-right"></i>

            </>
          )}
        </button>
      </div>

      <div className="p-3">
        <h5 className="text-success d-flex align-items-center gap-2 mb-0">
          {isOpen ? (
            <>
              <FaLayerGroup />
              Topics
            </>
          ) : (
            <FaBookOpen />
          )}
        </h5>
      </div>
      {/* Topics */}
      <div className="px-2">

        {data.topics.map((t) => (
          <div key={t.id} className="mb-3">

            {/* Topic Header */}
            <button
              className="btn btn-dark w-100 text-start"
              onClick={() => toggleTopic(t.id)}
            >
              {isOpen ? (
                <>
                  {t.title}
                  <span className="float-end">
                    {openTopicId === t.id ? "▲" : "▼"}
                  </span>
                </>
              ) : (
                <p className="topic-title" onClick={() => toggleTopic(t.id)}>
                  {isOpen
                    ? t.title
                    : (topicIcons[t.title] || <FaBook />)}

                  {isOpen && (openTopicId === t.id ? " ▲" : " ▼")}
                </p>)}
            </button>

            {/* Subtopics */}
            {isOpen && openTopicId === t.id && (
              <ul className="list-group mt-2">

                {t.subtopics.map((sub) => (
                  <li
                    key={sub.id} 
                   className={`list-group-item list-group-item-action ${
  sub.id === subId ? "active" : ""
}`}
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      navigate(`/topic/${sub.id}`);
                      if (window.innerWidth < 768) {
                        setIsOpen(false);
                      }
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
    </div>
  );
}

export default Sidebar;