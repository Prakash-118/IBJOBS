"use client";
import Head from "next/head";
import { useEffect, useState, useRef } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import "../Employe/page.css";

export default function EmployerProfile() {
  const [employerData, setEmployerData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({});
  const [activeFilter, setActiveFilter] = useState("all");
  const fileInputRef = useRef(null);
  const companyFileInputRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const mockData = {
        id: 1,
        name: "Ashish Maurya",
        email: "maurya@ibjobs.com",
        phone: "+91 123-4567-890",
        profilePicture: null,
        bio: "Tech entrepreneur with 10+ years experience in software development",
        socialLinks: {
          linkedin: "https://linkedin.com/in/ashish",
          twitter: "https://twitter.com/ashish",
          instagram: "https://instagram.com/ashish",
        },
        company: {
          name: "innoblooms info services pvt. ltd.",
          logo: null,
          industry: "Information Technology",
          size: "51-200 employees",
          website: "https://innoblooms.com",
          description: "Leading provider of innovative tech solutions for businesses worldwide",
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
            description: "Looking for an experienced React developer to join our team...",
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
          {
            id: 103,
            title: "Backend Engineer",
            type: "Full-time",
            location: "Hybrid",
            status: "active",
            postedDate: "2023-06-20",
            description: "Node.js developer needed for API development...",
            applicants: 32,
            views: 210,
          },
          {
            id: 104,
            title: "DevOps Engineer",
            type: "Contract",
            location: "Remote",
            status: "closed",
            postedDate: "2025-05-04",
            description: "Experienced DevOps engineer required for a 3-month project...",
            applicants: 15,
            views: 75,
          },
          {
            id: 105,
            title: "Frontend Developer",
            type: "Full-time",
            location: "On-site",
            status: "active",
            postedDate: "2025-09-12",
            description: "React developer needed for a new project...",
            applicants: 28,
            views: 180,
          },
        ],
        profileCompletion: 100,
        emailVerified: true,
      };
      setEmployerData(mockData);
      setEditData(mockData);
      setLoading(false);
    };
    fetchData();
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setEmployerData(editData);
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCompanyInputChange = (e) => {
    const { name, value } = e.target;
    setEditData(prev => ({
      ...prev,
      company: {
        ...prev.company,
        [name]: value
      }
    }));
  };

  const handleImageUpload = (e, type) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (type === 'profile') {
          setEditData(prev => ({
            ...prev,
            profilePicture: event.target.result
          }));
        } else {
          setEditData(prev => ({
            ...prev,
            company: {
              ...prev.company,
              logo: event.target.result
            }
          }));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = (type) => {
    if (type === 'profile') {
      fileInputRef.current.click();
    } else {
      companyFileInputRef.current.click();
    }
  };

  const filteredJobs = employerData?.jobs.filter(job => {
    if (activeFilter === "all") return true;
    return job.status === activeFilter;
  });

  if (loading) return (
    <div className="loading-screen">
      <div className="skeleton-loader">
        <div className="skeleton-header"></div>
        <div className="skeleton-content">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="skeleton-row"></div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className={`employer-profile ${darkMode ? "dark-mode" : ""}`}>
      <Head>
        <title>{employerData.name} | Employer Profile</title>
      </Head>

      <main className="profile-container">
        {/* Edit Profile Modal */}
        {isEditing && (
          <div className="modal-overlay">
            <div className={`edit-modal ${darkMode ? "dark-modal" : ""}`}>
              <h2>Edit Profile</h2>
              
              <div className="edit-section">
                <h3>Personal Information</h3>
                <div className="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    name="name"
                    value={editData.name}
                    onChange={handleInputChange}
                  />
                </div>
                
                <div className="form-group">
                  <label>Profile Picture</label>
                  <div className="image-upload-container">
                    {editData.profilePicture ? (
                      <img 
                        src={editData.profilePicture} 
                        alt="Profile" 
                        className="upload-preview"
                      />
                    ) : (
                      <div className="upload-placeholder">
                        {editData.name.charAt(0)}
                      </div>
                    )}
                    <button 
                      type="button"
                      onClick={() => triggerFileInput('profile')}
                      className="upload-button"
                    >
                      Upload
                    </button>
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={(e) => handleImageUpload(e, 'profile')}
                      accept="image/*"
                      style={{ display: 'none' }}
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label>Bio</label>
                  <textarea
                    name="bio"
                    value={editData.bio}
                    onChange={handleInputChange}
                    rows={4}
                  />
                </div>
              </div>
              
              <div className="edit-section">
                <h3>Company Information</h3>
                <div className="form-group">
                  <label>Company Name</label>
                  <input
                    type="text"
                    name="name"
                    value={editData.company.name}
                    onChange={handleCompanyInputChange}
                  />
                </div>
                
                <div className="form-group">
                  <label>Company Logo</label>
                  <div className="image-upload-container">
                    {editData.company.logo ? (
                      <img 
                        src={editData.company.logo} 
                        alt="Company Logo" 
                        className="upload-preview"
                      />
                    ) : (
                      <div className="upload-placeholder">
                        {editData.company.name.charAt(0)}
                      </div>
                    )}
                    <button 
                      type="button"
                      onClick={() => triggerFileInput('company')}
                      className="upload-button"
                    >
                      Upload
                    </button>
                    <input
                      type="file"
                      ref={companyFileInputRef}
                      onChange={(e) => handleImageUpload(e, 'company')}
                      accept="image/*"
                      style={{ display: 'none' }}
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label>Company Description</label>
                  <textarea
                    name="description"
                    value={editData.company.description}
                    onChange={handleCompanyInputChange}
                    rows={4}
                  />
                </div>
              </div>
              
              <div className="modal-actions">
                <button 
                  onClick={() => setIsEditing(false)}
                  className="cancel-button"
                >
                  Cancel
                </button>
                <button 
                  onClick={handleSave}
                  className="save-button"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Profile Header */}
        <div className="profile-header">
          <h1 className="profile-title">Employer Profile</h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`mode-toggle ${darkMode ? "dark-mode-toggle" : ""}`}
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
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
          {/* Profile Header Section */}
          <div className={`profile-header-section ${darkMode ? "dark-profile-header" : ""}`}>
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
                      aria-label="LinkedIn profile"
                    >
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
                      aria-label="Twitter profile"
                    >
                      <svg className="social-icon" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    </a>
                  )}
                  {employerData.socialLinks.instagram && (
                    <a
                      href={employerData.socialLinks.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                      aria-label="Instagram profile"
                    >
                      <svg className="social-icon" viewBox="0 0 448 512">
                        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
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
                    <h3 className={`info-label ${darkMode ? "dark-info-label" : ""}`}>
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
                    <h3 className={`info-label ${darkMode ? "dark-info-label" : ""}`}>
                      Phone
                    </h3>
                    <p className="info-value">{employerData.phone}</p>
                  </div>
                  <div className="info-item">
                    <h3 className={`info-label ${darkMode ? "dark-info-label" : ""}`}>
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
                      <h3 className={`info-label ${darkMode ? "dark-info-label" : ""}`}>
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
                    <h3 className={`info-label ${darkMode ? "dark-info-label" : ""}`}>
                      Industry
                    </h3>
                    <p className="info-value">
                      {employerData.company.industry}
                    </p>
                  </div>
                  <div className="info-item">
                    <h3 className={`info-label ${darkMode ? "dark-info-label" : ""}`}>
                      Company Size
                    </h3>
                    <p className="info-value">{employerData.company.size}</p>
                  </div>
                  <div className="info-item">
                    <h3 className={`info-label ${darkMode ? "dark-info-label" : ""}`}>
                      Website
                    </h3>
                    <a
                      href={employerData.company.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`info-value website-link ${darkMode ? "dark-website-link" : ""}`}
                    >
                      {employerData.company.website.replace(/^https?:\/\//, "")}
                    </a>
                  </div>
                  <div className="info-item">
                    <h3 className={`info-label ${darkMode ? "dark-info-label" : ""}`}>
                      Location
                    </h3>
                    <p className="info-value">{employerData.company.address}</p>
                  </div>
                  <div className="info-item">
                    <h3 className={`info-label ${darkMode ? "dark-info-label" : ""}`}>
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
                <div className={`stats-container ${darkMode ? "dark-stats-container" : ""}`}>
                  <div className="stats-grid">
                    <div className={`stat-card ${darkMode ? "dark-stat-card" : ""}`}>
                      <p className={`stat-label ${darkMode ? "dark-stat-label" : ""}`}>
                        Total Jobs
                      </p>
                      <p className="stat-value">
                        {employerData.stats.totalJobsPosted}
                      </p>
                    </div>
                    <div className={`stat-card ${darkMode ? "dark-stat-card" : ""}`}>
                      <p className={`stat-label ${darkMode ? "dark-stat-label" : ""}`}>
                        Active Jobs
                      </p>
                      <p className="stat-value">
                        {employerData.stats.activeJobs}
                      </p>
                    </div>
                    <div className={`stat-card ${darkMode ? "dark-stat-card" : ""}`}>
                      <p className={`stat-label ${darkMode ? "dark-stat-label" : ""}`}>
                        Applicants
                      </p>
                      <p className="stat-value">
                        {employerData.stats.totalApplicants}
                      </p>
                    </div>
                    <div className={`stat-card ${darkMode ? "dark-stat-card" : ""}`}>
                      <p className={`stat-label ${darkMode ? "dark-stat-label" : ""}`}>
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
                    <a href="/Jobcreate" style={{color:"white", textDecoration:"none"}}>Post New Job</a>
                  </button>
                  <button 
                    className="action-button success-action" 
                    onClick={() => scrollToSection("joblist")}
                  >
                    View Posted Jobs
                  </button>
                  <button
                    className={`action-button secondary-action ${darkMode ? "dark-secondary-action" : ""}`}
                    onClick={handleEditClick}
                  >
                    Edit Profile
                  </button>
                  <button 
                    className="action-button tertiary-action" 
                    onClick={() => scrollToSection("analytics")}
                  >
                    View Job Analytics
                  </button>
                </div>
              </div>
            </div>

            {/* Posted Jobs Section */}
            <div className="jobs-section">
              <div className="jobs-header">
                <h2 className="section-title">Posted Jobs</h2>
                <div className="jobs-filter">
                  <button 
                    className={`filter-button ${activeFilter === "all" ? "active" : ""}`}
                    onClick={() => setActiveFilter("all")}
                  >
                    All Jobs
                  </button>
                  <button 
                    className={`filter-button ${activeFilter === "active" ? "active" : ""}`}
                    onClick={() => setActiveFilter("active")}
                  >
                    Active
                  </button>
                  <button 
                    className={`filter-button ${activeFilter === "closed" ? "active" : ""}`}
                    onClick={() => setActiveFilter("closed")}
                  >
                    Closed
                  </button>
                </div>
                <button className="action-buttons primary-action">
                  Post New Job
                </button>
              </div>

              <div className="jobs-list" id="joblist">
                {filteredJobs.map((job) => (
                  <div
                    key={job.id}
                    className={`job-card ${darkMode ? "dark-job-card" : ""}`}
                  >
                    <div className="job-header">
                      <div>
                        <h3 className="job-title">{job.title}</h3>
                        <p className={`job-meta ${darkMode ? "dark-job-meta" : ""}`}>
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
                        {job.status.charAt(0).toUpperCase() + job.status.slice(1)}
                      </span>
                    </div>
                    <div className="job-description">
                      <p className={darkMode ? "dark-text" : ""}>
                        {job.description}
                      </p>
                    </div>
                    <div className="job-stats">
                      <div>
                        <p className={`job-stat ${darkMode ? "dark-job-stat" : ""}`}>
                          <span className="stat-label">Posted:</span>{" "}
                          {new Date(job.postedDate).toLocaleDateString()}
                        </p>
                      </div>
                      <div>
                        <p className={`job-stat ${darkMode ? "dark-job-stat" : ""}`}>
                          <span className="stat-label">Applicants:</span>{" "}
                          {job.applicants}
                        </p>
                      </div>
                      <div>
                        <p className={`job-stat ${darkMode ? "dark-job-stat" : ""}`}>
                          <span className="stat-label">Views:</span> {job.views}
                        </p>
                      </div>
                    </div>
                    <div className="job-actions">
                      <div className="job-action-buttons">
                        <button
                          className={`small-action-button ${darkMode ? "dark-small-action-button" : ""}`}
                        >
                          Edit
                        </button>
                        <button
                          className={`small-action-button ${darkMode ? "dark-small-action-button" : ""}`}
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
            <div className="analytics-section" id="analytics">
              <h2 className="section-title">Job Analytics</h2>
              <div className={`analytics-container ${darkMode ? "dark-analytics-container" : ""}`}>
                <div className="analytics-grid">
                  <div className={`analytics-card ${darkMode ? "dark-analytics-card" : ""}`}>
                    <h3 className="analytics-title">Views per Job</h3>
                    <div className="chart-container">
                      <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={employerData.jobs}>
                          <XAxis dataKey="title" />
                          <YAxis />
                          <Tooltip />
                          <Bar dataKey="views" fill="#8884d8" />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                  <div className={`analytics-card ${darkMode ? "dark-analytics-card" : ""}`}>
                    <h3 className="analytics-title">Application Rates</h3>
                    <div className="chart-container">
                      <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={employerData.jobs}>
                          <XAxis dataKey="title" />
                          <YAxis />
                          <Tooltip />
                          <Bar dataKey="applicants" fill="#82ca9d" />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                  <div className={`analytics-card ${darkMode ? "dark-analytics-card" : ""}`}>
                    <h3 className="analytics-title">Popular Posting Times</h3>
                    <div className="chart-container">
                      <div className={`full-chart-placeholder ${darkMode ? "dark-full-chart-placeholder" : ""}`}>
                        <p className={`chart-hint ${darkMode ? "dark-chart-hint" : ""}`}>
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
