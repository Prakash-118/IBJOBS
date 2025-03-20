'use client';
import React from 'react'
import '../Jobcreate/page.css';
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const Page = () => {
    const [formData, setFormData] = useState({
        jobTitle: "",
        description: "",
        email: "",
        username: "",
        jobSector: "",
        jobType: "",
        skills: [],
        minSalary: "",
        maxSalary: "",
        category: "",
        area: "",
        qualification: "",
        gender: "",
        experience: "",
        country: "India",
        state: "",
        city: ""
      });
      
      const [submitted, setSubmitted] = useState(false);
      
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
      };
      
      const handleSubmit = (e) => {
        e.preventDefault();
        for (let key in formData) {
          if (!formData[key]) {
            alert("All fields are required!");
            return;
          }
        }
        console.log("Job Details Submitted:", formData);
        setSubmitted(true);
      };

  return (
    <>
   <div className="job-post-container">
      <h2>Post a New Job</h2>
      <div className="progress-bar">
        <div className={`step ${!submitted ? "active" : "completed"}`}>
          <FontAwesomeIcon icon={faBriefcase} />
          <span>Job Details</span>
        </div>
        <div className={`step ${submitted ? "active" : ""}`}>
          <FontAwesomeIcon icon={faCheckCircle} />
          <span>Confirmation</span>
        </div>
      </div>
      
      <form onSubmit={handleSubmit}>
        <input type="text" name="jobTitle" placeholder="Job Title" onChange={handleChange} />
        <textarea name="description" placeholder="Description" onChange={handleChange}></textarea>
        <div className="row">
          <input type="email" name="email" placeholder="Email Address" onChange={handleChange} />
          <input type="text" name="username" placeholder="Username" onChange={handleChange} />
        </div>
        <div className="row">
          <select name="jobSector" onChange={handleChange}><option>Select Sector</option>
          <option>It</option>
          <option>helth</option>
          </select>
          <select name="jobType" onChange={handleChange}><option>Select Type</option>
          <option>Jatt</option>
          <option>Full Time</option>
          </select>
        </div>
        <input type="text" name="skills" placeholder="Required Skills" onChange={handleChange} />
        <div className="row">
          <input type="number" name="minSalary" placeholder="Min Salary" onChange={handleChange} />
          <input type="number" name="maxSalary" placeholder="Max Salary" onChange={handleChange} />
        </div>
        
        <h3>Other Information</h3>
        <div className="row">
          <select name="category" onChange={handleChange}><option>Category</option>
          <option>Hills</option>
          <option>hello ji</option>
          </select>
          <select name="area" onChange={handleChange}><option>Functional Area</option>
          <option>hybrid</option>
          <option>Remote</option>
          </select>
        </div>
        <div className="row">
          <select name="qualification" onChange={handleChange}><option>Qualification</option>
          <option>12th</option>
          <option>Graduate</option>
          </select>
          <select name="gender" onChange={handleChange}><option>Gender</option>
          <option>Male</option>
          <option>Female</option>

          </select>
        </div>
        <input type="number" name="experience" placeholder="Experience" onChange={handleChange} />
        
        <h3>Address / Location</h3>
        <div className="row">
          <select name="country" onChange={handleChange} defaultValue="India"><option>India</option>
          <option>Nepal</option>
          <option>Bhutan</option>
          </select>
          <select name="state" onChange={handleChange}><option>Select State</option>
         
            <option>Delhi</option>
            <option>UP</option>
            <option>MP</option>
            <option>WB</option>
            <option>Odisha</option>
            <option>AP</option>
            <option>TS</option>
            <option>MP</option>
            <option>HP</option>
            <option>UK</option>
            <option>UK</option>
          </select>
        </div>
        <input type="text" name="city" placeholder="City" onChange={handleChange} />
        
        <button type="submit" className="submts">Post Job</button>
      </form>
      
      {submitted && (
        <div className="confirmation-popup">
          <FontAwesomeIcon icon={faCheckCircle} style={{ color: "green" }} />
          <span>Job Created</span>
        </div>
      )}
    </div>
    </>
  )
}

export default Page
