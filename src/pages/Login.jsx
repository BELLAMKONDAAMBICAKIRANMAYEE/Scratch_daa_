import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
       `${import.meta.env.VITE_API_URL}/api/auth/login`,
        form
      );

      // 🔍 DEBUG (VERY IMPORTANT)
      console.log("API RESPONSE:", res.data);

      // ✅ Safety check
      if (!res.data.user || !res.data.user.name) {
        setMsg("❌ Name not received from server");
        return;
      }

      // ✅ Store data
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("name", res.data.user.name);

      console.log("Saved name:", res.data.user.name);

      // ✅ Redirect
      navigate("/home");

    } catch (err) {
      console.log("LOGIN ERROR:", err);
      setMsg(err.response?.data?.msg || "❌ Invalid credentials");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
<style>
        {
          `
          /* ===== GLOBAL ===== */
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: #0f172a; /* dark navy */
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

/* ===== FORM ===== */
form {
  width: 400px;
  max-width: 95%; /* 🔥 makes it responsive */
  padding: 30px;

  background: #111827; /* dark card */
  border-radius: 12px;

  box-shadow: 0 10px 25px rgba(0,0,0,0.4);

  display: flex;
  flex-direction: column;
  align-items: center;

  animation: fadeIn 0.6s ease;
}

/* ===== HEADING ===== */
h2 {
  color: #22c55e; /* green */
  margin-bottom: 20px;
}

/* ===== INPUT ===== */
input {
  width: 100%;
  padding: 12px;
  margin: 10px 0;

  border: 1px solid #374151;
  border-radius: 8px;

  background: #020617;
  color: white;

  transition: 0.3s;
}

input::placeholder {
  color: #9ca3af;
}

/* Focus */
input:focus {
  border-color: #22c55e;
  box-shadow: 0 0 8px rgba(34,197,94,0.5);
  outline: none;
}

/* ===== BUTTON ===== */
.hi {
  width: 100%;
  padding: 12px;
  margin-top: 15px;

  border: none;
  border-radius: 8px;

  background: #22c55e;
  color: black;
  font-weight: bold;

  cursor: pointer;
  transition: 0.3s;
}

.hi:hover {
  background: #16a34a;
  transform: translateY(-2px);
}

.hi:active {
  transform: scale(0.96);
}

/* ===== TEXT ===== */
p {
  color: #d1d5db;
}

/* ===== LINK ===== */
a {
  color: #22c55e;
  text-decoration: none;
  font-weight: bold;
}

a:hover {
  text-decoration: underline;
}

/* ===== MOBILE FIXES ===== */
@media (max-width: 480px) {
  form {
    padding: 20px;
    border-radius: 10px;
  }

  h2 {
    font-size: 20px;
  }

  input {
    padding: 10px;
    font-size: 14px;
  }

  .hi {
    padding: 10px;
    font-size: 14px;
  }
}

/* ===== ANIMATION ===== */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}`
        }
      </style>
      {msg && <p style={{ color: "red" }}>{msg}</p>}

      <input
        placeholder="Email"
        onChange={(e) =>
          setForm({ ...form, email: e.target.value })
        }
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) =>
          setForm({ ...form, password: e.target.value })
        }
      />

      <button>Login</button>

      <p>
        Don’t have an account? <Link to="/signup">Signup</Link>
      </p>
    </form>
  );
}

export default Login;