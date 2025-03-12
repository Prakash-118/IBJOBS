'use client';
import React from 'react'
import Image from 'next/image';
import '../Webdevelopment/page.css';
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStickyNote, faLocationPinLock, faPowerOff, faRepublican, faGrinTongueSquint, faBlog, faPrescription } from '@fortawesome/free-solid-svg-icons';
import { faGoogle, faWirsindhandwerk } from '@fortawesome/free-brands-svg-icons';


const Page = () => {
    const [animate, setAnimate] = useState(false);
      const [hover, setHover] = useState(false);


      useEffect(() => {
          setAnimate(true);
          }, []);

           const services = [
              { title: "Global & National SEO", icon: faBlog },
              { title: "Ecommerce SEO", icon: faWirsindhandwerk },
              { title: "Enterprise SEO", icon: faPrescription },
              { title: "Content Marketing", icon: faStickyNote },
              { title: "Local SEO", icon: faLocationPinLock },
              { title: "Off-Page SEO", icon: faPowerOff },
              { title: "Online Reputation Management", icon: faRepublican },
              { title: "Google Recovery Services", icon: faGoogle },
              { title: "Guest Posting", icon: faGrinTongueSquint }
            ];
  return (
    <>
    
    <div className="containerk" style={{marginTop:"110px"}}>
    <div className={`textSectionk ${animate ? "animateTextk" : ""}`}>
            <p className="titleb">IT SERVICES</p>
            <h1 className="headingb">We Provide Best Content Marketing</h1>
            <h3>More Traffic! More Leads! More Everything!</h3>
            <p className="contentb">We are into content marketing services too. We have certified team members who are quick and experts in languages who provide best content according to businesses and products.</p>

            <h3>Content Marketing: A Powerful Strategy for Business Growth</h3>
            <p className="contentb">Content marketing is a strategic approach focused on creating, publishing, and distributing valuable, relevant, and consistent content to attract and retain a clearly defined audience. Unlike traditional advertising, content marketing aims to educate, entertain, or inspire rather than directly promote a product or service. One of the key benefits of content marketing is its ability to establish trust and credibility. By sharing insightful articles, blogs, videos, and infographics, businesses position themselves as industry leaders. This approach not only engages potential customers but also nurtures long-term relationships.</p>
           
          </div>
          
          <div 
            className={`imageSectionb ${animate ? "animateImageb" : ""}`} 
            onMouseEnter={() => setHover(true)} 
            onMouseLeave={() => setHover(false)}
          >
            <Image src={hover ? "/contentm.jpeg" : "/contents.jpg"} 
            alt="IT Services" 
            className="imageb" 
            layout="responsive" 
            width={500} 
            height={300} />
          </div>
        </div> 
    
    {/* Card Section */}
        <div className="servicesContainer">
            {services.map((service, index) => (
              <div key={index} className="serviceCard">
                <FontAwesomeIcon icon={service.icon} className="serviceIcon" />
                <p className="serviceTitle">{service.title}</p>
              </div>
            ))}
          </div>



          <div className="containerr">
      <div className="leftSectionr">
        <p className="subHeadingr">TECHNOLOGY INDEX</p>
        <h1 className="headingr" style={{color:"white"}}>
         
        Our content marketing services revolve around six simple, focused steps.
        </h1>
        <div className="cardsContainerr">
          <div className="cardr">RESEARCH</div>
          <div className="arrowr">➜</div>
          <div className="cardr">IDEATION</div>
          <div className="arrowr">➜</div>
          <div className="cardr">CREATION</div>
          <div className="arrowr">➜</div>
          <div className="cardr">EDITING</div>
          <div className="arrowr">➜</div>
          <div className="cardr">SHARING</div>
          <div className="arrowr">➜</div>
          <div className="cardr">MEASURING</div>
        </div>
      </div>
      </div>
    
    </>
  )
}

export default Page
