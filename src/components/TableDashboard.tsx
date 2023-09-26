import React from "react";
import { MovieType } from "../constants/type/inex";
import ItemMoviePrfile from "./profile/ItemMovieProfile";

interface Props {
    movies: MovieType[];
}

const TableDashboard: React.FC<Props> = ({movies}) => {
    return (
        <div className="flex flex-col gap-6 mt-4">
            <div className="overflow-scroll overflow-hidden relative w-full max-h-[600px]">
                <table className="w-full table-auto border border-solid border-border divide-y divide-border">
                    <thead>
                        <tr className="bg-white">
                            <th scope="col" className="text-xs text-left text-color_main font-semibold px-6 py-2 uppercase">Image</th>
                            <th scope="col" className="text-xs text-left text-color_main font-semibold px-6 py-2 uppercase">Name</th>
                            <th scope="col" className="text-xs text-left text-color_main font-semibold px-6 py-2 uppercase">Category</th>
                            <th scope="col" className="text-xs text-left text-color_main font-semibold px-6 py-2 uppercase">Language</th>
                            <th scope="col" className="text-xs text-left text-color_main font-semibold px-6 py-2 uppercase">Year</th>
                            <th scope="col" className="text-xs text-left text-color_main font-semibold px-6 py-2 uppercase">Hours</th>
                            <th scope="col" className="text-xs  text-color_main font-semibold px-6 py-2 uppercase text-end">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-color_main divide-y divide-gray-800">
                        {
                            movies?.map((movie: MovieType, idx: number) => {
                                return (
                                    <ItemMoviePrfile key={movie._id} movie={movie} />
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TableDashboard;