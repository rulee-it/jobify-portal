import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css"; // new css for this page

function LoginPage() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email.trim() !== "") {
      navigate("/jobs");
    } else {
      alert("Please enter your email.");
    }
  };

  return (
    <div className="login-container">
      <h1 className="portal-heading">Jobify Portal</h1>
      <div className="login-box">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
        <p className="motivation">
          🌟 Unlock endless possibilities in the job world. Your dream role awaits!
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
