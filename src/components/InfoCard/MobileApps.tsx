import React from "react";
import styles from './MobileApps.module.css';
import illustration3 from '../../assets/illustration3.png';
import vector from '../../assets/Vector.png'
import line from "../../assets/line.png";

interface IProps {
    className?: string;
}

const MobileApps: React.FC<IProps> = ({className}) => {
    return (
        <div className={`${className} ${styles.container}`}>
        <div className={styles.textContainer}>
                <div className={styles.text}>
                    <h1> Download our <br/> mobile apps </h1>
                    <img src={line} alt="line" className={styles.line} />
                    <h3>
                        Our dedicated patient engagement app and<br/>
                        web portal allow you to access information<br/>
                        instantaneously (no tedeous form, long calls,<br/>
                        or administrative hassle) and securely
                    </h3>
                    <button className={styles.blueButton}>Download
                        <img src={vector} alt="vector" className={styles.vector} />
                    </button>
                </div>
                <img src={illustration3} alt="Illustration" className={styles.illustration} />
            </div>
        </div>
    );
};

export default MobileApps;
