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
  const [bookmarkedJobs, setBookmarkedJobs] = useState([]);
  const [sharedJobs, setSharedJobs] = useState([]);
  const [showSharePopup, setShowSharePopup] = useState(false);
  const [showSavePopup, setShowSavePopup] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimateSearchBar(true);
    }, 300);
  }, []);

  const jobs = [
    { id: 1, title: "Frontend Developer", company: "Google", logo: "google.png" },
    { id: 2, title: "Backend Developer", company: "Facebook", logo: "facebook.png" },
    { id: 3, title: "Full Stack Developer", company: "Amazon", logo: "amazonp.png" },
    { id: 4, title: "Data Scientist", company: "Accenture", logo: "Accenture.png" },
    { id: 5, title: "Software Engineer", company: "Netflix", logo: "netfli.webp" },
    { id: 6, title: "UI/UX Designer", company: "Microsoft", logo: "microsofts.png" },
    { id: 7, title: "DevOps Engineer", company: "Apple", logo: "apple.png" },
    { id: 8, title: "Project Manager", company: "IBM", logo: "ibm.png" },
    { id: 9, title: "Data Analyst", company: "Tesla", logo: "tesla.png" },
    { id: 10, title: "Cybersecurity Analyst", company: "Intel", logo: "intel.png" },
    { id: 11, title: "Cloud Engineer", company: "Adobe", logo: "adobe.png" },
    { id: 12, title: "Machine Learning Er.", company: "NVIDIA", logo: "nvidia.jpeg" },
    { id: 13, title: "Blockchain Developer", company: "Orcele", logo: "oracle.webp" },
    { id: 14, title: "Game Developer", company: "Epic Games", logo: "epic.png" },
    { id: 15, title: "Network Engineer", company: "Cisco", logo: "cisco.png" },
    { id: 16, title: "Web Developer", company: "Spotify", logo: "spotify.png" },
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

  // Function to handle bookmarking a job
  // This function will add or remove the job from the bookmarked list
  // and show a popup for 2 seconds
  const handleBookmark = (jobId) => {
    if (bookmarkedJobs.includes(jobId)) {
      setBookmarkedJobs(bookmarkedJobs.filter((id) => id !== jobId));
    } else {
      setBookmarkedJobs([...bookmarkedJobs, jobId]);
      setShowSavePopup(true);
      setTimeout(() => setShowSavePopup(false), 3000);
    }
  };

  // Function to handle sharing a job
  // This function will copy the job link to the clipboard and show a popup
  const handleShare = (jobId) => {
    if (sharedJobs.includes(jobId)) {
      setSharedJobs(sharedJobs.filter((id) => id !== jobId));
      } else {
        setSharedJobs([...sharedJobs, jobId]);
        navigator.clipboard.writeText('Check out this job:' + jobId);
        alert('Job link copied to clipboard!');
        setShowSharePopup(true);
        setTimeout(() => setShowSharePopup(false), 3000);
    }
  }

  return (
    <div className="job-finder">
      {/* Search Bar Section */}
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
            <div className="card-top-icons">
              <span
                onClick={() => handleBookmark(job.id)}
                className={`bookmark-icon ${bookmarkedJobs.includes(job.id) ? "bookmarked" : ""}`}
                title="Bookmark"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6 2a2 2 0 0 0-2 2v18l8-5 8 5V4a2 2 0 0 0-2-2H6z" />
                </svg>
              </span>
              <span onClick={() => handleShare(job.id)}
                className={`share-icon ${sharedJobs.includes(job.id) ? "Shared" : ""}`}
                title="Share">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7a3.255 3.255 0 0 0 0-1.39l7.05-4.11a3.004 3.004 0 1 0-.9-1.45L8.01 9.9a3.004 3.004 0 1 0 0 4.2l7.05 4.11c.5-.48 1.18-.77 1.94-.77a3 3 0 1 0 0-6z"/>
                  </svg>
              </span>

            </div>
            <img src={job.logo} alt={job.company} className="company-logo" />
            <h3>{job.title}</h3>
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

      {/* Bookmark Save Popup */}
      {showSavePopup && (
        <div className="save-popup">✅ Job saved successfully!</div>
      )}

      {/* Share Popup */}
      {showSharePopup && (
        <div className="save-popup">✅ Job shared successfully!</div>
      )}
    </div>
  );
};

export default Page;
