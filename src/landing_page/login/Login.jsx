import React, { useState } from "react";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mock validation (for now)
    if (formData.email === "" || formData.password === "") {
      setMessage("❌ Please fill in all fields.");
      return;
    }

    // Mock login success
    setMessage(`✅ Welcome back, ${formData.email.split("@")[0]}!`);
    setFormData({ email: "", password: "" });

    // Redirect (simulate login success)
    setTimeout(() => {
      window.location.href = "/";
    }, 1500);
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #6fb1fc, #4364f7, #0052d4)",
      }}
    >
      <div className="card shadow-sm border-0 p-4" style={{ width: "400px" }}>
        <h3 className="text-center mb-4">Welcome Back</h3>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>

        {message && (
          <div className="alert alert-info text-center mt-3">{message}</div>
        )}

        <p className="text-center mt-3 mb-0">
          Don’t have an account?{" "}
          <a href="/signup" className="text-decoration-none">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
