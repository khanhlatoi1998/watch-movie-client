import DownloadSection from "../components/DownloadSection";
import Header from "../components/header/Header";
import HeroSlice from "../components/hero/HeroSlice";
import TopRate from "../components/TopRated";
import Footer from "../components/Footer";
import Popular from "../components/Popular";

const HomePage = () => {
    return (
        <>
            <HeroSlice />
            <Popular />
            <DownloadSection />
            <TopRate />
        </>
    );
};

export default HomePage;