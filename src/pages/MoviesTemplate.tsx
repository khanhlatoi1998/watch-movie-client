import Movie from "../components/Movie";
import { MovieType } from "../constants/type/inex";
import { listMoves } from "../data";
import { TbPlayerTrackNext, TbPlayerTrackPrev } from 'react-icons/tb';


const MoviesTemplate = () => {
    return (
        <section className="px-4 bg-color_main pt-[103px]">
            <div className="max-w-xl mx-auto pb-20">
                <form className="bg-color_02 p-6 rounded-lg border border-solid border-border mt-6">
                    <div>
                        <select name="" id="">

                        </select>
                    </div>

                </form>
                <div>
                    <p className="font-bold mt-8 text-title-lg text-title">
                        Total <span className="text-color_01">10</span> items Found
                    </p>
                    <div>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 mt-10">
                            {
                                listMoves.map((movie: MovieType, idx: number) => {
                                    return (
                                        <Movie key={idx} movie={movie} />
                                    )
                                })
                            }
                        </div>
                        <div className="flex px-4 lg:pt-14 pt-10 justify-center items-center gap-6">
                            <button className="py-2 px-4 border-2 border-solid border-color_01 rounded text-title-lg">
                                <TbPlayerTrackPrev />
                            </button>
                            <button className="py-2 px-4 border-2 border-solid border-color_01 rounded text-title-lg" >
                                <TbPlayerTrackNext />
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default MoviesTemplate;