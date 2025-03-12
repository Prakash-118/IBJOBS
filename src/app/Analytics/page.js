'use client';
import React from 'react'
import Image from 'next/image';
import '../Webdevelopment/page.css';
import { useEffect, useState } from "react";



const Page = () => {
    const [animate, setAnimate] = useState(false);
      const [hover, setHover] = useState(false);


      useEffect(() => {
          setAnimate(true);
          }, []);

          
  return (
    <>
    
    <div className="containerk">
    <div className={`textSectionk ${animate ? "animateTextk" : ""}`}>
            <p className="titleb">IT SERVICES</p>
            <h1 className="headingb">We Provides Best Web Analytics</h1>
            <h3>More Traffic! More Leads! More Everything!</h3>
            <p className="contentb">Analytics means collecting data and converting it into presentation by using statistcal approach. We analytics provides a range of information and helps to business to the next stage.
                We provides best web analytics, Analytics means collecting data and converting it into presentaiton by using statistcal approach. We analytcs provides a range of information and helps to business to the next stage.
            </p>
          </div>
          <div 
            className={`imageSectionb ${animate ? "animateImageb" : ""}`} 
            onMouseEnter={() => setHover(true)} 
            onMouseLeave={() => setHover(false)}
          >
            <Image src={hover ? "/analytics1.avif" : "/analytics.avif"} alt="IT Services" className="imageb" layout="responsive" width={500} height={300} />
          </div>
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
