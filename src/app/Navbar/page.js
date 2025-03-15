'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
import './page.css';
import Image from 'next/image';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(null);
    const pathname = usePathname();

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const toggleDropdown = (index) => {
        setDropdownOpen(dropdownOpen === index ? null : index);
    };

    const closeMenu = () => {
        setMenuOpen(false);
        setDropdownOpen(null);
    };

    useEffect(() => {
        closeMenu(); // Close menu on route change
    }, [pathname]);

    return (
        <header className="header">
            <Link href="/" className="logo"></Link>
            <Image src="/logo.png" alt="logo" className='logos' width={100} height={100} />
            <button className="menuButton" onClick={toggleMenu}>
                {menuOpen ? <FiX /> : <FiMenu />}
            </button>

            <nav className={menuOpen ? "nav navOpen" : "nav"}>
                <ul className="navList">
                    <li><Link href="/" className={`navLink ${pathname === '/' ? 'active' : ''}`}>Home</Link></li>
                    <li><Link href="/About" className={`navLink ${pathname === '/About' ? 'active' : ''}`}>About Us</Link></li>

                    {/* Our Services Dropdown */}
                    <li className={`dropdown ${dropdownOpen === 1 ? "active" : ""}`}>
                        <button onClick={() => toggleDropdown(1)} className="dropdownButton">
                            Our Services <FiChevronDown />
                        </button>
                        <ul className="dropdownMenu">
                            <li><Link href="/Services" className="dropdownItem">Permanent Staffing</Link></li>
                            <li><Link href="/Contract" className="dropdownItem">Contract Staffing</Link></li>
                            <li><Link href="/Executive" className="dropdownItem">Executive Search</Link></li>
                            <li><Link href="/Hr" className="dropdownItem">HR Services</Link></li>
                            <li><Link href="/Webdevelopment" className="dropdownItem">Web Design & Development</Link></li>
                            <li><Link href="/Graphic" className="dropdownItem">Web Graphic Design</Link></li>
                            <li><Link href="/Seo" className="dropdownItem">SEO Service</Link></li>
                            <li><Link href="/Content" className="dropdownItem">Content Marketing</Link></li>
                            <li><Link href="/Analytics" className="dropdownItem">Web Analytics</Link></li>
                        </ul>
                    </li>

                    {/* Job Seeker Dropdown */}
                    <li className={`dropdown ${dropdownOpen === 2 ? "active" : ""}`}>
                        <button onClick={() => toggleDropdown(2)} className="dropdownButton">
                            Job Seeker <FiChevronDown />
                        </button>
                        <ul className="dropdownMenu">
                            <li><Link href="/Jobspost" className="dropdownItem">Jobs</Link></li>
                            <li><Link href="/work-awards" className="dropdownItem">Resume</Link></li>
                        </ul>
                    </li>

                    {/* Employment Dropdown */}
                    <li className={`dropdown ${dropdownOpen === 3 ? "active" : ""}`}>
                        <button onClick={() => toggleDropdown(3)} className="dropdownButton">
                            Employment <FiChevronDown />
                        </button>
                        <ul className="dropdownMenu">
                            <li><Link href='/jobspost' className='dropdownItem'>Jobs Post</Link></li>
                            <li><Link href='/reg' className='dropdownItem'>Register/Login</Link></li>
                        </ul>
                    </li>

                    <li><Link href="/Contact" className={`navLink ${pathname === '/Contact' ? 'active' : ''}`}>Contact Us</Link></li>
                    <li><Link href="/login" className={`navLink ${pathname === '/login' ? 'active' : ''}`}>Login</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
