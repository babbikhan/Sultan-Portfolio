// components/Newsletter.js

import React, { useState } from 'react';
import styles from './Newsletter.module.css'; // Import the CSS module

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Subscribed with email: ${email}`);
    setEmail('');
    setIsSubmitted(true);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Subscribe to newsletter for latest updates</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputContainer}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={styles.input}
            placeholder="Enter your email"
          />
          <button type="submit" className={styles.button}>Subscribe</button>
        </div>
      </form>
      {isSubmitted && <p className={styles.successMessage}>Thank you for subscribing!</p>}
    </div>
  );
};

export default Newsletter;
