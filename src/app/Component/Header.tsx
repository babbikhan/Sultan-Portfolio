"use client"; 

import { useState } from 'react'; 
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); 

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false); 
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <Image 
            src="https://skartistic.com/wp-content/uploads/2023/11/logo-sk.png"  
            alt="Logo"
            width={200}  
            height={60}  
          />
        </Link>
      </div>

      {/* Mobile Menu Toggle Button */}
      <button className={styles.menuToggle} onClick={toggleSidebar}>
        &#9776; {/* Hamburger icon */}
      </button>

      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/About">About</Link>
          </li>
          <li>
            <Link href="/Gallery">Gallery</Link>
          </li>
          <li>
            <Link href="/Contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <div className={styles.galleryButton}>
        <Link href="/Gallery">Gallery</Link>
      </div>

      {/* Sidebar Navigation */}
      <div className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
        {/* Close Button */}
        <button className={styles.closeButton} onClick={closeSidebar}>
          &times; {/* Close icon */}
        </button>

        <div className={styles.sidebarLogo}>
          <Link href="/">
            <Image 
              src="https://skartistic.com/wp-content/uploads/2023/11/logo-sk.png"  
              alt="Logo"
              width={200} 
              height={60}  
            />
          </Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link href="/" onClick={closeSidebar}>Home</Link>
            </li>
            <li>
              <Link href="/About" onClick={closeSidebar}>About</Link>
            </li>
            <li>
              <Link href="/Gallery" onClick={closeSidebar}>Gallery</Link>
            </li>
            <li>
              <Link href="/Contact" onClick={closeSidebar}>Contact</Link>
            </li>
          </ul>

        </nav>
      </div>
    </header>
  );
};

export default Header;
