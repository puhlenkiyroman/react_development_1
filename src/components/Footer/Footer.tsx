import React from 'react';
import styles from './Footer.module.css';
import element5dots from "../../assets/element5dots.png";
import element4dots from "../../assets/element4dots.png";

interface IProps {
    className?: string;
}

const Footer: React.FC<IProps> = ({className}) => {
    return (
        <footer className={`${className} ${styles.container}`}>
            <div className={styles.column}>
                <div className={styles.logo}>
                    <div className={styles.circle}>
                        <span className={styles.letter}>T</span>
                    </div>
                    <div className={styles.brand}>
                        HealthCare
                    </div>
                </div>
                <div className={styles.description}>
                HealthCare provides progressive, and affordable healthcare, accessible on mobile and online for everyone
                </div>
                <div className={styles.rights}>
                    ©HealthCare PTY LTD 2023. All rights reserved
                </div>
                <img src={element4dots} alt="element4dots" className={styles.element4dots} />
            </div>
                <div className={styles.column}>
                    <h3>Company</h3>
                        <li>About</li>
                        <li>Testimonials</li>
                        <li>Find a doctor</li>
                        <li>Apps</li>
                </div>
                <div className={styles.column}>
                    <h3>Region</h3>
                        <li>Indonesia</li>
                        <li>Singapore</li>
                        <li>Hongkong</li>
                        <li>Canada</li>
                </div>
            <img src={element5dots} alt="element5dots" className={styles.element5dots} />
            <div className={styles.column}>
                    <h3>Help</h3>
                        <li>Help center</li>
                        <li>Contact support</li>
                        <li>Instructions</li>
                        <li>How it works</li>
                </div>
        </footer>
    );
}

export default Footer;
