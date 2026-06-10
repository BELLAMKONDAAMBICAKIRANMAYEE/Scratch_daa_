import data from "../data/syllabus.json";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  FaBook,
  FaLayerGroup,
  FaAngleLeft,
  FaAngleRight,
} from "react-icons/fa";

function Sidebar({ isOpen, setIsOpen }) {
  const navigate = useNavigate();
  const location = useLocation();

  const [openTopicId, setOpenTopicId] = useState(null);

  const pathParts = location.pathname.split("/");
  const topicId = pathParts[2];
  const subId = pathParts[3];

  useEffect(() => {
    if (topicId) {
      setOpenTopicId(Number(topicId));
    }
  }, [topicId]);

  const toggleTopic = (id) => {
    setOpenTopicId(openTopicId === id ? null : id);
  };

  return (
    <div
      className={`bg-dark text-light position-fixed h-100 shadow ${
        isOpen ? "d-block" : "d-none d-md-block"
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
       <i class="fa-solid fa-arrow-right"></i>
        
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
      <FaBook />
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
                "•"
              )}
            </button>

            {/* Subtopics */}
            {isOpen && openTopicId === t.id && (
              <ul className="list-group mt-2">

                {t.subtopics.map((sub) => (
                  <li
                    key={sub.id}
                    className={`list-group-item list-group-item-action ${
                      String(sub.id) === subId
                        ? "active"
                        : ""
                    }`}
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      navigate(`/topic/${t.id}/${sub.id}`);
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