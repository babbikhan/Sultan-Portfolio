import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link'; // Import Link for navigation
import styles from './hero.module.css'; // Adjust the import path if needed

export default function Home() {
  const [titleIndex, setTitleIndex] = useState(0);
  const titles = ["Frontend Developer", "UI/UX Designer"];

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 2000); // Change subtitle every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.leftSide}>
            <h1 className={styles.title}>
              I’m <span className={styles.highlight}>Sultan Khan</span>
            </h1>
            <h2 className={styles.subtitle}>{titles[titleIndex]}</h2>
            <h2 className={styles.founder}>Founder of Sk Artistic</h2>
            <p className={styles.description}>
              Transforming ideas into visual masterpieces where creativity meets precision.
              <br />
              <br />
              Visit my resume click on view button below.
            </p>

            {/* Link added to Hire Me button */}
            <Link href="https://static-resume-gules.vercel.app/" passHref>
            <button className={styles.hireMeBtn}>
                  VIEW RESUME
                </button>
                 </Link>

          </div>

          <div className={styles.centerImage}>
            <Image
              src="https://skartistic.com/wp-content/uploads/2024/07/p2.png"
              alt="Sultan Khan"
              width={320}
              height={200}
              className={styles.profileImg}
            />

            <div className={styles.stats}>
              <div className={styles.statNumber}>2+</div>
              <div className={styles.statText}>Years Of Experience</div>
              <div className={styles.divider}></div>
              <div className={styles.statNumber}>39+</div>
              <div className={styles.statText}>Projects Completed</div>
              <div className={styles.divider}></div>
              <div className={styles.statNumber}>99%</div>
              <div className={styles.statText}>Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Governor Section */}
      <section className={styles.governorSection}>
        <div className={styles.governorContainer}>
          {/* Text on the left */}
          <div className={styles.textContainer}>
            <h1 className={styles.governorTitle}>
              Governor Initiative <span className={styles.course}>IT Course</span>
            </h1>
            <h2 className={styles.studentName}>Sultan Khan (GIAIC STUDENT)</h2>
            <h3 className={styles.passed}>
              PASSED <span className={styles.quarter}>QUARTER 1</span>
            </h3>
            <p className={styles.description}>
              Alhamdulilah, I succeeded in Quarter 1 of the Typescript exam, conducted at Governor House Sindh by Kamran Khan Tessori. This initiative, including programming courses, advanced my skills significantly.
            </p>
            <p className={styles.enrollment}>
              Enrolled in Quarter 2 <span className={styles.enroll}>and currently learning Next.js</span>
            </p>
          </div>

          {/* Image on the right */}
          <div className={styles.profileContainer}>
            <Image
              src="https://skartistic.com/wp-content/uploads/elementor/thumbs/sk-it-qtrr2h1tfa4f7y87t6adfvz1pv1ayxizmkq701ux0g.png"
              alt="Sultan Khan Profile"
              width={390}
              height={200}
              className={styles.governorImg}
            />
            <div className={styles.tsBadge}>
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"
                alt="Typescript Logo"
                width={40}
                height={40}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
