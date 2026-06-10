import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/login`,
        form
      );

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("name", res.data.user.name);

      toast.success("Login successful!");

      setTimeout(() => {
        navigate("/home");
      }, 1500);
    } catch (err) {
      toast.error(
        err.response?.data?.msg || "Invalid email or password"
      );
    }
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        theme="dark"
      />

      <div
        className="container-fluid min-vh-100 d-flex justify-content-center align-items-center"
        style={{ background: "#0f172a" }}
      >
        <form
          onSubmit={handleSubmit}
          className="col-11 col-sm-10 col-md-8 col-lg-6 col-xl-5 p-4 rounded shadow"
          style={{ background: "#111827" }}
        >
          <h2 className="text-center text-success mb-4">
            Login
          </h2>

          {/* Email */}
          <input
            type="email"
            className="form-control mb-3"
            placeholder="Email"
            onChange={(e) =>
              setForm({
                ...form,
                email: e.target.value,
              })
            }
          />

          {/* Password */}
          <div className="position-relative mb-3">
            <input
              type={showPassword ? "text" : "password"}
              className="form-control pe-5"
              placeholder="Password"
              onChange={(e) =>
                setForm({
                  ...form,
                  password: e.target.value,
                })
              }
            />

            <span
              className="position-absolute top-50 end-0 translate-middle-y me-3"
              style={{
                cursor: "pointer",
                color: "#6c757d",
              }}
              onClick={() =>
                setShowPassword(!showPassword)
              }
            >
              {showPassword ? (
                <FaEyeSlash />
              ) : (
                <FaEye />
              )}
            </span>
          </div>

          {/* Login button */}
          <button className="btn btn-success w-100 mb-3">
            Login
          </button>

          {/* Signup link */}
          <p className="text-center text-light mb-0">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-success text-decoration-none fw-bold"
            >
              Signup
            </Link>
          </p>
        </form>
      </div>
    </>
  );
}

export default Login;