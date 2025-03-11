"use client";
import { useEffect, useState, useRef } from "react";
import React from "react";
import "../Services/page.css";
import Image from "next/image";
import Link from "next/link";

const Permanent = () => {
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
          <h1>Permanent Staffing</h1>
          <p>
            IB Jobs provides fast-track placement of qualified and skilled
            permanent staff. Permanent staffing refers to hiring an employee
            directly on a long-term basis.
          </p>
          <p>
            Permanent staffing requires a higher degree of thorough search and
            screening. It plays a crucial role in a companys human resource
            strategy.
          </p>
          <ul>
            <li>Payroll and other employee benefits</li>
            <li>Job satisfaction</li>
            <li>Secure job reduces stress</li>
            <li>Job security</li>
          </ul>
        </div>
        <div className={`imageSection ${isVisible ? "show" : ""}`}>
          <Image
            src="/staffing.jpg"
            alt="Permanent Staffing"
            width={500}
            height={300}
            className="animatedImage"
          />
        </div>
      </div>

      {/* Helps Banner */}
      <div className="helpsbanner" ref={bannerRef}>
        <div className={`helpbanner ${isBannerVisible ? "show" : ""}`}>
          <h4>Drop us a line! We are here to answer your questions 24/7</h4>
          <h1>NEED A CONSULTATION?</h1>
        </div>
        <Link href="/Contact">
          <button className="helpbannerbutton">CONTACT US</button>
        </Link>
      </div>
    </>
  );
};

export default Permanent;
