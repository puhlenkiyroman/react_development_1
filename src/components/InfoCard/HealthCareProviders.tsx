import React from "react";
import styles from './HealthCareProviders.module.css';
import illustration2 from '../../assets/illustration2.png';
import line from "../../assets/line.png";

const HealthCareProviders:React.FC = () => {
    return (
        <>
            <div className={styles.contentBlock}>
                <div className={styles.textContainer}>
                    <img src={illustration2} alt="Illustration" className={styles.illustration} />
                    <div className={styles.text}>
                        <h1> Leading healthcare<br/> providers</h1>
                        <img src={line} alt="line" className={styles.line} />
                        <h3>
                            We provides progressive, and affordable healthcare,<br/>
                            accessible on mobile and online for everyone. To us, it’s<br/>
                            not just work. We take pride in the solutions we deliver
                        </h3>
                        <button className={styles.blueButton}>Learn more</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HealthCareProviders;
