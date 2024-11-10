import Link from "next/link";
import Image from "next/image";
import styles from './footer.module.css'; 
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"; 

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        {/* Logo Section */}
        <div className={styles.logo}>
          <Image src="https://skartistic.com/wp-content/uploads/2023/11/logo-sk.png" alt="Logo" width={200} height={50} />
        </div>

        {/* Navigation Section */}
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li className={styles.navItem}><Link href="/">Home</Link></li>
            <li className={styles.navItem}><Link href="/About">About</Link></li>
            <li className={styles.navItem}><Link href="/Contact">Contact</Link></li>
          </ul>
        </nav>

        {/* Social Icons Section */}
        <div className={styles.socialIcons}>
        <p className="socialIconsHeading">Follow us on Social Media</p>
          <Link href="https://www.facebook.com/share/1Dec1nwR3Y/"><FaFacebook /></Link>
          <Link href="https://twitter.com"><FaTwitter /></Link>
          <Link href="https://www.instagram.com/_sultan_khan_8"><FaInstagram /></Link>
        </div>
      </div>

      {/* Bottom Section with Copyright */}
      <div className={styles.footerBottom}>
        <p>&copy; Copyright 2024 Sk Artistic. All rights reserved</p>
      </div>
    </footer>
  );
}
