import React, { useState } from "react";

function JobFormPage({ onSubmit }) {
  const [domain, setDomain] = useState("");
  const [interests, setInterests] = useState("");
  const [pursue, setPursue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (domain && interests && pursue) onSubmit();
  };

  return (
    <div className="container">
      <h1>Job Preferences</h1>
      <form onSubmit={handleSubmit} className="card">
        <label>
          Domain Field:
          <input 
            type="text"
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
            placeholder="e.g., Software Development"
            required 
          />
        </label>
        <label>
          Interests:
          <input 
            type="text"
            value={interests}
            onChange={(e) => setInterests(e.target.value)}
            placeholder="e.g., Web, AI, Design"
            required 
          />
        </label>
        <label>
          What did you pursue:
          <input 
            type="text"
            value={pursue}
            onChange={(e) => setPursue(e.target.value)}
            placeholder="e.g., B.Tech, MBA"
            required 
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default JobFormPage;
