import { MovieType } from "../constants/type/inex";
import Movie from "./Movie";
import { listMoves } from "../data";
import { useQuery } from "@tanstack/react-query";
import movieServices from "../api/movieServices";
const Popular = () => {

    const { data, isLoading } = useQuery({
        queryKey: ['moviesServices'],
        queryFn: () => movieServices.getPopularMovie(),
        // staleTime: 1000
        keepPreviousData: true
    });

    console.log(data)

    return (
        <section className="bg-color_main lg:pt-10 pt-6">
            <div className="container px-4 mx-auto">
                <div className="flex items-center gap-6 lg:text-title-lg  text-title font-bold">
                    <span><i className="fa-solid fa-box text-color_01"></i></span>
                    <p>Popular Movies</p>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 lg:mt-8 mt-6">
                    {
                         data?.map((movie: MovieType, idx: number) => {
                            return (
                                <Movie key={idx} movie={movie} />
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
};


export default Popular;