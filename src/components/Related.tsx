import { MovieType } from "../constants/type/inex";
import { listMoves } from "../data";
import Movie from "./Movie";

const Related = () => {
    return (
        <div className="pt-16 pb-20">
            <div className="flex items-center gap-6 lg:text-title-lg  text-title font-bold">
                <span><i className="fa-solid fa-medal text-color_01"></i></span>
                <p>Top Rated</p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 lg:mt-8 mt-6">
                {
                    listMoves.map((movie: MovieType, idx: number) => {
                        return (
                            <Movie key={idx} movie={movie} />
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Related;