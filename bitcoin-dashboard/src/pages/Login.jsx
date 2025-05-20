import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"));

    if (user && user.email === form.email && user.password === form.password) {
      alert("Login successful!");
      navigate("/");
    } else {
      alert("Invalid credentials.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-dark">
      <form onSubmit={handleSubmit} className="bg-primary p-8 rounded shadow w-full max-w-md text-white">
        <h2 className="text-2xl font-bold mb-6 text-white">Login</h2>

        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full p-2 mb-4 border border-primary rounded bg-dark text-white"
          required
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="w-full p-2 mb-6 border border-primary rounded bg-dark text-white"
          required
        />

        <button type="submit" className="w-full bg-black text-primary p-2 rounded hover:bg-primary hover:text-white transition">
          Log In
        </button>

        <p className="mt-4 text-sm">
          Don't have an account?{" "}
          <Link to="/register" className="text-white underline hover:text-primary">Register</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
