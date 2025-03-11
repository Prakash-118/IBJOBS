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
          <h1>HR Services</h1>
          <p>
            Our consultants with their deep assessment expertise strive to identify a pool of right candidates for our clients. Finding the right candidate for our clients will benefit them immensely, as they go on to hire, retain and harness the candidates potential. Rigour, impact and flexibility lies at the heart of our approach in building partnerships with clients.
          </p>
          <p>
            We offer the following solutions under IB Jobs:
          </p>
          <ul>
            <li>Hiring for critical mid-managment positions inluding the level reporting to functional heads</li>
            <li>
                Project managment hiring for a start-up or quick ramp up assignments
            </li>
            <li>Recruitment Process Outsourcing(RPO)</li>
          </ul>
        </div>
        <div className={`imageSection ${isVisible ? "show" : ""}`}>
          <Image
            src="/hr.webp"
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
