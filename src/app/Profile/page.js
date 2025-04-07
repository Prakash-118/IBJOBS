'use client'
import { useState, useRef } from 'react';
import React from 'react'
import '../Profile/page.css';

const Page = () => {

    const [profileData, setProfileData] = useState({
        name: 'Prakash Kushwaha',
        position: 'Front End Developer',
        company: 'at Innoblooms InfoService Pvt. Ltd.',
        location: 'Noida, INDIA',
        experience: '0 Year 6 Months',
        salary: '₹1,80,000',
        email: 'chandraprakashcse089@gmail.com',
        noticePeriod: '15 Days or less notice period',
        profilePhoto: '/default-profile.jpg' 
      });
    
      // Resume headline state
      const [resumeHeadline, setResumeHeadline] = useState(
        'Having Computer Science background and being a student with a focus on Web Developer, seeking a Junior Software Engineer role contributing to the growth and success of the organization.'
      );
    
      // Key skills state
      const [skills, setSkills] = useState(['html', 'css', 'javascript', 'react.js', 'Nextjs']);
      const [newSkill, setNewSkill] = useState('');
    
      // Employment state
      const [employment, setEmployment] = useState([
        {
          id: 1,
          position: 'Front End Developer',
          company: 'Innoblooms InfoService Pvt. Ltd.',
          type: 'Full-time',
          duration: 'Feb 2025 to Present (3 months)',
          noticePeriod: '15 Days or less Notice Period',
          description: 'I am a passionate Frontend Developer with hands-on experience in creating responsive, user-friendly web interfaces using HTML, CSS, JavaScript, and modern frameworks like React.js. I specialize in turning UI/UX designs into clean, interactive, and efficient code. My goal is to deliver... Read More',
          topSkills: ['React.js', 'Nextjs']
        }
      ]);
    
      // Form states
      const [showProfileEdit, setShowProfileEdit] = useState(false);
      const [showEmploymentForm, setShowEmploymentForm] = useState(false);
      const [newEmployment, setNewEmployment] = useState({
        position: '',
        company: '',
        type: 'Full-time',
        duration: '',
        noticePeriod: '',
        description: '',
        topSkills: []
      });
    
      // File upload ref
      const fileInputRef = useRef(null);
    
      // Handle profile edit
      const handleProfileEdit = (e) => {
        const { name, value } = e.target;
        setProfileData(prev => ({ ...prev, [name]: value }));
      };
    
      // Handle profile photo change
      const handlePhotoChange = (e) => {
        const file = e.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = (event) => {
            setProfileData(prev => ({ ...prev, profilePhoto: event.target.result }));
          };
          reader.readAsDataURL(file);
        }
      };
    
      // Handle skill addition
      const handleAddSkill = () => {
        if (newSkill.trim() && !skills.includes(newSkill.trim())) {
          setSkills([...skills, newSkill.trim()]);
          setNewSkill('');
        }
      };
    
      // Handle skill removal
      const handleRemoveSkill = (skillToRemove) => {
        setSkills(skills.filter(skill => skill !== skillToRemove));
      };
    
      // Handle employment form change
      const handleEmploymentChange = (e) => {
        const { name, value } = e.target;
        setNewEmployment(prev => ({ ...prev, [name]: value }));
      };
    
      // Add new employment
      const handleAddEmployment = () => {
        if (newEmployment.position && newEmployment.company) {
          setEmployment([...employment, { ...newEmployment, id: Date.now() }]);
          setNewEmployment({
            position: '',
            company: '',
            type: 'Full-time',
            duration: '',
            noticePeriod: '',
            description: '',
            topSkills: []
          });
          setShowEmploymentForm(false);
        }
      };
    
      // Scroll to section
      const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
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
             style={{ display: 'none' }}
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
             <li onClick={() => scrollToSection('resume')}>Resume Update</li>
             <li onClick={() => scrollToSection('resumeHeadline')}>Resume headline</li>
             <li onClick={() => scrollToSection('keySkills')}>Key skills</li>
             <li onClick={() => scrollToSection('employment')}>Employment</li>
             <li onClick={() => scrollToSection('education')}>Education</li>
             <li onClick={() => scrollToSection('itSkills')}>IT skills</li>
             <li onClick={() => scrollToSection('projects')}>Projects</li>
             <li onClick={() => scrollToSection('profileSummary')}>Profile summary</li>
             <li onClick={() => scrollToSection('accomplishments')}>Accomplishments</li>
             <li onClick={() => scrollToSection('careerProfile')}>Career profile</li>
            <li onClick={() => scrollToSection('personalDetails')}>Personal details</li>
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
                 style={{ display: 'none' }}
                 accept=".doc,.docx,.rtf,.pdf"
               />
               <p>Supported Formats: doc, docx, rtf, pdf, upto 2 MB</p>
             </div>
           </div>

         {/* Resume Headline Section */}
           <div id="resumeHeadline" className="section">
             <div className="sectionHeader">
               <h3>Resume headline</h3>
               <button 
                 className="editButton"
                 onClick={() => {
                   const newHeadline = prompt('Edit your resume headline:', resumeHeadline);
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
                 onClick={() => setShowEmploymentForm(true)}
               >
                 Add Employment
               </button>
             </div>
           
             {employment.map((job) => (
               <div key={job.id} className="employmentItem">
                 <h4>{job.position}</h4>
                 <p>{job.company}</p>
                 <p>{job.type} | {job.duration}</p>
                 <p>{job.noticePeriod}</p>
                 <p>{job.description}</p>
                 {job.topSkills.length > 0 && (
                   <div className="topSkills">
                     <span>Top skills: </span>
                     {job.topSkills.join(', ')}
                   </div>
                 )}
               </div>
             ))}
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
    <h2>Add Employment</h2>
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
        value={newEmployment.topSkills.join(', ')}
        onChange={(e) => {
          const skills = e.target.value.split(',').map(skill => skill.trim());
          setNewEmployment(prev => ({ ...prev, topSkills: skills }));
        }}
        placeholder="e.g. React.js, Nextjs"
      />
    </div>
    <div className="modalButtons">
      <button 
        className="saveButton"
        onClick={handleAddEmployment}
      >
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
     </div>
    
    </>
  )
}

export default Page
