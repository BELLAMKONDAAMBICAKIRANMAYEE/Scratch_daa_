import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
const [showPassword, setShowPassword] = useState(false);
const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await axios.post(
      `${import.meta.env.VITE_API_URL}/api/auth/signup`,
      form
    );

    toast.success("Signup successful!");

    setTimeout(() => {
      navigate("/login");
    }, 1500);
  } catch (err) {
    toast.error(err.response?.data?.msg || "Something went wrong");
  }
};
  return (
   <div
  className="container-fluid min-vh-100 d-flex justify-content-center align-items-center"
  style={{ background: "#0f172a" }}
>
  <ToastContainer position="top-right" autoClose={2000} theme="dark" />

  <form
    onSubmit={handleSubmit}
    className="col-11 col-sm-10 col-md-8 col-lg-6 col-xl-5 p-4 rounded shadow"
    style={{ background: "#111827" }}
  >
    <h2 className="text-center text-success mb-4">Signup</h2>

    <input
      className="form-control mb-3"
      placeholder="Name"
      onChange={(e) =>
        setForm({ ...form, name: e.target.value })
      }
    />

    <input
      className="form-control mb-3"
      placeholder="Email"
      onChange={(e) =>
        setForm({ ...form, email: e.target.value })
      }
    />

    {/* Password Input */}
    <div className="position-relative mb-3">
      <input
        type={showPassword ? "text" : "password"}
        className="form-control pe-5"
        placeholder="Password"
        onChange={(e) =>
          setForm({ ...form, password: e.target.value })
        }
      />

      <span
        className="position-absolute top-50 end-0 translate-middle-y me-3"
        style={{ cursor: "pointer", color: "#6c757d" }}
        onClick={() => setShowPassword(!showPassword)}
      >
        {showPassword ? <FaEyeSlash /> : <FaEye />}
      </span>
    </div>

    <button className="btn btn-success w-100 mb-3">
      Signup
    </button>

    <p className="text-center text-light mb-0">
      Already have an account?{" "}
      <Link
        to="/login"
        className="text-success text-decoration-none fw-bold"
      >
        Login
      </Link>
    </p>
  </form>
</div>
  );
}

export default Signup;