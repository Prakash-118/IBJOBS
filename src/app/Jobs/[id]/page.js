import React from "react";
import Link from "next/link";
import '../../Jobspost/page.css';
// Mock data - in a real app you'd fetch this from an API or database
const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Google",
    logo: "/google.png",
    description: "Google job description here.",
    requirements: ["3+ years experience", "React knowledge", "CSS skills"],
    salary: "₹120,000 - ₹150,000",
    location: "Mountain View, CA",
  },
  // ... other job data
  {
    id: 2,
    title: "Backend Developer",
    company: "Facebook",
    logo: "/facebook.png",
    description: "Facebook job Description here.",
    requirements: ["5+ years experience", "Node.js knowledge", "Daababase skills"],
    salary: "₹130,000 - ₹160,000",
    location: "Menlo Park, CA",
  },
  {
    id: 3,
    title: "Full Stack Developer",
    company: "Amazon",
    logo: "/amazonp.png",
    description: "Amazon job description here.",
    requirements: ["5+ years experience", "React and Node.js Knowledge", "AWS skills"],
    salary: "₹140,000 - ₹170,000",
    location: "Seattle, WA",
  },
  {
    id: 4,
    title: "Data Svientist",
    company: "Accenture",
    logo: "/Accenture.png",
    description: "Accenture job description here.",
    requirements: ["3+ years experience", "Python knowledge", "Machine learning skills"],
    salary: "₹110,000 - ₹140,000",
    location: "Chicago, IL",
  },
  {
    id: 5,
    title: "Software Engineer",
    company: "Netflix",
    logo: "/netfli.webp",
    description: "Netflix job description here.",
    requirements: ["4+ years experience", "Java Knowledge", "Spring skills"],
    salary: "₹125,000 - ₹155,000",
    location: "Los Gatos, CA",
  },
  {
    id: 6,
    title: "UI/UX Designer",
    company: "Microsoft",
    logo: "/microsofts.png",
    description: "Microsoft job description here.",
    requirements: ["3+ years experience", "Figma knowledge", "User research skills"],
    salary: "₹100,000 - ₹130,000",
    location: "Redmond, WA",
  },
  {
    id: 7,
    title: "DevOps Engineer",
    company: "Apple",
    logo: "/apple.png",
    description: "Apple job description here.",
    requirements: ["5+ years experience", "AWS knowledge", "CI/CD skills"],
    salary: "₹130,000 - ₹160,000",
    location: "Cupertino, CA",
  },
  {
    id: 8,
    title: "Project Manager",
    company: "IBM",
    logo: "/ibm.png",
    description: "IBM job description here.",
    requirements: ["5+ years experience", "Agile knowledge", "Leadership skills"],
    salary: "₹120,000 - ₹150,000",
    location: "Armonk, NY",
  },
  {
    id: 9,
    title: "Data Analyst",
    company: "Tesla",
    logo: "/tesla.png",
    description: "Tesla job description here.",
    requirements: ["3+ years experince", "SQL knowledge", "Data visualization skills"],
    salary: "₹110,000 - ₹140,000",
    location: "Palo Alto, CA",
  },
  {
    id: 10,
    title: "Cybersecurity Analyst",
    company: "Intel",
    logo: "/intel.png",
    description: "Intel job description here.",
    requirements: ["4+ years experience", "Network security knowledge", "Risk assessment skills"],
    salary: "₹120,000 - ₹150,000",
    location: "Santa Clara, CA",
  },
  {
    id: 11,
    title: "Cloud Engineer",
    company: "Adobe",
    logo: "/adobe.png",
    description: "Adobe job description here.",
    requirements: ["3+ years experience", "AWS knowledge", "Cloud architecture skills"],
    salary: "₹115,000 - ₹145,000",
    location: "San Jose, CA",
  },
  {
    id: 12,
    title: "Machine Learning Er.",
    company: "NVIDIA",
    logo: "/nvidia.jpeg",
    description: "NVIDIA job description here.",
    requirements: ["5+ years experience", "Python Knowledge", "Deep learning skills"],
    salary: "₹130,000 - ₹160,000",
    location: "Santa Clara, CA",
  }
];

export default function JobDetail({ params }) {
  const job = jobs.find((job) => job.id === Number(params.id));

  if (!job) {
    return <div>Job not found</div>;
  }

  return (
    <div className="job-detail-container">
      <Link href="/Jobspost" className="back-button">
        &larr; Back to Jobs
      </Link>
      
      <div className="job-header">
        <img src={job.logo} alt={job.company} className="company-logo-large" />
        <div className="job-header-info">
          <h1>{job.title}</h1>
          <h2>{job.company}</h2>
          <p className="job-location">{job.location}</p>
          <p className="job-salary">{job.salary}</p>
        </div>
      </div>

      <div className="job-content">
        <section className="job-description">
          <h3>Job Description</h3>
          <p>{job.description}</p>
        </section>

        <section className="job-requirements">
          <h3>Requirements</h3>
          <ul>
            {job.requirements.map((req, index) => (
              <li key={index}>{req}</li>
            ))}
          </ul>
        </section>

        <button className="apply-button">Apply Now</button>
      </div>
    </div>
  );
}