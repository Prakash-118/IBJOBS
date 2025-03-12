'use client';
import React from 'react'
import Image from 'next/image';
import '../Webdevelopment/page.css';
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faShoppingCart, faPalette, faLaptopCode, faGolfBall, faPencilRuler, faTools, faExchangeAlt, faStore, faGlobe } from '@fortawesome/free-solid-svg-icons';


const Page = () => {
    const [animate, setAnimate] = useState(false);
  const [hover, setHover] = useState(false);
  const [text, setText] = useState("");
  const fullText = "We Organize Our Production Process".split(" ");

  useEffect(() => {
    setAnimate(true);
    let index = 0;
    const interval = setInterval(() => {
      setText((prev) => prev + " " + fullText[index]);
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, 300);
    return () => clearInterval(interval);
  }, [fullText]);



  const services = [
    { title: "Php Web Application", icon: faCode },
    { title: "eCommerce Development", icon: faShoppingCart },
    { title: "Website Design", icon: faPalette },
    { title: "Website Development", icon: faLaptopCode },
    { title: "Wordpress/Woocommerce", icon: faGolfBall },
    { title: "PWA Development", icon: faPencilRuler },
    { title: "Website Maintenance", icon: faTools },
    { title: "Magento Migration", icon: faExchangeAlt },
    { title: "Shopify", icon: faStore }
  ];

  return (
    <>
<div className="containerk">
<div className={`textSectionk ${animate ? "animateTextk" : ""}`}>
        <p className="titleb">IT SERVICES</p>
        <h1 className="headingb">We Provide Best Website Design Development</h1>
        <p className="contentb">Web development & designing is the work if developing a website for the internet or an intranet. We development can range from simple graphical pages to statistical representation of business progress along with multiple metrics</p>
      </div>
      <div 
        className={`imageSectionb ${animate ? "animateImageb" : ""}`} 
        onMouseEnter={() => setHover(true)} 
        onMouseLeave={() => setHover(false)}
      >
        <Image src={hover ? "/webd.jpg" : "/webdesign.jpg"} alt="IT Services" className="imageb" layout="responsive" width={500} height={300} />
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
    
        
{/* new card */}
      <div className="containerr">
      <div className="leftSectionr">
        <p className="subHeadingr">TECHNOLOGY INDEX</p>
        <h1 className="headingr">
          {fullText.map((word, index) => (
            <span key={index} className="textAnimationr" style={{ animationDelay: `${index * 0.3}s` }}>
              {word}
            </span>
          ))}
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
