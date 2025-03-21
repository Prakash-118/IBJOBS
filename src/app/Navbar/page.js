'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
import Image from 'next/image';
import './page.css';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdowns, setDropdowns] = useState({
        services: false,
        employment: false
    });
    const pathname = usePathname();

    const toggleMenu = () => setMenuOpen(!menuOpen);

    const toggleDropdown = (dropdown) => {
        setDropdowns((prev) => ({
            ...prev,
            [dropdown]: !prev[dropdown]
        }));
    };

    const closeMenu = () => {
        setMenuOpen(false);
        setDropdowns({ services: false, employment: false });
    };

    useEffect(() => {
        closeMenu();
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
                    <li><Link href="/Jobspost" className={`navLink ${pathname === '/Jobspost' ? 'active' : ''}`}>Job Post</Link></li>

                    {/* Our Services Dropdown */}
                    <li className="dropdown">
                        <button onClick={() => toggleDropdown('services')} className="dropdownButton">
                            Our Services <FiChevronDown />
                        </button>
                        <ul className={`dropdownMenu ${dropdowns.services ? "show" : ""}`}>
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

                    {/* Employment Dropdown */}
                    <li className="dropdown">
                        <button onClick={() => toggleDropdown('employment')} className="dropdownButton">
                            Employment <FiChevronDown />
                        </button>
                        <ul className={`dropdownMenu ${dropdowns.employment ? "show" : ""}`}>
                            <li><Link href='/Jobcreate' className='dropdownItem'>Upload Jobs</Link></li>
                            <li><Link href='/reg' className='dropdownItem'>Register/Login</Link></li>
                        </ul>
                    </li>

                    <li><Link href="/Contact" className={`navLink ${pathname === '/Contact' ? 'active' : ''}`}>Contact Us</Link></li>
                    <li><Link href="/Login" className={`navLink ${pathname === '/Login' ? 'active' : ''}`}>Login</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;