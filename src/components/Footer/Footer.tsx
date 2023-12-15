import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
    return (
        <footer className={styles.container}>
            <div className={styles.column}>
                <div className={styles.logo}>
                    <div className={styles.circle}>
                        <span className={styles.letter}>T</span>
                    </div>
                    <div className={styles.brand}>
                        HealthCare
                    </div>
                </div>
                <p>HealthCare provides progressive, and affordable healthcare, accessible on mobile and online for everyone</p>
                <p>©HealthCare PTY LTD 2023. All rights reserved</p>
            </div>
            <div className={styles.column}>
                <h3>Company</h3>
                <ul>
                    <li>About</li>
                    <li>Testimonials</li>
                    <li>Find a doctor</li>
                    <li>Apps</li>
                </ul>
            </div>
            <div className={styles.column}>
                <h3>Company</h3>
                <ul>
                    <li>About</li>
                    <li>Testimonials</li>
                    <li>Find a doctor</li>
                    <li>Apps</li>
                </ul>
            </div>
            <div className={styles.column}>
                <h3>Company</h3>
                <ul>
                    <li>About</li>
                    <li>Testimonials</li>
                    <li>Find a doctor</li>
                    <li>Apps</li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
