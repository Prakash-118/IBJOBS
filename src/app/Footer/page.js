import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faLinkedinIn, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import '../Footer/page.css';



const page = () => {
  return (
    <>
    <footer className="footer">
      <div className="contactSection">
        <div className="card">
          <FontAwesomeIcon icon={faGlobe} className="icon" />
          <p>C-47 Sector-63 A, Noida</p>
        </div>
        <div className="divider"></div>
        <div className="card">
          <FontAwesomeIcon icon={faEnvelope} className="icon" />
          <p>
            <a href="mailto:ibjobs@gmail.com" className="am">ibjobs@gmail.com</a> <br />
            <a href="mailto:ibjobs@gmail.com" className="am">ibjobs@gmail.com</a>
          </p>
        </div>
        <div className="divider"></div>
        <div className="card">
          <FontAwesomeIcon icon={faPhone} className="icon" />
          <p>+91-0221-221-221</p>
        </div>
      </div>

      <div className="socialMedia">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faXTwitter} />
        </a>
      </div>

      <p className="copyright">Copyright © 2025 IB Jobs. All Rights Reserved.</p>
    </footer>
    
    </>
  )
}

export default page
