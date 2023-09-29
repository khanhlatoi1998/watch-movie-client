import DownloadSection from "../components/DownloadSection";
import Header from "../components/header/Header";
import HeroSlice from "../components/hero/HeroSlice";
import TopRate from "../components/TopRated";
import Footer from "../components/Footer";
import Popular from "../components/Popular";
import { useQuery } from "@tanstack/react-query";
import movieServices from "../api/movieServices";
import { MovieType } from "../constants/type/inex";

interface Props {
    popularMovies?: MovieType;
}


const HomePage: React.FC<Props> = () => {
    const { data: popularMovies, isLoading: isLoadingPopularMovies } = useQuery({
        queryKey: ['moviesServices'],
        queryFn: () => movieServices.getPopularMovies()
    });
    return (
        <>
            <HeroSlice popularMovies={popularMovies} />
            <Popular popularMovies={popularMovies} />
            <DownloadSection />
            <TopRate />
        </>
    );
};

export default HomePage;