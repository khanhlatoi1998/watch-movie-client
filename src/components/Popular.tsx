import { MovieType } from "../constants/type/inex";
import Movie from "./Movie";
import { listMoves } from "../data";
const Popular = () => {


    return (
        <section className="bg-color_main px-4 lg:pt-10 pt-6">
            <div className="max-w-xl mx-auto">
                <div className="flex items-center gap-6 lg:text-title-lg  text-title font-bold">
                    <span><i className="fa-solid fa-box text-color_01"></i></span>
                    <p>Popular Movies</p>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 lg:mt-8 mt-6">
                    {
                        listMoves.map((movie: MovieType, idx: number) => {
                            return (
                                <Movie key={idx} movie={movie}/>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
};


export default Popular;