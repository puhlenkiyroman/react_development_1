import React, { useState } from 'react';
import styles from './Slider.module.css';
import line from "../../assets/white_vector.png";
import customer from "../../assets/customer.png";
import leftArrow from "../../assets/left_arrow.png";
import rightArrow from "../../assets/right_arrow.png";
import element3dots from "../../assets/element3dots.png";

interface IProps {
    className?: string;
}
const Slider: React.FC<IProps> = ({className}) => {
    const reviews = [
        {
            name: 'Edward Newgate',
            position: 'Founder Circle',
            quote: 'Patient, attentive, and knowledgeable. The service provided was excellent!',
        },
        {
            name: 'John Doe',
            position: 'CEO',
            quote: 'I was impressed by the professionalism and compassion of the team. Highly recommended!',
        },
        {
            name: 'Alice Johnson',
            position: 'Head of Operations',
            quote: 'A truly remarkable experience. The staff went above and beyond my expectations.',
        },
        {
            name: 'Emily Smith',
            position: 'Marketing Director',
            quote: 'Exceptional service! I couldn\'t be more satisfied with the care I received.',
        },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    const handleSlideChange = (index: number) => {
        setCurrentSlide(index);
    };

    return (
        <>
            <div className={`${className} ${styles.container}`}>
                <div className={styles.card}>
                    <div className={styles.title}>
                        What our customers are saying
                    </div>
                    <img src={line} alt="line" className={styles.line} />
                    <div className={styles.customerContainer}>
                        <div className={styles.customer}>
                            <img src={customer} alt="line" className={styles.customer_photo} />
                        </div>
                        <div className={styles.customerDetails}>
                            <div className={styles.name}>
                                {reviews[currentSlide].name}
                            </div>
                            <div className={styles.pos_at_work}>
                                {reviews[currentSlide].position}
                            </div>
                        </div>
                        <div className={styles.quote}>
                            {reviews[currentSlide].quote}
                        </div>
                        <img src={element3dots} alt="element3dots" className={styles.element3dotsblue} />
                        <img src={element3dots} alt="element3dots" className={styles.element3dots} />
                    </div>
                </div>
            </div>
            <div className={styles.sliderWithDots}>
                <div className={styles.modal_nav_buttons}>
                    <button
                        className={`${styles.modal_nav_button} ${currentSlide === 0 ? styles.disabled : ''}`}
                        onClick={() => handleSlideChange(currentSlide - 1)}
                        disabled={currentSlide === 0}
                    >
                        <img src={leftArrow} alt="Previous" />
                    </button>
                    <div className={styles.dot_indicator}>
                        {reviews.map((_, index) => (
                            <div
                                key={index}
                                className={`${styles.dot} ${index === currentSlide ? styles.active_dot : ''}`}
                                onClick={() => handleSlideChange(index)}
                            />
                        ))}
                    </div>
                    <button
                        className={`${styles.modal_nav_button} ${currentSlide === reviews.length - 1 ? styles.disabled : ''}`}
                        onClick={() => handleSlideChange(currentSlide + 1)}
                        disabled={currentSlide === reviews.length - 1}
                    >
                        <img src={rightArrow} alt="Next" />
                    </button>
                </div>
            </div>
        </>
    );
}

export default Slider;
