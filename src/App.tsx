import styles from './App.module.css'
import Header from "./components/Header";
import ServiceCard from "./components/ServiceCard";
import {HealthCareProviders, MobileApps} from "./components/InfoCard";
import Slider from "./components/Slider";
import ArticleCard from "./components/ArticleCard";
import Footer from "./components/Footer";

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