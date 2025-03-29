"use client";
import React, { useState, useEffect } from "react";
import "../Jobspost/page.css";

const Page = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [email, setEmail] = useState("");
  const [showEmailPopup, setShowEmailPopup] = useState(false);
  const [animateSearchBar, setAnimateSearchBar] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimateSearchBar(true);
    }, 300);
  }, []);

  const jobs = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "Google",
      logo: "google.png",
      description: "Google job description here.",
    },
    {
      id: 2,
      title: "Backend Developer",
      company: "Amazon",
      logo: "amazonp.png",
      description: "Amazon job description here.",
    },
    {
      id: 3,
      title: "Full Stack Developer",
      company: "Facebook",
      logo: "facebook.png",
      description: "Facebook job description here.",
    },
    {
      id: 4,
      title: "UI/UX Designer",
      company: "Microsoft",
      logo: "microsofts.png",
    },
    {
      id: 5,
      title: "Figma Designer",
      company: "Accenture",
      logo: "Accenture.png",
    },
    {
      id: 6,
      title: "Full Stack Developer",
      company: "Facebook",
      logo: "facebook.png",
    },
    {
      id: 7,
      title: "Frontend Developer",
      company: "Google",
      logo: "google.png",
    },
    {
      id: 8,
      title: "Figma Designer",
      company: "Accenture",
      logo: "Accenture.png",
    },
  ];

  const handleSearch = () => {
    setFilteredJobs(
      jobs.filter((job) =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  };

  const handleApply = (job) => {
    setSelectedJob(job);
    setShowPopup(true);
  };

  const handleEmailSubmit = () => {
    if (email) setShowEmailPopup(true);
  };

  return (
    <div className="job-finder">
      {/* Search Bar Section with Animation */}
      <div className={`search-bar ${animateSearchBar ? "animate-down" : ""}`}>
        <input
          type="text"
          placeholder="Job Title"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {/* Job List */}
      <div className="job-list">
        {(filteredJobs.length ? filteredJobs : jobs).map((job) => (
          <div key={job.id} className="job-card">
            <img src={job.logo} alt={job.company} className="company-logo" />
            <h3>{job.title}</h3>
            <div className="actions">
              <i className="fas fa-bookmark"></i>
              <i className="fas fa-share"></i>
            </div>
            <button onClick={() => handleApply(job)}>Apply</button>
          </div>
        ))}
      </div>

      {/* Job Popup */}
      {showPopup && selectedJob && (
        <div className="popup">
          <h2>{selectedJob.title}</h2>
          <p>Company: {selectedJob.company}</p>
          <p>Description: {selectedJob.description}</p>
          <button onClick={() => setShowPopup(false)}>Close</button>
        </div>
      )}

      {/* Email Subscribe Section */}
      <div className="email-subscribe">
        <h2 className="subscribe-title">Subscribe for Job Updates</h2>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleEmailSubmit}>Subscribe</button>
      </div>

      {/* Email Popup */}
      {showEmailPopup && (
        <div className="email-popup">
          <p>Subscribed Successfully!</p>
          <button onClick={() => setShowEmailPopup(false)}>X</button>
        </div>
      )}
    </div>
  );
};

export default Page;
