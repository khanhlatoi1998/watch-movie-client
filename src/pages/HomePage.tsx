import DownloadSection from "../components/DownloadSection";
import Header from "../components/header/Header";
import HeroSlice from "../components/hero/HeroSlice";
import TopRate from "../components/TopRated";
import Footer from "../components/Footer";
import Popular from "../components/Popular";
import { useQuery } from "@tanstack/react-query";
import movieServices from "../api/movieServices";

const HomePage = () => {
    const {data: popularMovies, isLoading: isLoadingPopularMovies} = useQuery({
        queryKey: ['moviesServices'],
        queryFn: () => movieServices.getPopularMovies()
    });
    const {data: topRateMovies, isLoading: isLoadingTopRateMovies} = useQuery({
        queryKey: ['moviesServices'],
        queryFn: () => movieServices.getRatedTopMovies()
    })
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