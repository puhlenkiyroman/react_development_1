import React from "react";
import styles from './HealthCareProviders.module.css';
import illustration2 from '../../assets/illustration2.png';
import line from "../../assets/line.png";
import Button from "../Button/Button.tsx";
import element3dots from "../../assets/element3dots.png";

interface IProps {
    className?: string;
}

const HealthCareProviders: React.FC<IProps> = ({className}) => {
    return (
        <div className={`${className} ${styles.container}`}>
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
                    <Button className={styles.button} textColor = "#458FF6" color="#FFFFFF" buttonText="Learn more" />
                </div>
            </div>
            <img src={element3dots} alt="element3dots" className={styles.element3dots} />
        </div>
    );
};

export default HealthCareProviders;
