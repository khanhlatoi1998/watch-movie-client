import { MovieType } from "../constants/type/inex";
import Movie from "./Movie";
import Loader from "./Loader";
const Popular: React.FC<{ popularMovies: MovieType[] }> = ({ popularMovies }) => {
    return (
        <section className="bg-color_main lg:pt-10 pt-6">
            <div className="container px-4 mx-auto">
                <div className="flex items-center gap-6 lg:text-title-lg  text-title font-bold">
                    <span><i className="fa-solid fa-box text-color_01"></i></span>
                    <p>Popular Movies</p>
                </div>
                {
                    popularMovies ? (<div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 lg:mt-8 mt-6">
                        {
                            popularMovies?.map((movie: MovieType, idx: number) => {
                                return (
                                    <Movie key={idx} movie={movie} />
                                )
                            })
                        }
                    </div>)
                        : (<div className="flex flex-col justify-center items-center min-h-[260px]">
                            <Loader loading={true} />
                        </div>)
                }
            </div>
        </section>
    )
};

export default Popular;