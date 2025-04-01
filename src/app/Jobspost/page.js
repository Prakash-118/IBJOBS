"use client";
import React, { useState, useEffect } from "react";
import "../Jobspost/page.css";
import Link from "next/link";

const Page = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [filteredJobs, setFilteredJobs] = useState([]);
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
    },
    // ... rest of your job data
    {
      id: 2,
      title: "Backend Developer",
      company: "Facebook",
      logo: "facebook.png",
    },
    {
      id: 3,
      title: "Full Stack Developer",
      company: "Amazon",
      logo: "amazonp.png",
    },
    {
      id: 4,
      title: "Data Scientist",
      company: "Accenture",
      logo: "Accenture.png",
    },
    {
      id: 5,
      title: "Software Engineer",
      company: "Netflix",
      logo: "netfli.webp",
    },
    {
      id: 6,
      title: "UI/UX Designer",
      company: "Microsoft",
      logo: "microsofts.png",
    },
    {
      id: 7,
      title: "DevOps Engineer",
      company: "Apple",
      logo: "apple.png",
    },
    {
      id: 8,
      title: "Project Manager",
      company: "IBM",
      logo: "ibm.png",
    },
    {
      id: 9,
      title: "Data Analyst",
      company: "Tesla",
      logo: "tesla.png",
    },
    {
      id: 10,
      title: "Cybersecurity Analyst",
      company: "Intel",
      logo: "intel.png",
    },
    {
      id: 11,
      title: "Cloud Engineer",
      company: "Adobe",
      logo: "adobe.png",
    },
    {
      id: 12,
      title: "Machine Learning Er.",
      company: "NVIDIA",
      logo: "nvidia.jpeg",
    },
    {
      id: 13,
      title: "Blockchain Developer",
      company: "Orcele",
      logo: "oracle.webp",
    },
    {
      id: 14,
      title: "Game Developer",
      company: "Epic Games",
      logo: "epic.png",
    },
    {
      id: 15,
      title: "Network Engineer",
      company: "Cisco",
      logo: "cisco.png",
    },
    {
      id: 16,
      title: "Web Developer",
      company: "Spotify",
      logo: "spotify.png",
    },
    
  ];

  const handleSearch = () => {
    setFilteredJobs(
      jobs.filter((job) =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
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
            <Link href={`/Jobs/${job.id}`} passHref>
              <button>Apply</button>
            </Link>
          </div>
        ))}
      </div>

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