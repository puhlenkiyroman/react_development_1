import './App.css'
import Header from "./components/Header/Header.tsx";
import ServiceCard from "./components/ServiceCard/ServiceCard.tsx";
import HealthCareProviders from "./components/InfoCard/HealthCareProviders.tsx";
import MobileApps from "./components/InfoCard/MobileApps.tsx";
import Slider from "./components/Slider/Slider.tsx";

function App() {
    return (
        <div>
                <Header />
            <div style={{ marginTop: "192px" }}>
                <ServiceCard />
            </div>
            <div style={{ marginTop: "192px" }}>
                <HealthCareProviders/>
            </div>
            <div style={{ marginTop: "192px" }}>
                <MobileApps />
            </div>
            <div style={{ marginTop: "266px" }}>
                <Slider/>
            </div>
        </div>
    );
}

export default App;
