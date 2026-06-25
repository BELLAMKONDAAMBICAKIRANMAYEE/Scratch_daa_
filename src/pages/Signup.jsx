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
  className="container-fluid min-vh-100 d-flex align-items-center"
  style={{ background: "white" }}
>
  <style>
    {
      `
      .signup-card {
  background: rgba(17, 24, 39, 0.9);
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0,0,0,.5);
  animation: fadeIn .8s ease;
  backdrop-filter: blur(10px);
}

.custom-input {
  background: #1e293b !important;
  border: none !important;
  color: white !important;
  transition: .3s;
}

.custom-input:focus {
  box-shadow: 0 0 12px #22c55e;
  transform: scale(1.02);
}

.signup-btn {
  transition: .3s;
}

.signup-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 0 20px #22c55e;
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
}

.floating {
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-15px);
  }

  100% {
    transform: translateY(0);
  }
}`
    }
  </style>
  <ToastContainer position="top-right" autoClose={2000} theme="dark" />

  <div className="container">
    <div className="row align-items-center justify-content-center">

      {/* Left Side */}
   <div className="col-lg-6 text-center d-none d-lg-block">
  


  <img
    src="https://images.openai.com/static-rsc-4/HpiRslb7DCzJqUgLAwdUaFH33_RHojKsesHAr_DyAmjuyKd8rsjTGz3zs5TxYtQp_Tp_UiZcJlzGgbNXxX8NyGQIkUdLtZ1DJn6erqzQGKbX3V7nA5BcY9HjnO9QNbj6YD_1phLGipTua3e8hFTy391u1y64h-JLN39xxuysL6wdFT3TK6gdml5iWkDUi-oU?purpose=inline"
    alt="Coding"
    className="img-fluid"
  />

</div>
      {/* Right Side */}
      <div className="col-lg-5">
        <form
          onSubmit={handleSubmit}
          className="p-5 signup-card"
        >
          <h2 className="text-center text-success mb-4 fw-bold">
            Create Account
          </h2>

          <input
            className="form-control custom-input mb-3"
            placeholder="Name"
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
          />

          <input
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
              style={{ cursor: "pointer" }}
              onClick={() =>
                setShowPassword(!showPassword)
              }
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <button className="btn btn-success w-100 signup-btn">
            Signup
          </button>

          <p className="text-center text-light mt-4">
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
    </div>
  </div>
</div>
  );
}

export default Signup;