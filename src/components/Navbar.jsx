import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Navbar({ toggleSidebar }) {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const name = localStorage.getItem("name");

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    navigate("/signup");
  };

  return (
    <nav className="navbar">
      <style>
        {
          `/* ===== NAVBAR BASE ===== */
.navbar {
  height: 60px;
  background: #111;
  color: white;
  display: flex;
  align-items: center;
  padding: 0 15px;
  gap: 15px;
  position: sticky;
  top: 0;
  z-index: 1000;
}

/* Logo */
.logo {
  margin-right: auto;
}

/* Desktop links */
.nav-links {
  display: flex;
  gap: 10px;
}

/* Right section */
.right-section {
  display: flex;
  align-items: center;
  gap: 10px;
}

/* Hide mobile button on desktop */
.mobile-menu-btn {
  display: none;
  font-size: 20px;
  background: none;
  color: white;
}

/* Mobile dropdown */
.mobile-menu {
  position: absolute;
  top: 60px;
  left: 0;
  width: 100%;
  background: #222;
  display: flex;
  flex-direction: column;
  padding: 10px;
  animation: slideDown 0.3s ease;
}

.mobile-menu button {
  margin: 5px 0;
}

/* ===== MOBILE VIEW ===== */
@media (max-width: 768px) {

  .nav-links {
    display: none; /* hide desktop links */
  }

  .right-section {
    display: none; /* hide user + logout */
  }

  .mobile-menu-btn {
    display: block; /* show ☰ */
    margin-left: auto;
  }
}

/* Animation */
@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}`
        }
      </style>
      <button onClick={toggleSidebar} title="Toggle Sidebar">
        📁
      </button>


      <h3 className="logo">Scratch_Daa</h3>

      {/* Desktop Menu */}
      <div className="nav-links">
        <button onClick={() => navigate("/home")}>Home</button>
        <button onClick={() => navigate("/topics")}>Topics</button>
        <button onClick={() => navigate("/coding")}>Code</button>
      </div>

      {/* Right side */}
      <div className="right-section">
        <span className="user">👤 {name}</span>
        <button onClick={logout}>Logout</button>
      </div>

      {/* Mobile menu button */}
      <button
        className="mobile-menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="mobile-menu">
          <button onClick={() => navigate("/home")}>Home</button>
          <button onClick={() => navigate("/topics")}>Topics</button>
          <button onClick={() => navigate("/coding")}>Code</button>
          <button onClick={logout}>Logout</button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;