'use client';
import { useState } from "react";
import '../Login/page.css';



const Page = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [isEmployer, setIsEmployer] = useState(false);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [formData, setFormData] = useState({});
  const [message, setMessage] = useState({ text: "", type: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const showMessage = (text, type) => {
    setMessage({ text, type });
    setTimeout(() => setMessage({ text: "", type: "" }), 3000); // Hide after 3 seconds
  };

  const handleSignup = () => {
    localStorage.setItem("user", JSON.stringify(formData));
    setIsSignup(false);
    showMessage("Signup Successful!", "success");
  };

  const handleLogin = () => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser?.email === formData.email && savedUser?.password === formData.password) {
      showMessage("Login Successful!", "success");
    } else {
      showMessage("Invalid Credentials", "error");
    }
    if (savedUser?.email === formData.email && savedUser?.password === formData.password){
        console.log("Login Successful")
    } else{
        console.log("Invalid Credentials")
    }
    
  };

  const handleResetPassword = () => {
    showMessage("Password Reset Successful!", "success");
    setIsForgotPassword(false);
    
  };



  return (
    <>
      <div className="containerl">
        <div className="authBoxl">
          {isForgotPassword ? (
            <div>
              <h2>Reset Password</h2>
              <p style={{ color: "gray" }}>Enter Your Email Address To Reset Password!</p>
              <input type="email" name="email" placeholder="Enter Your Email" onChange={handleChange} />
              <button onClick={handleResetPassword}>Reset Password</button>
              <p onClick={() => setIsForgotPassword(false)} className="haven">Back to Login</p>
            </div>
          ) : isSignup ? (
            <div>
              <div className="toggleButtonsl">
                <button className={isEmployer ? "" : "active"} onClick={() => setIsEmployer(false)}>Candidate</button>
                <button className={isEmployer ? "active" : ""} onClick={() => setIsEmployer(true)}>Employer</button>
              </div>
              <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} required />
              <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} required />
              <input type="text" name="username" placeholder="Username" onChange={handleChange} required />
              <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
              <input type="number" name="mobile" placeholder="Mobile Number" onChange={handleChange} required />
              {isEmployer ? (
                <>
                  <input type="text" name="organizationName" placeholder="Organization Name" onChange={handleChange} />
                  <select name="organizationSector" onChange={handleChange}>
                    <option>Choose Sector</option>
                    <option>IT</option>
                    <option>Finance</option>
                    <option>Healthcare</option>
                    <option>Digital & Creative</option>
                    <option>Estate Agency</option>
                  </select>
                </>
              ) : (
                <select name="gender" onChange={handleChange}>
                  <option>Choose Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                  <option>Trans</option>
                </select>
              )}
              <input type="password" name="password" placeholder="Password" onChange={handleChange} />
              <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} />
              <button onClick={handleSignup}>Sign Up</button>
              <p onClick={() => setIsSignup(false)} className="haven">Already have an account? Login</p>
            </div>
          ) : (
            <div>
              <h1>Login for posting and finding job</h1>
              <input type="email" name="email" placeholder="Enter Your Email" onChange={handleChange} />
              <input type="password" name="password" placeholder="Enter Your Password" onChange={handleChange} />
              <div className="loginActions">
                <button onClick={handleLogin}>Login</button>
                <p onClick={() => setIsSignup(true)}>Sign Up</p>
                <p onClick={() => setIsForgotPassword(true)}>Forgot Password?</p>
              </div>
            </div>
          )}
        </div>
        {message.text && <div className={`popupMessage ${message.type}`}>{message.text}</div>}
      </div>
    </>
  );
};

export default Page;
