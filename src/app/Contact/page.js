'use client';
import React from 'react'
import "@fortawesome/fontawesome-free/css/all.min.css";
import '../Contact/page.css';
import { useState } from 'react';

const Page = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState({});

    const validate = () => {
        let tempErrors = {};
        if (!formData.name) tempErrors.name = "Name is required";
        if (!formData.email) tempErrors.email = "Email is required";
        if (!formData.phone) tempErrors.phone = "Phone number is required";
        if (!formData.service) tempErrors.service = "Service selection is required";
        if (!formData.message) tempErrors.message = "Message is required";
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            setSubmitted(true);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };


  return (
    <div className="containers">
            {/* Left Side */}
            <div className="leftSections">
                <p className="topTextsk"> CONTACT DETAILS</p>
                <h1>Contact us</h1>
                <p>Give us a call or drop by anytime, we endeavour to answer all enquiries within 24 hours on business days. We will be happy to answer your questions.</p>
                <div className="cardContainer">
                    <div className="cards"><i className="fas fa-phone"></i> <p><strong>Our Phone:</strong><br />+91-2212-221-221</p></div>
                    <div className="cards"><i className="fas fa-envelope"></i> <p><strong>Our Mailbox:</strong><br />ibjobs@gmail.com</p></div>
                    <div className="cards"><i className="fas fa-map-marker-alt"></i> <p><strong>Our Address:</strong><br />Sector-63A C-47 Noida Uttar Pradesh</p></div>
                </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="rightSections">
                <div className="formBoxs">
                    {submitted ? (
                        <div className="submitteds">Form Submitted!</div>
                    ) : (
                        <form onSubmit={handleSubmit} className="form">
                            <label>Full Name <span>*</span></label>
                            <input type="text" name="name" value={formData.name} onChange={handleChange} />
                            {errors.name && <span className="errors">{errors.name}</span>}

                            <div className="rows">
                                <div>
                                    <label>Email <span>*</span></label>
                                    <input type="email" name="email" value={formData.email} onChange={handleChange} />
                                    {errors.email && <span className="errors">{errors.email}</span>}
                                </div>
                                <div>
                                    <label>Mobile Number <span>*</span></label>
                                    <input type="number" name="phone" value={formData.phone} onChange={handleChange} />
                                    {errors.phone && <span className="errors">{errors.phone}</span>}
                                </div>
                            </div>

                            <div>
                            <label>Services <span>*</span></label>
                            <select name="service" value="service" onChange={handleChange}>
                                <option value="">Select Service</option>
                                <option value="Permanent Staffingt">Permanent Staffing</option>
                                <option value="Contract Staffing">Contract Staffing</option>
                                <option value="Executive Search">Executive Search</option>
                                <option value="HR Services">HR Services</option>
                                <option value="Web Design & Develpment">Web Design & Develpment</option>
                                <option value="eCommerce Development">eCommerce Development</option>
                                <option value="Web Analytics">Web Analytics</option>
                                <option value="Social Media Marketing">Social Media Marketing</option>
                                <option value="Content Marketing">Social Media Marketing</option>
                                <option value="Web Graphic Design">Web Graphic Design</option>
                            </select>
                            {errors.service && <span className="errors">{errors.service}</span>}
                            </div>
                             

                            <label>Message <span>*</span></label>
                            <textarea name="message" value={formData.message} onChange={handleChange}></textarea>
                            {errors.message && <span className="errors">{errors.message}</span>}

                           <div> <button type="submit" className='buttons'>Submit</button></div>
                        </form>
                    )}
                </div>  
            </div>
        </div>
  )
}

export default Page
