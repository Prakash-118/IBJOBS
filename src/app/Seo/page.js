'use client';
import React from 'react'
import Image from 'next/image';
import '../Webdevelopment/page.css';
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDollar, faStickyNote, faLocationPinLock, faPowerOff, faRepublican, faGrinTongueSquint } from '@fortawesome/free-solid-svg-icons';
import { faCentercode, faGlide, faGoogle } from '@fortawesome/free-brands-svg-icons';


const Page = () => {
    const [animate, setAnimate] = useState(false);
      const [hover, setHover] = useState(false);


      useEffect(() => {
          setAnimate(true);
          }, []);





           const services = [
              { title: "Global & National SEO", icon: faGlide },
              { title: "Ecommerce SEO", icon: faCommentDollar },
              { title: "Enterprise SEO", icon: faCentercode },
              { title: "Content Marketing", icon: faStickyNote },
              { title: "Local SEO", icon: faLocationPinLock },
              { title: "Off-Page SEO", icon: faPowerOff },
              { title: "Online Reputation Management", icon: faRepublican },
              { title: "Google Recovery Services", icon: faGoogle },
              { title: "Guest Posting", icon: faGrinTongueSquint }
            ];
  return (
    <>
    
    <div className="containerk">
    <div className={`textSectionk ${animate ? "animateTextk" : ""}`}>
            <p className="titleb">IT SERVICES</p>
            <h1 className="headingb">Affordable SEO Services
            in India</h1>
            <h3>More Traffic! More Leads! More Everything!</h3>
            <p className="contentb">Our SEO service will deliver more growth. Rankings for more keywords! More traffic, leads and sales! More growth than your previous SEO agency! More growth than you ever imagined SEO could deliver. All this with more transparency and more love from our account managers!</p>
          </div>
          <div 
            className={`imageSectionb ${animate ? "animateImageb" : ""}`} 
            onMouseEnter={() => setHover(true)} 
            onMouseLeave={() => setHover(false)}
          >
            <Image src={hover ? "/seo1.jpg" : "/seo.avif"} alt="IT Services" className="imageb" layout="responsive" width={500} height={300} />
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


{/*  */}
           <div className="containerr">
                <div className="leftSectionr">
                    <p className="subHeadingr">TECHNOLOGY INDEX</p>
                    <h1 className="headingr">We Organize Our Production Process 
                    </h1>
                    <div className="cardsContainerr">
                        <div className="cardr">ANALYSIS</div>
                        <div className="arrowr">➜</div>
                        <div className="cardr">DESIGN</div>
                        <div className="arrowr">➜</div>
                        <div className="cardr">DEVELOP</div>
                        <div className="arrowr">➜</div>
                        <div className="cardr">TESTING</div>
                    </div>
                </div>
           </div>
    
    </>
  )
}

export default Page
