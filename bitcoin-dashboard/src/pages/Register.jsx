import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(form));
    alert("Registration successful! You can now log in.");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-dark">
      <form onSubmit={handleSubmit} className="bg-primary p-8 rounded shadow w-full max-w-md text-white">
        <h2 className="text-2xl font-bold mb-6 text-white">Register</h2>

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
          Register
        </button>

        <p className="mt-4 text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-white underline hover:text-primary">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
