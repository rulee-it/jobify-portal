import React from "react";
import { useNavigate } from "react-router-dom";
import "./JobsPage.css";

function JobsPage() {
  const navigate = useNavigate();

  const jobs = [
    { id: 1, title: "Frontend Developer", company: "Google" },
    { id: 2, title: "Backend Developer", company: "Microsoft" },
    { id: 3, title: "UI/UX Designer", company: "Amazon" },
    { id: 4, title: "Data Scientist", company: "Facebook" },
    { id: 5, title: "DevOps Engineer", company: "Apple" },
    { id: 6, title: "Product Manager", company: "Tesla" },
    { id: 7, title: "Software Engineer", company: "Netflix" },
    { id: 8, title: "System Analyst", company: "IBM" },
    { id: 9, title: "Cloud Architect", company: "Oracle" },
    { id: 10, title: "Cybersecurity Specialist", company: "Cisco" }
  ];

  const handleApply = () => {
    navigate("/apply");
  };

  return (
    <div className="jobs-container">
      <h1>Available Openings</h1>
      <div className="jobs-list">
        {jobs.map((job) => (
          <div className="job-card" key={job.id}>
            <h2>{job.title}</h2>
            <p>{job.company}</p>
            <button onClick={handleApply}>Apply</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default JobsPage;
