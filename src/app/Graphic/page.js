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
            <h1 className="headingb">We Provides Best Web Graphics Design</h1>
           
            <p className="contentb">Designing of websites with graphics is an art which our team strategically thinks and understand what worlds want and apply tools and techniques to produce best websites with quality.
            </p>
            <p className="contentb">Designing of websites with graphics is an art which our team strategically think and understand what worlds want and supply tools and techniques to produce best websites with quality</p>
          </div>
          <div 
            className={`imageSectionb ${animate ? "animateImageb" : ""}`} 
            onMouseEnter={() => setHover(true)} 
            onMouseLeave={() => setHover(false)}
          >
            <Image src={hover ? "/graphici.jpeg" : "/graphic.jpg"} alt="IT Services" className="imageb" layout="responsive" width={500} height={300} />
          </div>
        </div> 
    
 
        


{/* Technology Index, -->Analysis-->Design-->Develop-->Testing<-- */}
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
