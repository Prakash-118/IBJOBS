'use client';
import React, { useState } from "react";
import '../Jobspost/page.css';

const Page = () => {
    const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [email, setEmail] = useState("");
  const [showEmailPopup, setShowEmailPopup] = useState(false);

  const jobs = [
    { id: 1, title: "Frontend Developer", company: "Google", logo: "google.png", description:"Description of google job post Description of google job postDescription of google job postDescription of google job postDescription of google job postDescription of google job postDescription of google job post" },


    { id: 2, title: "Backend Developer", company: "Amazon", logo: "amazonp.png", description:"Description of Amazon Job Post Description of Amazon Job PostDescription of Amazon Job PostDescription of Amazon Job PostDescription of Amazon Job PostDescription of Amazon Job PostDescription of Amazon Job PostDescription of Amazon Job Post" },

    { id: 3, title: "Full Stack Developer", company: "Facebook", logo: "facebook.png", description:"Description of Facebook JOb Post Description of Facebook JOb PostDescription of Facebook JOb PostDescription of Facebook JOb PostDescription of Facebook JOb PostDescription of Facebook JOb PostDescription of Facebook JOb PostDescription of Facebook JOb PostDescription of Facebook JOb PostDescription of Facebook JOb Post" },
    
    { id: 4, title: "UI/UX Designer", company: "Microsoft", logo: "microsofts.png" },
    { id: 5, title: "Figma Designer", company: "Accenture", logo: "Accenture.png"},
    { id: 6, title: "Full Stack Developer", company: "Facebook", logo: "facebook.png" },
    { id: 7, title: "Frontend Developer", company: "Google", logo: "google.png" },
    { id: 8, title: "Figma Designer", company: "Accenture", logo: "Accenture.png"},
  ];

  const handleSearch = () => {
    setFilteredJobs(
      jobs.filter(
        (job) =>
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
    <div className="search-bar">
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
    {showPopup && selectedJob && (
      <div className="popup">
        <h2>{selectedJob.title}</h2>
        <p>Company: {selectedJob.company}</p>
        <p>Description:{selectedJob.description}</p>
        <button onClick={() => setShowPopup(false)}>Close</button>
      </div>
    )}
    <h3>Subscribe To Get Letest Jobs Opportunity </h3>
    <div className="email-subscribe">
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleEmailSubmit}>Subscribe</button>
    </div>
    {showEmailPopup && (
      <div className="email-popup">
        <p>Subscribed Successfully!</p>
        <button onClick={() => setShowEmailPopup(false)}>X</button>
      </div>
    )}
  </div>
  )
}

export default Page
