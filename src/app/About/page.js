"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import React from "react";
import "../About/page.css";

const Page = () => {
  const [hover, setHover] = useState(false);
  const [animate, setAnimate] = useState(false);
  const visionRef = useRef(null);
  const valuesRef = useRef(null);
  const [visionVisible, setVisionVisible] = useState(false);
  const [valuesVisible, setValuesVisible] = useState(false);

  // Enable animation after page loads
  useEffect(() => {
    setAnimate(true);
  }, []);

  // Scroll-based animations for vision & values sections
  useEffect(() => {
    const observerOptions = { threshold: 0.3 }; // Trigger when 30% is visible

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.target === visionRef.current && entry.isIntersecting) {
          setVisionVisible(true);
        }
        if (entry.target === valuesRef.current && entry.isIntersecting) {
          setValuesVisible(true);
        }
      });
    }, observerOptions);

    if (visionRef.current) observer.observe(visionRef.current);
    if (valuesRef.current) observer.observe(valuesRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* About Section */}
      <div className={`aboutContainer ${animate ? "animate" : ""}`}>
        <div className="textContainer">
          <h3>WHAT WE OFFER</h3>
          <h1>About Us</h1>
          <p>
            Established in 2016, IB Jobs was created with a vision to fill the
            gaping disparity between the human resource requirement of the
            corporate world and the existing skilled manpower across various
            verticals.
          </p>
          <p>
            We are Trusted Advisors to both our clients and our candidates...
          </p>
        </div>

        {/* Right Side - Image */}
        <div className={`imageContainer ${animate ? "animate" : ""}`}>
          <Image
            src={hover ? "/aboutmeet.avif" : "/aboutteam.jpg"}
            className="changeimg"
            alt="About Us"
            width={500}
            height={500}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            layout="intrinsic"
          />
        </div>
      </div>

      {/* About Quote Section */}
      <div className={`aboutContainer1 ${animate ? "animate" : ""}`}>
        <div className="textContainer1">
          <h2>“Great Vision without Great People is irrelevant.”</h2>
          <p>Our firm is professionally managed by the finest talent in the executive search and recruitment business who are highly client centric. Our clients and candidates have appreciated us for leaving no stone unturned in our effort to give them the best service possible. Our unwavering focus and expertise in Talent Acquisition, Domain Knowledge and Market Research within the talent landscape in which we operate ensures that our clients consistently receive the best recruitment service.</p>
          <p>Apart from the conventional approaches, it integrates web2.0 technology as well as all social platforms to create our own pool of knowledge and talent resources. The idea is to go beyond the structured processes to understand requirements and offer solutions which support collective and organic growth.</p>
        </div>
      </div>

      {/* Vision & Mission Section */}
      <div ref={visionRef} className={`visionContainer ${visionVisible ? "animate" : ""}`}>
        <div className="visionText">
          <h2>OUR VISION</h2>
          <h1>Company Vision</h1>
          <ul>
            <li>To be the best and most efficient HR Consulting firm.</li>
            <li>To handle diverse projects for clients as an extended arm.</li>
            <li>To build better careers for candidates and provide top talent.</li>
          </ul>
        </div>
        <div className="missionText">
          <h2>OUR MISSION</h2>
          <h1>Company Mission</h1>
          <p>
            To change the perception of recruitment by devoting ourselves to the
            happiness of our clients...
          </p>
        </div>
      </div>

<h1>
  <a href="/Profile" className="e">HERE</a>
</h1>
      {/* Values Section */}
      <div ref={valuesRef} className={`valuesContainer ${valuesVisible ? "animate" : ""}`}>
        <div className="valuesText">
          <h2>Our Values & Core Virtues</h2>
          <ul>
            <li>Quality professional recruiting</li>
            <li>Industry expertise</li>
            <li>Meaningful candidate profiles</li>
            <li>Cost-effective solutions</li>
            <li>Ethical business and recruitment practices</li>
          </ul>
          <ul>
            <li>Integrity</li>
            <li>Respect</li>
            <li>Teamwork</li>
            <li>Accountability</li>
            <li>Boldness</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Page;
