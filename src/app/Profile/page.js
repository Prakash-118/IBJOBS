"use client";
import { useState, useRef } from "react";
import React from "react";
import "../Profile/page.css";

const Page = () => {
  const [profileData, setProfileData] = useState({
    name: "Prakash Kushwaha",
    position: "Front End Developer",
    company: "at Innoblooms InfoService Pvt. Ltd.",
    location: "Noida, INDIA",
    experience: "0 Year 6 Months",
    salary: "₹1,80,000",
    email: "chandraprakashcse089@gmail.com",
    noticePeriod: "15 Days or less notice period",
    profilePhoto: "/image.jpg",
  });

  // Resume headline state
  const [resumeHeadline, setResumeHeadline] = useState(
    "Having Computer Science background and being a student with a focus on Web Developer, seeking a Junior Software Engineer role contributing to the growth and success of the organization."
  );

  // Key skills state
  const [skills, setSkills] = useState([
    "HTML5",
    "CSS5",
    "JavaScript",
    "React.Js",
    "Nextjs",
  ]);
  const [newSkill, setNewSkill] = useState("");

  // Employment state
  const [employment, setEmployment] = useState([
    {
      id: 1,
      position: "Front End Developer",
      company: "Innoblooms InfoService Pvt. Ltd.",
      type: "Full-time",
      duration: "Feb 2025 to Present (3 months)",
      noticePeriod: "15 Days or less Notice Period",
      description:
        "I am a passionate Frontend Developer with hands-on experience in creating responsive, user-friendly web interfaces using HTML, CSS, JavaScript, and modern frameworks like React.js. I specialize in turning UI/UX designs into clean, interactive, and efficient code. My goal is to deliver... Read More",
      topSkills: ["React.js", "Nextjs"],
    },
  ]);

  // Education state
  const [education, setEducation] = useState([
    {
      id: 1,
      degree: "Bachelor of Technology (Computer Science)",
      university: "AKTU University",
      year: "2020 - 2024",
      percentage: "70%",
    },
  ]);
  const [newEducation, setNewEducation] = useState({
    degree: "",
    university: "",
    year: "",
    percentage: "",
  });

  // IT Skills state
  const [itSkills, setItSkills] = useState([
    {
      id: 1,
      skill: "Web Development",
      experience: "1 Year",
      lastUsed: "2024",
    },
  ]);
  const [newItSkill, setNewItSkill] = useState({
    skill: "",
    experience: "",
    lastUsed: "",
  });

  // Projects state
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "E-commerce Website",
      description: "Built a full-stack e-commerce platform with React and Node.js",
      duration: "3 Months",
      skills: ["React", "Node.js", "MongoDB"],
    },
  ]);
  const [newProject, setNewProject] = useState({
    title: "",
    description: "",
    duration: "",
    skills: [],
  });

  // Profile Summary state
  const [profileSummary, setProfileSummary] = useState(
    "Frontend developer with expertise in React.js and Next.js. Passionate about creating responsive and user-friendly web applications."
  );

  // Accomplishments state
  const [accomplishments, setAccomplishments] = useState([
    {
      id: 1,
      title: "Hackathon Winner",
      description: "Won first prize in college hackathon",
      year: "2023",
    },
  ]);
  const [newAccomplishment, setNewAccomplishment] = useState({
    title: "",
    description: "",
    year: "",
  });

  // Career Profile state
  const [careerProfile, setCareerProfile] = useState({
    industry: "IT Software",
    functionalArea: "Development",
    role: "Frontend Developer",
    jobType: "Permanent",
    employmentType: "Full Time",
  });

  // Personal Details state
  const [personalDetails, setPersonalDetails] = useState({
    dateOfBirth: "01/01/1995",
    gender: "Male",
    maritalStatus: "Single",
    address: "Noida, Uttar Pradesh",
    languages: ["Hindi", "English"],
  });

  // Form states
  const [showProfileEdit, setShowProfileEdit] = useState(false);
  const [showEmploymentForm, setShowEmploymentForm] = useState(false);
  const [showEducationForm, setShowEducationForm] = useState(false);
  const [showItSkillForm, setShowItSkillForm] = useState(false);
  const [showProjectForm, setShowProjectForm] = useState(false);
  const [showAccomplishmentForm, setShowAccomplishmentForm] = useState(false);
  
  const [newEmployment, setNewEmployment] = useState({
    position: "",
    company: "",
    type: "Full-time",
    duration: "",
    noticePeriod: "",
    description: "",
    topSkills: [],
  });

  // File upload ref
  const fileInputRef = useRef(null);

  // Handle profile edit
  const handleProfileEdit = (e) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle profile photo change
  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setProfileData((prev) => ({
          ...prev,
          profilePhoto: event.target.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle skill addition
  const handleAddSkill = () => {
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill("");
    }
  };

  // Handle skill removal
  const handleRemoveSkill = (skillToRemove) => {
    setSkills(skills.filter((skill) => skill !== skillToRemove));
  };

  // Handle employment form change
  const handleEmploymentChange = (e) => {
    const { name, value } = e.target;
    setNewEmployment((prev) => ({ ...prev, [name]: value }));
  };

  // Add new employment or update existing
  const handleAddEmployment = () => {
    if (newEmployment.position && newEmployment.company) {
      if (newEmployment.id) {
        // Update existing employment
        setEmployment(employment.map(emp => 
          emp.id === newEmployment.id ? newEmployment : emp
        ));
      } else {
        // Add new employment
        setEmployment([...employment, { ...newEmployment, id: Date.now() }]);
      }
      
      setNewEmployment({
        position: "",
        company: "",
        type: "Full-time",
        duration: "",
        noticePeriod: "",
        description: "",
        topSkills: [],
      });
      setShowEmploymentForm(false);
    }
  };
  
  // Employment Edit and Delete Function
  const handleEditEmployment = (id) => {
    const employmentToEdit = employment.find((emp) => emp.id === id); 
    setNewEmployment(employmentToEdit);
    setShowEmploymentForm(true);
  };

  const handleRemoveEmployment = (id) => {
    setEmployment(employment.filter((emp) => emp.id !== id));
  }

  // Education functions
  const handleEducationChange = (e) => {
    const { name, value } = e.target;
    setNewEducation((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddEducation = () => {
    if (newEducation.degree && newEducation.university) {
      if (newEducation.id) {
        setEducation(education.map(edu => 
          edu.id === newEducation.id ? newEducation : edu
        ));
      } else {
        setEducation([...education, { ...newEducation, id: Date.now() }]);
      }
      setNewEducation({
        degree: "",
        university: "",
        year: "",
        percentage: "",
      });
      setShowEducationForm(false);
    }
  };

  const handleEditEducation = (id) => {
    const educationToEdit = education.find((edu) => edu.id === id);
    setNewEducation(educationToEdit);
    setShowEducationForm(true);
  };

  const handleRemoveEducation = (id) => {
    setEducation(education.filter((edu) => edu.id !== id));
  };

  // IT Skills functions
  const handleItSkillChange = (e) => {
    const { name, value } = e.target;
    setNewItSkill((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddItSkill = () => {
    if (newItSkill.skill) {
      if (newItSkill.id) {
        setItSkills(itSkills.map(skill => 
          skill.id === newItSkill.id ? newItSkill : skill
        ));
      } else {
        setItSkills([...itSkills, { ...newItSkill, id: Date.now() }]);
      }
      setNewItSkill({
        skill: "",
        experience: "",
        lastUsed: "",
      });
      setShowItSkillForm(false);
    }
  };

  const handleEditItSkill = (id) => {
    const skillToEdit = itSkills.find((skill) => skill.id === id);
    setNewItSkill(skillToEdit);
    setShowItSkillForm(true);
  };

  const handleRemoveItSkill = (id) => {
    setItSkills(itSkills.filter((skill) => skill.id !== id));
  };

  // Projects functions
  const handleProjectChange = (e) => {
    const { name, value } = e.target;
    setNewProject((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddProject = () => {
    if (newProject.title) {
      if (newProject.id) {
        setProjects(projects.map(proj => 
          proj.id === newProject.id ? newProject : proj
        ));
      } else {
        setProjects([...projects, { ...newProject, id: Date.now() }]);
      }
      setNewProject({
        title: "",
        description: "",
        duration: "",
        skills: [],
      });
      setShowProjectForm(false);
    }
  };

  const handleEditProject = (id) => {
    const projectToEdit = projects.find((proj) => proj.id === id);
    setNewProject(projectToEdit);
    setShowProjectForm(true);
  };

  const handleRemoveProject = (id) => {
    setProjects(projects.filter((proj) => proj.id !== id));
  };

  // Profile Summary functions
  const handleProfileSummaryChange = (e) => {
    setProfileSummary(e.target.value);
  };

  // Accomplishments functions
  const handleAccomplishmentChange = (e) => {
    const { name, value } = e.target;
    setNewAccomplishment((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddAccomplishment = () => {
    if (newAccomplishment.title) {
      if (newAccomplishment.id) {
        setAccomplishments(accomplishments.map(acc => 
          acc.id === newAccomplishment.id ? newAccomplishment : acc
        ));
      } else {
        setAccomplishments([...accomplishments, { ...newAccomplishment, id: Date.now() }]);
      }
      setNewAccomplishment({
        title: "",
        description: "",
        year: "",
      });
      setShowAccomplishmentForm(false);
    }
  };

  const handleEditAccomplishment = (id) => {
    const accomplishmentToEdit = accomplishments.find((acc) => acc.id === id);
    setNewAccomplishment(accomplishmentToEdit);
    setShowAccomplishmentForm(true);
  };

  const handleRemoveAccomplishment = (id) => {
    setAccomplishments(accomplishments.filter((acc) => acc.id !== id));
  };

  // Career Profile functions
  const handleCareerProfileChange = (e) => {
    const { name, value } = e.target;
    setCareerProfile((prev) => ({ ...prev, [name]: value }));
  };

  // Personal Details functions
  const handlePersonalDetailsChange = (e) => {
    const { name, value } = e.target;
    setPersonalDetails((prev) => ({ ...prev, [name]: value }));
  };

  // Scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId); 
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
 
  return (
    <>
      <div className="profileContainer">
        {/* Profile Header Section */}
        <div className="profileHeader">
          <div className="profilePhotoContainer">
            <img
              src={profileData.profilePhoto}
              alt="Profile"
              className="profilePhoto"
            />
            <input
              type="file"
              accept="image/*"
              onChange={handlePhotoChange}
              style={{ display: "none" }}
              id="profilePhotoInput"
            />
            <label htmlFor="profilePhotoInput" className="photoEditLabel">
              Edit
              
            </label>
          </div>

          <div className="profileInfo">
            <div className="nameContainer">
              <h1>{profileData.name}</h1>
              <button
                className="editButton"
                onClick={() => setShowProfileEdit(true)}
              >
                ✏️
              </button>
            </div>
            <h2>{profileData.position}</h2>
            <p>{profileData.company}</p>

            <div className="profileDetails">
              <p>{profileData.location}</p>
              <p>{profileData.experience}</p>
              <p>{profileData.salary}</p>
              <p>{profileData.email}</p>
              <p>{profileData.noticePeriod}</p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="mainContent">
          {/* Quick Links Sidebar */}
          <div className="quickLinks">
            <h3>Quick links</h3>
            <ul>
              <li onClick={() => scrollToSection("resume")}>Resume Update</li>
              <li onClick={() => scrollToSection("resumeHeadline")}>
                Resume headline
              </li>
              <li onClick={() => scrollToSection("keySkills")}>Key skills</li>
              <li onClick={() => scrollToSection("employment")}>Employment</li>
              <li onClick={() => scrollToSection("education")}>Education</li>
              <li onClick={() => scrollToSection("itSkills")}>IT skills</li>
              <li onClick={() => scrollToSection("projects")}>Projects</li>
              <li onClick={() => scrollToSection("profileSummary")}>Profile summary</li>
              <li onClick={() => scrollToSection("accomplishments")}>Accomplishments</li>
              <li onClick={() => scrollToSection("careerProfile")}>Career profile</li>
              <li onClick={() => scrollToSection("personalDetails")}>Personal details</li>
            </ul>
          </div>

          {/* Profile Content */}
          <div className="profileContent">
            {/* Resume Section */}
            <div id="resume" className="section">
              <h3>Resume</h3>
              <div className="uploadSection">
                <button
                  className="uploadButton"  
                  onClick={() => fileInputRef.current.click()}
                >
                  Update resume
                </button>
                <input
                  type="file"
                  ref={fileInputRef}
                  // style={{ display: "none" }}
                  accept=".doc,.docx,.rtf,.pdf"
                />
                <p style={{color:"gray"}}>Supported Formats: doc, docx, rtf, pdf, upto 2 MB</p>
              </div>
            </div>

            {/* Resume Headline Section */}
            <div id="resumeHeadline" className="section">
              <div className="sectionHeader">
                <h3>Resume headline</h3>
                <button
                  className="editButton"
                  onClick={() => {
                    const newHeadline = prompt(
                      "Edit your resume headline:",
                      resumeHeadline
                    );
                    if (newHeadline !== null) {
                      setResumeHeadline(newHeadline);
                    }
                  }}
                >
                  ✏️
                </button>
              </div>
              <p>{resumeHeadline}</p>
            </div>

            {/* Key Skills Section */}
            <div id="keySkills" className="section">
              <div className="sectionHeader">
                <h3>Key skills</h3>
                <div className="skillInputContainer">
                  <input
                    type="text"
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                    placeholder="Add skill"
                    className="skillInput"
                  />
                  <button onClick={handleAddSkill} className="addButton">
                    Add
                  </button>
                </div>
              </div>
              <div className="skillsList">
                {skills.map((skill, index) => (
                  <div key={index} className="skillTag">
                    {skill}
                    <button
                      onClick={() => handleRemoveSkill(skill)}
                      className="removeSkillButton"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Employment Section */}
            <div id="employment" className="section">
              <div className="sectionHeader">
                <h3>Employment</h3>
                <button
                  className="addButton"
                  onClick={() => {
                    setNewEmployment({
                      position: "",
                      company: "",
                      type: "Full-time",
                      duration: "",
                      noticePeriod: "",
                      description: "",
                      topSkills: [],
                    });
                    setShowEmploymentForm(true);
                  }}
                >
                  Add Employment
                </button>
              </div>

              {employment.map((job) => (
                <div key={job.id} className="employmentItem">
                  <h4>{job.position}</h4>
                  <p>{job.company}</p>
                  <p>
                    {job.type} | {job.duration}
                  </p>
                  <p>{job.noticePeriod}</p>
                  <p>{job.description}</p>
                  {job.topSkills.length > 0 && (
                    <div className="topSkills">
                      <span>Top skills: </span>
                      {job.topSkills.join(", ")}
                    </div>
                  )}
                  <div className="employmentEditDelete">
                    <button
                      className="editsButton"
                      onClick={() => handleEditEmployment(job.id)}
                    >
                      Edit
                    </button>
                    <button
                      className="deleteButton"
                      onClick={() => handleRemoveEmployment(job.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Education Section */}
            <div id="education" className="section">
              <div className="sectionHeader">
                <h3>Education</h3>
                <button
                  className="addButton"
                  onClick={() => {
                    setNewEducation({
                      degree: "",
                      university: "",
                      year: "",
                      percentage: "",
                    });
                    setShowEducationForm(true);
                  }}
                >
                  Add Education
                </button>
              </div>

              {education.map((edu) => (
                <div key={edu.id} className="educationItem">
                  <h4>{edu.degree}</h4>
                  <p>{edu.university}</p>
                  <p>{edu.year}</p>
                  <p>Percentage/GPA: {edu.percentage}</p>
                  <div className="educationEditDelete">
                    <button
                      className="editsButton"
                      onClick={() => handleEditEducation(edu.id)}
                    >
                      Edit
                    </button>
                    <button
                      className="deleteButton"
                      onClick={() => handleRemoveEducation(edu.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* IT Skills Section */}
            <div id="itSkills" className="section">
              <div className="sectionHeader">
                <h3>IT Skills</h3>
                <button
                  className="addButton"
                  onClick={() => {
                    setNewItSkill({
                      skill: "",
                      experience: "",
                      lastUsed: "",
                    });
                    setShowItSkillForm(true);
                  }}
                >
                  Add IT Skill
                </button>
              </div>

              {itSkills.map((skill) => (
                <div key={skill.id} className="itSkillItem">
                  <h4>{skill.skill}</h4>
                  <p>Experience: {skill.experience}</p>
                  <p>Last Used: {skill.lastUsed}</p>
                  <div className="itSkillEditDelete">
                    <button
                      className="editsButton"
                      onClick={() => handleEditItSkill(skill.id)}
                    >
                      Edit
                    </button>
                    <button
                      className="deleteButton"
                      onClick={() => handleRemoveItSkill(skill.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Projects Section */}
            <div id="projects" className="section">
              <div className="sectionHeader">
                <h3>Projects</h3>
                <button
                  className="addButton"
                  onClick={() => {
                    setNewProject({
                      title: "",
                      description: "",
                      duration: "",
                      skills: [],
                    });
                    setShowProjectForm(true);
                  }}
                >
                  Add Project
                </button>
              </div>

              {projects.map((project) => (
                <div key={project.id} className="projectItem">
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                  <p>Duration: {project.duration}</p>
                  {project.skills.length > 0 && (
                    <div className="projectSkills">
                      <span>Skills used: </span>
                      {project.skills.join(", ")}
                    </div>
                  )}
                  <div className="projectEditDelete">
                    <button
                      className="editsButton"
                      onClick={() => handleEditProject(project.id)}
                    >
                      Edit
                    </button>
                    <button
                      className="deleteButton"
                      onClick={() => handleRemoveProject(project.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Profile Summary Section */}
            <div id="profileSummary" className="section">
              <div className="sectionHeader">
                <h3>Profile Summary</h3>
                <button
                  className="editButton"
                  onClick={() => {
                    const newSummary = prompt(
                      "Edit your profile summary:",
                      profileSummary
                    );
                    if (newSummary !== null) {
                      setProfileSummary(newSummary);
                    }
                  }}
                >
                  ✏️
                </button>
              </div>
              <p>{profileSummary}</p>
            </div>

            {/* Accomplishments Section */}
            <div id="accomplishments" className="section">
              <div className="sectionHeader">
                <h3>Accomplishments</h3>
                <button
                  className="addButton"
                  onClick={() => {
                    setNewAccomplishment({
                      title: "",
                      description: "",
                      year: "",
                    });
                    setShowAccomplishmentForm(true);
                  }}
                >
                  Add Accomplishment
                </button>
              </div>

              {accomplishments.map((acc) => (
                <div key={acc.id} className="accomplishmentItem">
                  <h4>{acc.title}</h4>
                  <p>{acc.description}</p>
                  <p>Year: {acc.year}</p>
                  <div className="accomplishmentEditDelete">
                    <button
                      className="editsButton"
                      onClick={() => handleEditAccomplishment(acc.id)}
                    >
                      Edit
                    </button>
                    <button
                      className="deleteButton"
                      onClick={() => handleRemoveAccomplishment(acc.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Career Profile Section */}
            <div id="careerProfile" className="section">
              <div className="sectionHeader">
                <h3>Career Profile</h3>
                <button
                  className="editButton"
                  onClick={() => {
                    const newIndustry = prompt(
                      "Industry:",
                      careerProfile.industry
                    );
                    const newFunctionalArea = prompt(
                      "Functional Area:",
                      careerProfile.functionalArea
                    );
                    const newRole = prompt("Role:", careerProfile.role);
                    const newJobType = prompt("Job Type:", careerProfile.jobType);
                    const newEmploymentType = prompt(
                      "Employment Type:",
                      careerProfile.employmentType
                    );

                    if (
                      newIndustry !== null &&
                      newFunctionalArea !== null &&
                      newRole !== null &&
                      newJobType !== null &&
                      newEmploymentType !== null
                    ) {
                      setCareerProfile({
                        industry: newIndustry,
                        functionalArea: newFunctionalArea,
                        role: newRole,
                        jobType: newJobType,
                        employmentType: newEmploymentType,
                      });
                    }
                  }}
                >
                  ✏️
                </button>
              </div>
              <div className="careerProfileDetails">
                <p><strong>Industry:</strong> {careerProfile.industry}</p>
                <p><strong>Functional Area:</strong> {careerProfile.functionalArea}</p>
                <p><strong>Role:</strong> {careerProfile.role}</p>
                <p><strong>Job Type:</strong> {careerProfile.jobType}</p>
                <p><strong>Employment Type:</strong> {careerProfile.employmentType}</p>
              </div>
            </div>

            {/* Personal Details Section */}
            <div id="personalDetails" className="section">
              <div className="sectionHeader">
                <h3>Personal Details</h3>
                <button
                  className="editButton"
                  onClick={() => {
                    const newDateOfBirth = prompt(
                      "Date of Birth:",
                      personalDetails.dateOfBirth
                    );
                    const newGender = prompt("Gender:", personalDetails.gender);
                    const newMaritalStatus = prompt(
                      "Marital Status:",
                      personalDetails.maritalStatus
                    );
                    const newAddress = prompt(
                      "Address:",
                      personalDetails.address
                    );
                    const newLanguages = prompt(
                      "Languages (comma separated):",
                      personalDetails.languages.join(", ")
                    );

                    if (
                      newDateOfBirth !== null &&
                      newGender !== null &&
                      newMaritalStatus !== null &&
                      newAddress !== null &&
                      newLanguages !== null
                    ) {
                      setPersonalDetails({
                        dateOfBirth: newDateOfBirth,
                        gender: newGender,
                        maritalStatus: newMaritalStatus,
                        address: newAddress,
                        languages: newLanguages.split(",").map(lang => lang.trim()),
                      });
                    }
                  }}
                >
                  ✏️
                </button>
              </div>
              <div className="personalDetailsContent">
                <p><strong>Date of Birth:</strong> {personalDetails.dateOfBirth}</p>
                <p><strong>Gender:</strong> {personalDetails.gender}</p>
                <p><strong>Marital Status:</strong> {personalDetails.maritalStatus}</p>
                <p><strong>Address:</strong> {personalDetails.address}</p>
                <p><strong>Languages:</strong> {personalDetails.languages.join(", ")}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Edit Modal */}
        {showProfileEdit && (
          <div className="modalOverlay">
            <div className="modal">
              <h2>Edit Profile</h2>
              <div className="formGroup">
                <label>Name:</label>
                <input
                  type="text"
                  name="name"
                  value={profileData.name}
                  onChange={handleProfileEdit}
                />
              </div>
              <div className="formGroup">
                <label>Position:</label>
                <input
                  type="text"
                  name="position"
                  value={profileData.position}
                  onChange={handleProfileEdit}
                />
              </div>
              <div className="formGroup">
                <label>Company:</label>
                <input
                  type="text"
                  name="company"
                  value={profileData.company}
                  onChange={handleProfileEdit}
                />
              </div>
              <div className="formGroup">
                <label>Location:</label>
                <input
                  type="text"
                  name="location"
                  value={profileData.location}
                  onChange={handleProfileEdit}
                />
              </div>
              <div className="formGroup">
                <label>Experience:</label>
                <input
                  type="text"
                  name="experience"
                  value={profileData.experience}
                  onChange={handleProfileEdit}
                />
              </div>
              <div className="formGroup">
                <label>Salary:</label>
                <input
                  type="text"
                  name="salary"
                  value={profileData.salary}
                  onChange={handleProfileEdit}
                />
              </div>
              <div className="formGroup">
                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  value={profileData.email}
                  onChange={handleProfileEdit}
                />
              </div>
              <div className="formGroup">
                <label>Notice Period:</label>
                <input
                  type="text"
                  name="noticePeriod"
                  value={profileData.noticePeriod}
                  onChange={handleProfileEdit}
                />
              </div>
              <div className="modalButtons">
                <button
                  className="saveButton"
                  onClick={() => setShowProfileEdit(false)}
                >
                  Save
                </button>
                <button
                  className="cancelButton"
                  onClick={() => setShowProfileEdit(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Employment Form Modal */}
        {showEmploymentForm && (
          <div className="modalOverlay">
            <div className="modal">
              <h2>{newEmployment.id ? "Edit Employment" : "Add Employment"}</h2>
              <div className="formGroup">
                <label>Position:</label>
                <input
                  type="text"
                  name="position"
                  value={newEmployment.position}
                  onChange={handleEmploymentChange}
                />
              </div>
              <div className="formGroup">
                <label>Company:</label>
                <input
                  type="text"
                  name="company"
                  value={newEmployment.company}
                  onChange={handleEmploymentChange}
                />
              </div>
              <div className="formGroup">
                <label>Employment Type:</label>
                <select
                  name="type"
                  value={newEmployment.type}
                  onChange={handleEmploymentChange}
                >
                  <option value="Full-time">Full-time</option>
                  <option value="Part-time">Part-time</option>
                  <option value="Contract">Contract</option>
                  <option value="Internship">Internship</option>
                </select>
              </div>
              <div className="formGroup">
                <label>Duration:</label>
                <input
                  type="text"
                  name="duration"
                  value={newEmployment.duration}
                  onChange={handleEmploymentChange}
                  placeholder="e.g. Feb 2025 to Present (3 months)"
                />
              </div>
              <div className="formGroup">
                <label>Notice Period:</label>
                <input
                  type="text"
                  name="noticePeriod"
                  value={newEmployment.noticePeriod}
                  onChange={handleEmploymentChange}
                  placeholder="e.g. 15 Days or less Notice Period"
                />
              </div>
              <div className="formGroup">
                <label>Description:</label>
                <textarea
                  name="description"
                  value={newEmployment.description}
                  onChange={handleEmploymentChange}
                  rows="4"
                />
              </div>
              <div className="formGroup">
                <label>Top Skills (comma separated):</label>
                <input
                  type="text"
                  name="topSkills"
                  value={newEmployment.topSkills.join(", ")}
                  onChange={(e) => {
                    const skills = e.target.value
                      .split(",")
                      .map((skill) => skill.trim());
                    setNewEmployment((prev) => ({
                      ...prev,
                      topSkills: skills,
                    }));
                  }}
                  placeholder="e.g. React.js, Nextjs"
                />
              </div>
              <div className="modalButtons">
                <button className="saveButton" onClick={handleAddEmployment}>
                  Save
                </button>
                <button
                  className="cancelButton"
                  onClick={() => setShowEmploymentForm(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Education Form Modal */}
        {showEducationForm && (
          <div className="modalOverlay">
            <div className="modal">
              <h2>{newEducation.id ? "Edit Education" : "Add Education"}</h2>
              <div className="formGroup">
                <label>Degree:</label>
                <input
                  type="text"
                  name="degree"
                  value={newEducation.degree}
                  onChange={handleEducationChange}
                  placeholder="e.g. Bachelor of Technology"
                />
              </div>
              <div className="formGroup">
                <label>University/College:</label>
                <input
                  type="text"
                  name="university"
                  value={newEducation.university}
                  onChange={handleEducationChange}
                  placeholder="e.g. AKTU University"
                />
              </div>
              <div className="formGroup">
                <label>Year:</label>
                <input
                  type="text"
                  name="year"
                  value={newEducation.year}
                  onChange={handleEducationChange}
                  placeholder="e.g. 2020 - 2024"
                />
              </div>
              <div className="formGroup">
                <label>Percentage/GPA:</label>
                <input
                  type="text"
                  name="percentage"
                  value={newEducation.percentage}
                  onChange={handleEducationChange}
                  placeholder="e.g. 70% or 3.5 GPA"
                />
              </div>
              <div className="modalButtons">
                <button className="saveButton" onClick={handleAddEducation}>
                  Save
                </button>
                <button
                  className="cancelButton"
                  onClick={() => setShowEducationForm(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* IT Skill Form Modal */}
        {showItSkillForm && (
          <div className="modalOverlay">
            <div className="modal">
              <h2>{newItSkill.id ? "Edit IT Skill" : "Add IT Skill"}</h2>
              <div className="formGroup">
                <label>Skill:</label>
                <input
                  type="text"
                  name="skill"
                  value={newItSkill.skill}
                  onChange={handleItSkillChange}
                  placeholder="e.g. Web Development"
                />
              </div>
              <div className="formGroup">
                <label>Experience:</label>
                <input
                  type="text"
                  name="experience"
                  value={newItSkill.experience}
                  onChange={handleItSkillChange}
                  placeholder="e.g. 1 Year"
                />
              </div>
              <div className="formGroup">
                <label>Last Used:</label>
                <input
                  type="text"
                  name="lastUsed"
                  value={newItSkill.lastUsed}
                  onChange={handleItSkillChange}
                  placeholder="e.g. 2024"
                />
              </div>
              <div className="modalButtons">
                <button className="saveButton" onClick={handleAddItSkill}>
                  Save
                </button>
                <button
                  className="cancelButton"
                  onClick={() => setShowItSkillForm(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Project Form Modal */}
        {showProjectForm && (
          <div className="modalOverlay">
            <div className="modal">
              <h2>{newProject.id ? "Edit Project" : "Add Project"}</h2>
              <div className="formGroup">
                <label>Title:</label>
                <input
                  type="text"
                  name="title"
                  value={newProject.title}
                  onChange={handleProjectChange}
                  placeholder="e.g. E-commerce Website"
                />
              </div>
              <div className="formGroup">
                <label>Description:</label>
                <textarea
                  name="description"
                  value={newProject.description}
                  onChange={handleProjectChange}
                  rows="4"
                  placeholder="Brief description of the project"
                />
              </div>
              <div className="formGroup">
                <label>Duration:</label>
                <input
                  type="text"
                  name="duration"
                  value={newProject.duration}
                  onChange={handleProjectChange}
                  placeholder="e.g. 3 Months"
                />
              </div>
              <div className="formGroup">
                <label>Skills Used (comma separated):</label>
                <input
                  type="text"
                  name="skills"
                  value={newProject.skills.join(", ")}
                  onChange={(e) => {
                    const skills = e.target.value
                      .split(",")
                      .map((skill) => skill.trim());
                    setNewProject((prev) => ({
                      ...prev,
                      skills: skills,
                    }));
                  }}
                  placeholder="e.g. React, Node.js, MongoDB"
                />
              </div>
              <div className="modalButtons">
                <button className="saveButton" onClick={handleAddProject}>
                  Save
                </button>
                <button
                  className="cancelButton"
                  onClick={() => setShowProjectForm(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Accomplishment Form Modal */}
        {showAccomplishmentForm && (
          <div className="modalOverlay">
            <div className="modal">
              <h2>{newAccomplishment.id ? "Edit Accomplishment" : "Add Accomplishment"}</h2>
              <div className="formGroup">
                <label>Title:</label>
                <input
                  type="text"
                  name="title"
                  value={newAccomplishment.title}
                  onChange={handleAccomplishmentChange}
                  placeholder="e.g. Hackathon Winner"
                />
              </div>
              <div className="formGroup">
                <label>Description:</label>
                <textarea
                  name="description"
                  value={newAccomplishment.description}
                  onChange={handleAccomplishmentChange}
                  rows="4"
                  placeholder="Details about the accomplishment"
                />
              </div>
              <div className="formGroup">
                <label>Year:</label>
                <input
                  type="text"
                  name="year"
                  value={newAccomplishment.year}
                  onChange={handleAccomplishmentChange}
                  placeholder="e.g. 2023"
                />
              </div>
              <div className="modalButtons">
                <button className="saveButton" onClick={handleAddAccomplishment}>
                  Save
                </button>
                <button
                  className="cancelButton"
                  onClick={() => setShowAccomplishmentForm(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Page;