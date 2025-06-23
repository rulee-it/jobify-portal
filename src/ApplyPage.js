import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ApplyPage.css";

function ApplyPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (name && email && phone) {
      alert("Application submitted successfully!");
      navigate("/jobs");
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div className="apply-container">
      <h1>Apply for the Position</h1>
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="tel"
        placeholder="Your Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default ApplyPage;
