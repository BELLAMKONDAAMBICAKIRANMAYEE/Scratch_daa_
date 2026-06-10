import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import thoughts from "../data/Thoughts.json";

function Home() {
  const texts = thoughts.map((item) => item.text);

  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * texts.length);
      setQuoteIndex(randomIndex);
    }, 40000);

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <div
      className="container-fluid min-vh-100 py-5"
      style={{ background: "#0f172a" }}
    >
      <div className="container">

        {/* Heading */}
        <h1 className="text-center text-success fw-bold mb-4">
          Python Learning with Scratch_daa.. 😎
        </h1>

     <div className="quote-box alert alert-dark text-center shadow-sm mb-5">
  <i>"{texts[quoteIndex]}"</i>
</div>
        {/* Cards */}
        <div className="row g-4 justify-content-center">

          {/* Learn Card */}
          <div className="col-12 col-md-6 col-lg-4">
            <div
              className="card text-center h-100 shadow"
              style={{
                backgroundColor: "#111827",
                color: "white",
                border: "1px solid #374151",
              }}
            >
              <div className="card-body">
                <h2 className="card-title mb-4 text-light">
                  Explore Topics
                </h2>

                <Link to="/topics">
                  <button className="btn btn-success w-100 ">
                    Start Learning
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Quiz Card */}
          <div className="col-12 col-md-6 col-lg-4">
            <div
              className="card text-center h-100 shadow"
              style={{
                backgroundColor: "#111827",
                color: "white",
                border: "1px solid #374151",
              }}
            >
              <div className="card-body">
                <h2 className="card-title mb-4 text-light">
                  Take Quiz
                </h2>

                <Link to="/topics">
                  <button className="btn btn-primary w-100">
                    Start Quiz
                  </button>
                </Link>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Home;