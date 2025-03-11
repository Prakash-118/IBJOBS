"use client";
import { useEffect, useState, useRef } from "react";
import React from "react";
import '../Contract/page.css';
import Image from "next/image";
import Link from "next/link";
const Page = () => {
    const [isVisible, setIsVisible] = useState(false);
          const [isBannerVisible, setIsBannerVisible] = useState(false);
          const sectionRef = useRef(null);
          const bannerRef = useRef(null);
        
          useEffect(() => {
            // Observer for Text + Image Section
            const observer = new IntersectionObserver(
              ([entry]) => {
                if (entry.isIntersecting) {
                  setIsVisible(true);
                }
              },
              { threshold: 0.3 }
            );
        
            if (sectionRef.current) {
              observer.observe(sectionRef.current);
            }
        
            // Observer for Helps Banner
            const bannerObserver = new IntersectionObserver(
              ([entry]) => {
                if (entry.isIntersecting) {
                  setIsBannerVisible(true);
                }
              },
              { threshold: 0.3 }
            );
        
            if (bannerRef.current) {
              bannerObserver.observe(bannerRef.current);
            }
        
            return () => {
              observer.disconnect();
              bannerObserver.disconnect();
            };
          }, []);



  return (
    <>
    <div className="container" ref={sectionRef}>
        <div className={`textSection ${isVisible ? "show" : ""}`}>
          <h3>OUR SERVICES</h3>
          <h1>Executive Search</h1>
          <p>
            IB Jobs Premier is our specialized Executive Search service. We have deceloped a personalised and customized process that helps us find the right candidate, rather than the first available candidate for our clients. It involves a rigrous and consultative process, including but not limited to, identifying the right industry and company grid, to locate relevant but passive job seeking professionals.
          </p>
          <p>
            Exhasustive mapping and engagement exercise are carried out to bring candidate to the table for discssions. Confidentiality is strictly adhered through the entire lificycle of the search assignment, from screening to selecton.
          </p>
          <p>
            IB Jobs team has partnered with MNCs and technology start-ups to build their leadership teams. we work across industries such as technology, outsourcing, pharma, telecon and functions such as sales and marketing, finance, and human resources among others.
          </p>
        </div>
        <div className={`imageSection ${isVisible ? "show" : ""}`}>
          <Image
            src="/excutive.avif"
            alt="Permanent Staffing"
            width={500}
            height={300}
            className="animatedImagea"
          />
        </div>
      </div>

      {/* Helps Banner */}
      <div className="helpsbanners" ref={bannerRef}>
        <div className={`helpbannero ${isBannerVisible ? "show" : ""}`}>
          <h4>Drop us a line! We are here to answer your questions 24/7</h4>
          <h1>NEED A CONSULTATION?</h1>
        </div>
        <Link href="/Contact">
          <button className="helpbannerbutton">CONTACT US</button>
        </Link>
      </div>
    
    </>
  )
}

export default Page
