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
          <h1>Contract Staffing</h1>
          <p>
            IB Jobs has much to offer in the way of contract to hire services. Clients can make avail of our contract to hire staffing solution without any hesistation, as we deliver the most efficient staff. we have no qualms about time and effort spent on selecting the best candidates for IT contract to hire services. We make a conscious effort to ensure that our contract to hire facilities do meet upto our clients expectations.
          </p>
          <p>
            IB Jobs IT contract to hire arrangement and contract hire approach make us unique and approachable to our clients. We give perference to customer satisfaction while deciding upon contract to hire solutions. Our contract to hire services will make sure that our clients go ahead in their effortd to hire services will make sure that our clients go ahead in their effort to hire sevices will make theri business manifold.
          </p>
          <p>
            IB Jobs has carved a niche for itself in the IT sector by providing contract to hire staffing solutions and contract to hire services that prove to be of high order technically and productvely. The fact remains that we know our business and work towards our clients interest. We do not compromise on quality and efficiency and we focus on maintaining high standards in providing contract to hire services.
          </p>
        </div>
        <div className={`imageSection ${isVisible ? "show" : ""}`}>
          <Image
            src="/contract.webp"
            alt="Permanent Staffing"
            width={500}
            height={300}
            className="animatedImages"
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
