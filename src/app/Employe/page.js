"use client";
import Head from "next/head";
import { useEffect, useState } from "react";
import "../Employe/page.css";
export default function EmployerProfile() {
  const [employerData, setEmployerData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const mockData = {
        id: 1,
        name: "Ashish Maurya",
        email: "maurya@ibjobs.com",
        phone: "+91 123-4567-890",
        profilePicture: null,
        bio: "Tech entrepreneur with 10+ years experience in software development",
        socialLinks: {
          linkedin: "https://linkedin.com/in/johndoe",
          twitter: "https://twitter.com/johndoe",
        },
        company: {
          name: "innoblooms info services pvt. ltd.",
          logo: null,
          industry: "Information Technology",
          size: "51-200 employees",
          website: "https://innoblooms.com",
          description:
            "Leading provider of innovative tech solutions for businesses worldwide",
          address: "C-47, 63A, Noida, Uttar Pradesh",
          verified: true,
        },
        stats: {
          totalJobsPosted: 15,
          activeJobs: 3,
          totalApplicants: 245,
          hiredCandidates: 32,
        },
        jobs: [
          {
            id: 101,
            title: "Senior Frontend Developer",
            type: "Full-time",
            location: "Remote",
            status: "active",
            postedDate: "2023-05-15",
            description:
              "Looking for an experienced React developer to join our team...",
            applicants: 24,
            views: 156,
          },
          {
            id: 102,
            title: "UX Designer",
            type: "Contract",
            location: "On-site",
            status: "closed",
            postedDate: "2023-04-10",
            description: "Need a creative UX designer for a 6-month project...",
            applicants: 18,
            views: 98,
          },
        ],
        profileCompletion: 50,
        emailVerified: true,
      };
      setEmployerData(mockData);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) return <div className="loading-screen">Loading...</div>;

  return (
    <div className={`employer-profile ${darkMode ? "dark-mode" : ""}`}>
      <Head>
        <title>{employerData.name} | Employer Profile</title>
      </Head>

      <main className="profile-container">
        {/* Profile Header with Toggle */}
        <div className="profile-header">
          <h1 className="profile-title">Employer Profile</h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`mode-toggle ${darkMode ? "dark-mode-toggle" : ""}`}
          >
            {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>

        {/* Profile Completion Meter */}
        <div className="completion-meter">
          <div className="meter-header">
            <h3 className="meter-title">Profile Completion</h3>
            <span className="meter-percentage">
              {employerData.profileCompletion}%
            </span>
          </div>
          <div className={`meter-bar ${darkMode ? "dark-meter-bar" : ""}`}>
            <div
              className={`meter-progress ${
                employerData.profileCompletion < 50
                  ? "low-progress"
                  : employerData.profileCompletion < 80
                  ? "medium-progress"
                  : "high-progress"
              }`}
              style={{ width: `${employerData.profileCompletion}%` }}
            ></div>
          </div>
          {employerData.profileCompletion < 100 && (
            <p className="meter-hint">
              Complete your profile to attract better candidates
            </p>
          )}
        </div>

        <div className={`profile-card ${darkMode ? "dark-profile-card" : ""}`}>
          {/* Profile Header */}
          <div
            className={`profile-header-section ${
              darkMode ? "dark-profile-header" : ""
            }`}
          >
            <div className="profile-header-content">
              <div className="avatar-container">
                {employerData.profilePicture ? (
                  <img
                    src={employerData.profilePicture}
                    alt={employerData.name}
                    className="avatar-image"
                  />
                ) : (
                  <div className="avatar-fallback">
                    {employerData.name.charAt(0)}
                  </div>
                )}
              </div>
              <div className="profile-info">
                <div className="name-container">
                  <h1 className="profile-name">{employerData.name}</h1>
                  {employerData.emailVerified && (
                    <span className="verified-badge">
                      <svg className="verified-icon" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Verified
                    </span>
                  )}
                </div>
                <p className="company-name">{employerData.company.name}</p>

                {/* Social Links */}
                <div className="social-links">
                  {employerData.socialLinks.linkedin && (
                    <a
                      href={employerData.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                    >
                      <span className="sr-only">LinkedIn</span>
                      <svg className="social-icon" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                  )}
                  {employerData.socialLinks.twitter && (
                    <a
                      href={employerData.socialLinks.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                    >
                      <span className="sr-only">Twitter</span>
                      <svg className="social-icon" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="profile-content">
            <div className="profile-grid">
              {/* Left Column - Personal Info */}
              <div className="profile-column">
                <h2 className="section-title">Personal Information</h2>
                <div className="info-section">
                  <div className="info-item">
                    <h3
                      className={`info-label ${
                        darkMode ? "dark-info-label" : ""
                      }`}
                    >
                      Email
                    </h3>
                    <div className="info-value">
                      <p>{employerData.email}</p>
                      {employerData.emailVerified && (
                        <span className="verified-icon-small">
                          <svg viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="info-item">
                    <h3
                      className={`info-label ${
                        darkMode ? "dark-info-label" : ""
                      }`}
                    >
                      Phone
                    </h3>
                    <p className="info-value">{employerData.phone}</p>
                  </div>
                  <div className="info-item">
                    <h3
                      className={`info-label ${
                        darkMode ? "dark-info-label" : ""
                      }`}
                    >
                      Bio
                    </h3>
                    <p className="info-value">{employerData.bio}</p>
                  </div>
                </div>
              </div>

              {/* Middle Column - Company Info */}
              <div className="profile-column">
                <h2 className="section-title">Company Information</h2>
                <div className="info-section">
                  <div className="info-item company-info">
                    <div className="company-logo-container">
                      {employerData.company.logo ? (
                        <img
                          src={employerData.company.logo}
                          alt={employerData.company.name}
                          className="company-logo" 
                        />
                      ) : (
                        <div className="company-logo-fallback">
                          {employerData.company.name.charAt(0)}
                        </div>
                      )}
                    </div>
                    <div>
                      <h3
                        className={`info-label ${
                          darkMode ? "dark-info-label" : ""
                        }`}
                      >
                        Company Name
                      </h3>
                      <div className="company-name-container">
                        <p className="company-name-value">
                          {employerData.company.name}
                        </p>
                        {employerData.company.verified && (
                          <span className="company-verified-badge">
                            <svg viewBox="0 0 20 20">
                              <path
                                fillRule="evenodd"
                                d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                            Verified
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="info-item">
                    <h3
                      className={`info-label ${
                        darkMode ? "dark-info-label" : ""
                      }`}
                    >
                      Industry
                    </h3>
                    <p className="info-value">
                      {employerData.company.industry}
                    </p>
                  </div>
                  <div className="info-item">
                    <h3
                      className={`info-label ${
                        darkMode ? "dark-info-label" : ""
                      }`}
                    >
                      Company Size
                    </h3>
                    <p className="info-value">{employerData.company.size}</p>
                  </div>
                  <div className="info-item">
                    <h3
                      className={`info-label ${
                        darkMode ? "dark-info-label" : ""
                      }`}
                    >
                      Website
                    </h3>
                    <a
                      href={employerData.company.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`info-value website-link ${
                        darkMode ? "dark-website-link" : ""
                      }`}
                    >
                      {employerData.company.website.replace(/^https?:\/\//, "")}
                    </a>
                  </div>
                  <div className="info-item">
                    <h3
                      className={`info-label ${
                        darkMode ? "dark-info-label" : ""
                      }`}
                    >
                      Location
                    </h3>
                    <p className="info-value">{employerData.company.address}</p>
                  </div>
                  <div className="info-item">
                    <h3
                      className={`info-label ${
                        darkMode ? "dark-info-label" : ""
                      }`}
                    >
                      Description
                    </h3>
                    <p className="info-value">
                      {employerData.company.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column - Stats and Actions */}
              <div className="profile-column">
                <h2 className="section-title">Stats</h2>
                <div
                  className={`stats-container ${
                    darkMode ? "dark-stats-container" : ""
                  }`}
                >
                  <div className="stats-grid">
                    <div
                      className={`stat-card ${
                        darkMode ? "dark-stat-card" : ""
                      }`}
                    >
                      <p
                        className={`stat-label ${
                          darkMode ? "dark-stat-label" : ""
                        }`}
                      >
                        Total Jobs
                      </p>
                      <p className="stat-value">
                        {employerData.stats.totalJobsPosted}
                      </p>
                    </div>
                    <div
                      className={`stat-card ${
                        darkMode ? "dark-stat-card" : ""
                      }`}
                    >
                      <p
                        className={`stat-label ${
                          darkMode ? "dark-stat-label" : ""
                        }`}
                      >
                        Active Jobs
                      </p>
                      <p className="stat-value">
                        {employerData.stats.activeJobs}
                      </p>
                    </div>
                    <div
                      className={`stat-card ${
                        darkMode ? "dark-stat-card" : ""
                      }`}
                    >
                      <p
                        className={`stat-label ${
                          darkMode ? "dark-stat-label" : ""
                        }`}
                      >
                        Applicants
                      </p>
                      <p className="stat-value">
                        {employerData.stats.totalApplicants}
                      </p>
                    </div>
                    <div
                      className={`stat-card ${
                        darkMode ? "dark-stat-card" : ""
                      }`}
                    >
                      <p
                        className={`stat-label ${
                          darkMode ? "dark-stat-label" : ""
                        }`}
                      >
                        Hired
                      </p>
                      <p className="stat-value">
                        {employerData.stats.hiredCandidates}
                      </p>
                    </div>
                  </div>
                </div>

                <h2 className="section-title">Actions</h2>
                <div className="actions-container">
                  <button className="action-button primary-action">
                    Post New Job
                  </button>
                  <button className="action-button success-action">
                    View Posted Jobs
                  </button>
                  <button
                    className={`action-button secondary-action ${
                      darkMode ? "dark-secondary-action" : ""
                    }`}
                  >
                    Edit Profile
                  </button>
                  <button className="action-button tertiary-action">
                    View Company Profile
                  </button>
                </div>
              </div>
            </div>

            {/* Posted Jobs Section */}
            <div className="jobs-section">
              <div className="jobs-header">
                <h2 className="section-title">Posted Jobs</h2>
                <button className="action-buttons primary-action">
                  Post New Job
                </button>
              </div>

              <div className="jobs-list">
                {employerData.jobs.map((job) => (
                  <div
                    key={job.id}
                    className={`job-card ${darkMode ? "dark-job-card" : ""}`}
                  >
                    <div className="job-header">
                      <div>
                        <h3 className="job-title">{job.title}</h3>
                        <p
                          className={`job-meta ${
                            darkMode ? "dark-job-meta" : ""
                          }`}
                        >
                          {job.type} • {job.location}
                        </p>
                      </div>
                      <span
                        className={`job-status ${
                          job.status === "active"
                            ? "active-status"
                            : job.status === "closed"
                            ? "closed-status"
                            : "draft-status"
                        }`}
                      >
                        {job.status.charAt(0).toUpperCase() +
                          job.status.slice(1)}
                      </span>
                    </div>
                    <div className="job-description">
                      <p className={darkMode ? "dark-text" : ""}>
                        {job.description}
                      </p>
                    </div>
                    <div className="job-stats">
                      <div>
                        <p
                          className={`job-stat ${
                            darkMode ? "dark-job-stat" : ""
                          }`}
                        >
                          <span className="stat-label">Posted:</span>{" "}
                          {new Date(job.postedDate).toLocaleDateString()}
                        </p>
                      </div>
                      <div>
                        <p
                          className={`job-stat ${
                            darkMode ? "dark-job-stat" : ""
                          }`}
                        >
                          <span className="stat-label">Applicants:</span>{" "}
                          {job.applicants}
                        </p>
                      </div>
                      <div>
                        <p
                          className={`job-stat ${
                            darkMode ? "dark-job-stat" : ""
                          }`}
                        >
                          <span className="stat-label">Views:</span> {job.views}
                        </p>
                      </div>
                    </div>
                    <div className="job-actions">
                      <div className="job-action-buttons">
                        <button
                          className={`small-action-button ${
                            darkMode ? "dark-small-action-button" : ""
                          }`}
                        >
                          Edit
                        </button>
                        <button
                          className={`small-action-button ${
                            darkMode ? "dark-small-action-button" : ""
                          }`}
                        >
                          {job.status === "active" ? "Close" : "Reopen"}
                        </button>
                      </div>
                      <button className="small-action-button primary-small-action">
                        View Applications
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Analytics Dashboard */}
            <div className="analytics-section">
              <h2 className="section-title">Job Analytics</h2>
              <div
                className={`analytics-container ${
                  darkMode ? "dark-analytics-container" : ""
                }`}
              >
                <div className="analytics-grid">
                  <div
                    className={`analytics-card ${
                      darkMode ? "dark-analytics-card" : ""
                    }`}
                  >
                    <h3 className="analytics-title">Views per Job</h3>
                    <div className="chart-container">
                      <div
                        className={`chart-placeholder ${
                          darkMode ? "dark-chart-placeholder" : ""
                        }`}
                      >
                        {employerData.jobs.map((job, index) => (
                          <div
                            key={index}
                            className="chart-bar"
                            style={{
                              height: `${
                                (job.views /
                                  Math.max(
                                    ...employerData.jobs.map((j) => j.views)
                                  )) *
                                100
                              }%`,
                            }}
                          ></div>
                        ))}
                      </div>
                      <div className="chart-labels">
                        {employerData.jobs.map((job, index) => (
                          <span
                            key={index}
                            className={`chart-label ${
                              darkMode ? "dark-chart-label" : ""
                            }`}
                          >
                            {job.title.split(" ")[0]}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div
                    className={`analytics-card ${
                      darkMode ? "dark-analytics-card" : ""
                    }`}
                  >
                    <h3 className="analytics-title">Application Rates</h3>
                    <div className="chart-container">
                      <div
                        className={`chart-placeholder ${
                          darkMode ? "dark-chart-placeholder" : ""
                        }`}
                      >
                        {employerData.jobs.map((job, index) => (
                          <div
                            key={index}
                            className="chart-bar-secondary"
                            style={{
                              height: `${
                                (job.applicants /
                                  Math.max(
                                    ...employerData.jobs.map(
                                      (j) => j.applicants
                                    )
                                  )) *
                                100
                              }%`,
                            }}
                          ></div>
                        ))}
                      </div>
                      <div className="chart-labels">
                        {employerData.jobs.map((job, index) => (
                          <span
                            key={index}
                            className={`chart-label ${
                              darkMode ? "dark-chart-label" : ""
                            }`}
                          >
                            {job.title.split(" ")[0]}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div
                    className={`analytics-card ${
                      darkMode ? "dark-analytics-card" : ""
                    }`}
                  >
                    <h3 className="analytics-title">Popular Posting Times</h3>
                    <div className="chart-container">
                      <div
                        className={`full-chart-placeholder ${
                          darkMode ? "dark-full-chart-placeholder" : ""
                        }`}
                      >
                        <p
                          className={`chart-hint ${
                            darkMode ? "dark-chart-hint" : ""
                          }`}
                        >
                          Best time: 10 AM - 12 PM
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
