"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useState, useEffect, useCallback } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faBriefcase, faCode, faSearch, faUserTie, faChartLine, faDatabase, faVolumeUp, faGlobe, faUser, faCopy, faUserLock, faUsersCog, } from '@fortawesome/free-solid-svg-icons';
import { FaUsers, FaSearchLocation, FaClipboardList, FaUserCheck, FaFileAlt, FaBriefcase } from "react-icons/fa";
import Link from 'next/link';



export default function Home() {
  const images = [
    {
      src: "/carousel.jpg",
      heading: "Web Designing & Development",
      description: "We design and develop websites that are user-friendly and responsive.",
    },
    {
      src: "/carousel2.jpg",
      heading: "Permanent Staffing",
      description: "IB Jobs is a leading provider of permanent staffing solutions.",
    },
    {
      src: "/carousel3.jpg",
      heading: "Executive Search",
      description: "IB Jobs is a leading provider of executive search solutions.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAboutVisible, setIsAboutVisible] = useState(false);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }, [images.length]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, handleNext]);

  // Intersection Observer for About Section Animation
  useEffect(() => {
    const aboutSection = document.querySelector(`.${styles.aboutSection}`);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsAboutVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (aboutSection) {
      observer.observe(aboutSection);
    }

    return () => {
      if (aboutSection) {
        observer.unobserve(aboutSection);
      }
    };
  }, []);


  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });



  //For Services 
  const services = [
    { name: 'Permanent Staffing', icon: faUsers, link: '/Services' },
    { name: 'Contract Staffing', icon: faBriefcase, link: '/Contract' },
    { name: 'Website Development', icon: faCode, link: '/Webdevelopment' },
    { name: 'Executive Search', icon: faSearch, link: '/Executive' },
    { name: 'HR Services', icon: faUserTie, link: '/Hr' },
    { name: 'SEO/SMO', icon: faChartLine, link: '/Seo' },
  ];

  const recruitmentSource = [
    { name: 'Internal Database', icon: faDatabase, link: '/services/permanent-staffing' },
    { name: 'Portals', icon: faUsersCog, link: '/services/contract-staffing' },
    { name: 'References', icon: faVolumeUp, link: '/services/website-development' },
    { name: 'Social Media', icon: faGlobe, link: '/services/executive-search' },
    { name: 'Voluntary Applcations', icon: faUser, link: '/services/hr-services' },
    { name: 'Job Posting', icon: faCopy, link: '/services/seo-smo' },
  ];


//For Recruitment
  const recruitmentSteps = [
    { name: "Understanding The Client's Requirement", icon: <FaUsers />, link: "/understanding" },
    { name: "Sourcing Candidates", icon: <FaSearchLocation />, link: "/sourcing" },
    { name: "Shortlist Candidates", icon: <FaClipboardList />, link: "/shortlist" },
    { name: "First Interview Round", icon: <FaUserCheck />, link: "/interview" },
    { name: "Send For Final Interview", icon: <FaFileAlt />, link: "/final-interview" },
    { name: "Job Offer", icon: <FaBriefcase />, link: "/job-offer" },
  ];

  return (
    <>
      {/* Carousel Start */}
      <div className={styles.page}>
        <div className={styles.carousel}>
          <button onClick={handlePrev} className={styles.leftButton}>
            &#10094;
          </button>

          {images.map((image, index) => (
            <div
              key={index}
              className={`${styles.imageContainer} ${
                index === currentIndex ? styles.active : ""
              }`}
            >
              <Image
                src={image.src}
                alt={image.heading}
                layout="fill"
                objectFit="cover"
              />
              <div className={styles.textOverlay}>
                <h2 className={styles.heading}>{image.heading}</h2>
                <p className={styles.description}>{image.description}</p>
              </div>
            </div>
          ))}

          <button onClick={handleNext} className={styles.rightButton}>
            &#10095;
          </button>
        </div>
      </div>
      {/* Carousel End */}

      {/* About Us Start */}
      <div className={`${styles.aboutSection} ${isAboutVisible ? styles.inView : ""}`}>
        <Head>
          <title>About IB Jobs</title>
        </Head>
        <div className={styles.content}>
          <h4 className={styles.subheading}> ABOUT IB Jobs</h4>
          <h1 className={styles.heading}>
            We are Trusted Advisors to both our clients and our candidates.
          </h1>
          <p className={styles.description}>
            Established in 2016, IB Jobs was created with a vision to fill the
            gaping disparity between the human resource requirement of the
            corporate world and the existing skilled manpower across various
            verticals.
          </p>
          <a href="/About" className={styles.learnMore}>
            → LEARN MORE ABOUT US
          </a>
        </div>
        <div className={styles.images}>
          <Image
            src="/team meet.webp"
            width={200}
            height={150}
            alt="Laptop Work"
            className={styles.image1}
          />
          <Image
            src="/team meet1.avif"
            width={200}
            height={150}
            alt="Tablet Design"
            className={styles.image2}
          />
          <Image
            src="/team meet2.avif"
            width={200}
            height={150}
            alt="Handwriting"
            className={styles.image3}
          />
          <Image
            src="/team meet3.jpeg"
            width={200}
            height={150}
            alt="Team"
            className={styles.image4}
          />
        </div>
      </div>
      {/* About Us End */}

      {/* Features Start */}
      <div className={styles.tests}>
      <p>Why Choose Us</p>
      <h1>Our Salient Features</h1>
      </div>
      <div className={styles.cardsContainer} ref={ref}>
      {/* Cards Section */}
      <div className={styles.cardsRow}>
        <div className={styles.card}>
          <h3>Professional Excellence</h3>
          <p>They focus on searching the best candidates to meet the requirement of the client in their budget.</p>
          <span className={styles.emoji}>🌟</span>
        </div>
        <div className={styles.card}>
          <h3>Extensive Reach</h3>
          <p>Our rich database of suitable candidates are basis of our efficient headhunting & candidate search.</p>
          <span className={styles.emoji}>🌍</span>
        </div>
        <div className={styles.card}>
          <h3>Proactive & Ethical Approach</h3>
          <p>We follow proactive and ethical approach in finding the requirement of the client.</p>
          <span className={styles.emoji}>🤝</span>
        </div>
        <div className={styles.card}>
          <h3>Transparency</h3>
          <p>We ensure complete transparency in our operations and maintain confidentiality at all times.</p>
          <span className={styles.emoji}>🔍</span>
        </div>
      </div>

      {/* Image Row Section with Animation */}
      <div className={styles.imageRow}>
        <motion.div
          initial={{ x: "-100vw", opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
        >
          <Image src="/ss00.jpg" width={500} height={250} alt="image" />
        </motion.div>

        <motion.div
          initial={{ x: "100vw", opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
        >
          <Image src="/ss1.jpg" width={500} height={250} alt="image" />
        </motion.div>
      </div>
    </div>
{/* Features End */}
   
 {/* Service Start */}
 
 <div className={styles.servicescontainer}>
      <p className={styles.servicesubtitle}>Our Services</p>
      <h1 className={styles.servicetitle}>We Offer a Wide Variety of IT Services</h1>

      <div className={styles.servicegrid}>
        {services.map((service, index) => (
          <Link href={service.link} key={index} className={styles.servicecard}>
            <div className={styles.iconwrapper}>
              <FontAwesomeIcon icon={service.icon} className={styles.serviceicon} />
            </div>
            <h3 className={styles.servicename}>{service.name}</h3>
          </Link>
        ))}
      </div>
    </div>
    {/* Service End */}

    {/* Recruitment Start  */}
    <div className={styles.recruitmentcontainer}>
      <div className={styles.overlay}></div>
      <p className={styles.recruitmentsubtitle}> RECRUITMENT PROCESS</p>
      <h1 className={styles.recruitmenttitle}>We Deliver Solution with the Goal of Trusting Relationships</h1>
      <div className={styles.recruitmentgrid}>
        {recruitmentSteps.map((step, index) => (
          <a key={index} href={step.link} className={styles.recruitmentcard}>
            <div className={styles.iconwrapper}>{step.icon}</div>
            <p className={styles.recruitmentname}>{step.name}</p>
          </a>
        ))}
      </div>
    </div>
    {/* Recruitment End */}

    {/* Recruitment Source Start */}
    <div className={styles.servicescontainer}>
      <p className={styles.servicesubtitle}>Our Sources</p>
      <h1 className={styles.servicetitle}>Recruitment Sources
      </h1>

      <div className={styles.servicegrid}>
        {recruitmentSource.map((service, index) => (
          <Link href={service.link} key={index} className={styles.servicecard}>
            <div className={styles.iconwrapper}>
              <FontAwesomeIcon icon={service.icon} className={styles.serviceicon} />
            </div>
            <h3 className={styles.servicename}>{service.name}</h3>
          </Link>
        ))}
      </div>
    </div>
{/* Recruitment Source End */}

{/* Consultation Start */}
<div className={styles.consultationcontainer}>
  <p className={styles.consultationsubtitle}>Drop us a line! We are here to answer your questions 24/7</p>
  <h1 className={styles.consultationtitle}>NEED A CONSULTATION?</h1>
  <Link href="/Contact">
  <button className={styles.consultationbutton}>CONTACT US</button>
  </Link>
</div>
{/* Consultation End */}
  

    </>
  );
}
