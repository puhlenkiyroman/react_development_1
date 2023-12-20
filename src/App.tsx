import styles from './App.module.css'
import Header from "./components/Header/Header.tsx";
import ServiceCard from "./components/ServiceCard";
import HealthCareProviders from "./components/InfoCard/HealthCareProviders.tsx";
import MobileApps from "./components/InfoCard/MobileApps.tsx";
import Slider from "./components/Slider/Slider.tsx";
import ArticleCard from "./components/ArticleCard/ArticleCard.tsx";
import Footer from "./components/Footer/Footer.tsx";

function App() {
    return (
        <>
            <Header />
            <ServiceCard className = {styles.margins}/>
            <HealthCareProviders className = {styles.margins}/>
            <MobileApps className = {styles.margins}/>
            <Slider className = {styles.margins}/>
            <ArticleCard className = {styles.margins}/>
            <Footer className = {styles.margins}/>
        </>
    );
}

export default App;