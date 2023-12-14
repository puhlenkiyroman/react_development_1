import React from 'react';
import styles from './ArticleCard.module.css';
import line from "../../assets/line.png";
import article1 from '../../assets/article1.png';
import article2 from '../../assets/article2.png';
import article3 from '../../assets/article3.png';
import right_arrow from "../../assets/right_arrow.png";

const ServiceCard: React.FC = () => {
    const photos: string[] = [
        article1,
        article2,
        article3
    ];

    const titles: string[] = [
        'Disease detection, check <br/> up in the laboratory',
        'Herbal medicines that are <br/> safe for consumption',
        'Natural care for healthy <br/> facial skin'
    ];

    const subtitles: string[] = [
        'In this case, the role of the health' +
        ' <br/> laboratory is very important to do' +
        ' <br/> a disease detection...',
        'Herbal medicine is very widely used' +
        ' <br/> at this time because of its very good' +
        ' <br/> for your health...',
        'A healthy lifestyle should start from' +
        ' <br/> now and also for your skin health.' +
        '<br/> There are some...'
    ];

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                Our services
            </div>
            <img src={line} alt="line" className={styles.line} />
            <div className={styles.cardContainer}>
                {photos.map((photo, index) => (
                    <div className={styles.card} key={index}>
                        <img src={photo} alt={`Photo ${index}`} className={styles.photo} />
                        <h2
                            className={styles.title_card}
                            dangerouslySetInnerHTML={{
                                __html: titles[index].replace(/\n/g, '<br>')
                            }}
                        />
                        <p
                            className={styles.subtitle_card}
                            dangerouslySetInnerHTML={{ __html: subtitles[index] }}/>
                        <div className={styles.blueButton}>
                            Read more
                            <img src={right_arrow} alt="right_arrow" className={styles.right_arrow} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ServiceCard;
