import React from 'react';
import styles from './ServiceCard.module.css';
import line from "../../assets/line.png";
import ConsultationPhoto from "../../assets/Consultation_photo.png";
import DetailsInfo from "../../assets/Details_info_photo.png";
import EmergencyCore from "../../assets/Emergency_core_photo.png";
import OnlinePharmacy from "../../assets/Online_pharmacy_photo.png";
import SearchDoctor from "../../assets/Search_doctor_photo.png";
import TrackingPhoto from "../../assets/Tracking_photo.png";

const ServiceCard: React.FC = () => {
    const photos:string[]  = [
        SearchDoctor,
        OnlinePharmacy,
        ConsultationPhoto,
        DetailsInfo,
        EmergencyCore,
        TrackingPhoto
    ];

    const titles:string[] = [
        'Search doctor',
        'Online pharmacy',
        'Consultation',
        'Details info',
        'Emergency care',
        'Tracking'
    ];

    const subtitles:string[]  = [
        'Choose your doctor from thousands <br/> of specialist, general, and trusted<br/> hospitals',
        'Buy your medicines with our<br/> mobile application with a simple<br/> delivery system',
        'Free consultation with our trusted<br/> doctors and get the best<br/> recommendations',
        'Free consultation with our trusted<br/> doctors and get the best<br/> recommendations',
        'You can get 24/7 urgent care for<br/> yourself or your children and your<br/> lovely family',
        'Track and save your medical history<br/> and health data'
    ];

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                Our services
            </div>
            <img src={line} alt="line" className={styles.line} />
            <div className={styles.subtitle}>
                We provide to you the best choiches for you.
                Adjust it to your health needs and make sure your undergo treatment <br/>
                with our highly qualified doctors you can consult with us which
                type of service is suitable for your health
            </div>
            <div className={styles.cardContainer}>
                {photos.map((photo, index) => (
                    <div className={styles.card} key={index}>
                        <img src={photo} alt={`Photo ${index}`} className={`${styles.photo} ${styles.withMargin}`} />
                        <h2 className={`${styles.title_card} ${styles.withMargin}`}>{titles[index]}</h2>
                        <p className={`${styles.subtitle_card} ${styles.withMargin}`} dangerouslySetInnerHTML={{ __html: subtitles[index] }}/>
                    </div>
                ))}
            </div>
            <button className={styles.blueButton}>
                Learn more
            </button>
        </div>
    );
}

export default ServiceCard;
