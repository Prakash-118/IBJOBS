'use client';
import React from 'react'
import { useState } from "react";
import '../Login/page.css';
import Image from 'next/image';

const Page = () => {
    const [isReset, setIsReset] = useState(false);


  return (
    <>
    <div className="loginbanner">
        <Image src="/login.webp" alt='image' width={1240} height={400} ></Image>
    </div>
    <div className="auth-container">
      <div className="auth-box">
        <div className="left-box">
          {!isReset ? (
            <div className="login-form">
              <h2>Login to our site</h2>
              <p>Enter the username and password to login:</p>
              <input type="text" placeholder="Username" />
              <input type="password" placeholder="Password" />
              <button className="login-btn">Login</button>
              <p className="forgot-password" onClick={() => setIsReset(true)} style={{color:"blue"}}>
                Forgot your password?
              </p>
            </div>
          ) : (
            <div className="reset-form">
              <h2>Reset Password</h2>
              <input type="text" placeholder="Username" />
              <button className="reset-btn">Reset Password</button>
              <p className="back-to-login" onClick={() => setIsReset(false)}>
                Already have an account?
              </p>
              <p>Enter the username or e-mail you used in your profile. A password reset link will be sent to you by email.</p>
            </div>
          )}
        </div>
        <div className="right-box">
          <h2>Sign Up Now</h2>
          <p>Fill the form below to get instant access:</p>
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <input type="text" placeholder="Username" />
          <input type="email" placeholder="Email" />
          <input type="number" placeholder="Mobile Number" />
          <select>
            <option>Select Sector</option>
            <option>IT</option>
            <option>Finance</option>
            <option>Healthcare</option>
            <option>Education</option>
          </select>
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />
          <button className="signup-btn">Sign Up</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Page
