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
    <div
  className="container-fluid min-vh-100"
  style={{ background: "white" }}
>
  <style>
    {
      `
      .signup-card {
  background: rgba(17, 24, 39, .85);
  border-radius: 25px;
  box-shadow: 0 10px 40px rgba(0,0,0,.5);
  backdrop-filter: blur(12px);
  animation: fadeIn .8s ease;
}

.custom-input {
  background: #1e293b !important;
  color: white !important;
  border: none !important;
  transition: .3s;
}

.custom-input:focus {
  box-shadow: 0 0 15px #22c55e;
  transform: scale(1.02);
}

.signup-btn {
  transition: .3s;
}

.signup-btn:hover {
  transform: translateY(-4px);
  box-shadow: 0 0 20px #22c55e;
}

.floating {
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  50% {
    transform: translateY(-20px);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(40px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}`
    }
  </style>
  <ToastContainer position="top-right" autoClose={2000} theme="dark" />

  <div className="row min-vh-100 align-items-center">

    {/* Left Side */}
    <div className="col-lg-6 ps-5 d-none d-lg-flex justify-content-center align-items-center">
      <img
        src="https://images.openai.com/static-rsc-4/HpiRslb7DCzJqUgLAwdUaFH33_RHojKsesHAr_DyAmjuyKd8rsjTGz3zs5TxYtQp_Tp_UiZcJlzGgbNXxX8NyGQIkUdLtZ1DJn6erqzQGKbX3V7nA5BcY9HjnO9QNbj6YD_1phLGipTua3e8hFTy391u1y64h-JLN39xxuysL6wdFT3TK6gdml5iWkDUi-oU?purpose=inline"
        alt="Login"
        className="img-fluid floating"
        style={{ maxHeight: "500px" }}
      />
    </div>

    {/* Right Side */}
    <div className="col-lg-6 d-flex justify-content-center align-items-center">
      <form
        onSubmit={handleSubmit}
        className="signup-card p-5"
        style={{ width: "450px" }}
      >
        <h2 className="text-center text-success mb-4">
          Welcome Back
        </h2>

        <input
          type="email"
          className="form-control custom-input mb-3"
          placeholder="Email"
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />

        <div className="position-relative mb-3">
          <input
            type={showPassword ? "text" : "password"}
            className="form-control custom-input pe-5"
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
            style={{ cursor: "pointer", color: "#9ca3af" }}
            onClick={() =>
              setShowPassword(!showPassword)
            }
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        <button className="btn btn-success w-100 signup-btn">
          Login
        </button>

        <p className="text-center text-light mt-4">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-success fw-bold text-decoration-none"
          >
            Signup
          </Link>
        </p>
      </form>
    </div>

  </div>
</div>
    </>
  );
}

export default Login;