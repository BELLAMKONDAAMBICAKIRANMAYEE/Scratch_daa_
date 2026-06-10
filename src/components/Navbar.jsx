import { useNavigate } from "react-router-dom";

function Navbar({ toggleSidebar }) {
  const navigate = useNavigate();

  const name = localStorage.getItem("name");

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    navigate("/signup");
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark sticky-top shadow px-3"
      style={{ backgroundColor: "#111827" }}
    >
      {/* Sidebar Button */}
      <button
        className="btn btn-outline-light me-3"
        onClick={toggleSidebar}
        title="Toggle Sidebar"
      >
        <i class="fa-solid fa-folder"></i>
      </button>

      {/* Logo */}
      <span
        className="navbar-brand fw-bold"
        style={{ cursor: "pointer" }}
        onClick={() => navigate("/home")}
      >
        Scratch_Daa
      </span>

      {/* Mobile Toggle */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarMenu"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Menu */}
      <div className="collapse navbar-collapse" id="navbarMenu">
        <ul className="navbar-nav me-auto">

          <li className="nav-item">
            <button
              className="btn btn-outline-success ms-lg-3 mt-2 mt-lg-0"
              onClick={() => navigate("/home")}
            >
              Home
            </button>
          </li>

          <li className="nav-item">
            <button
              className="btn btn-outline-success ms-lg-2 mt-2 mt-lg-0"
              onClick={() => navigate("/topics")}
            >
              Topics
            </button>
          </li>

          <li className="nav-item">
            <button
              className="btn btn-outline-success ms-lg-2 mt-2 mt-lg-0"
              onClick={() => navigate("/coding")}
            >
              Code
            </button>
          </li>

        </ul>

        {/* Right Section */}
        <div className="d-flex align-items-center flex-column flex-lg-row">

          <span className="text-light fw-bold me-lg-3 mb-2 mb-lg-0">
             {name}&nbsp; <i class="fa-solid fa-circle-user"></i>

          </span>

          <button
            className="btn btn-danger"
            onClick={logout}
          >
            Logout
          </button>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;