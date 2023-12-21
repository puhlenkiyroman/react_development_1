import React, { useState } from 'react';
import styles from './ArticleCard.module.css';
import line from "../../assets/line.png";
import article1 from '../../assets/article1.png';
import article2 from '../../assets/article2.png';
import article3 from '../../assets/article3.png';
import right_arrow from "../../assets/right_arrow.png";
import Button from "../Button/Button.tsx";
import element5dots from "../../assets/element5dots.png";

interface IProps {
    className?: string;
}

const ArticleCard: React.FC<IProps> = ({ className }) => {
    const [showAllArticles, setShowAllArticles] = useState(false); // Состояние для отслеживания видимости ряда карточек

    const photos: string[] = [
        article1,
        article2,
        article3,
        article1,
        article2,
        article3
    ];

    const titles: string[] = [
        'Disease detection, check up in the laboratory',
        'Herbal medicines that are safe for consumption',
        'Natural care for healthy facial skin',
        'Disease detection, check up in the laboratory',
        'Herbal medicines that are safe for consumption',
        'Natural care for healthy facial skin'
    ];

    const subtitles: string[] = [
        'In this case, the role of the health laboratory is very important to do a disease detection...',
        'Herbal medicine is very widely used at this time because of its very good for your health...',
        'A healthy lifestyle should start from now and also for your skin health. There are some...',
        'In this case, the role of the health laboratory is very important to do a disease detection...',
        'Herbal medicine is very widely used at this time because of its very good for your health...',
        'A healthy lifestyle should start from now and also for your skin health. There are some...'
    ];

    const handleToggleArticles = () => {
        setShowAllArticles(!showAllArticles);
    };

    return (
        <div className={`${className} ${styles.container}`}>
            <div className={styles.title}>
                Check out our latest article
            </div>
            <img src={line} alt="line" className={styles.line} />
            <div className={styles.cardContainer}>
                <img src={element5dots} alt="element5dots" className={styles.element5dots} />
                {photos.slice(0, showAllArticles ? photos.length : 3).map((photo, index) => (
                    <div className={styles.card} key={index}>
                        <img src={photo} alt={`Photo ${index}`} className={styles.photo} />
                        <h2 className={styles.title_card}>{titles[index]}</h2>
                        <p className={styles.subtitle_card}>{subtitles[index]}</p>
                        <div className={styles.button}>
                            Read more
                            <img src={right_arrow} alt="right_arrow" className={styles.right_arrow} />
                        </div>
                    </div>
                ))}
            </div>
            <Button
                className={styles.blueButton}
                textColor="#458FF6"
                color="#FFFFFF"
                buttonText={showAllArticles ? "Hide" : "View all"}
                onClick={handleToggleArticles}
            />
        </div>
    );
}

export default ArticleCard;
