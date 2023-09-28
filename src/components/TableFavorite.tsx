import { MovieType } from "../constants/type/inex";

const TableFavorite: React.FC<any> = ({ favoriteMovies: favoriteMovies }) => {
    console.log(favoriteMovies)

    return (
        <div className="overflow-x-scroll overflow-hidden relative w-full">
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
                        favoriteMovies?.map((movie: MovieType, idx: number) => {
                            return (
                                <tr key={movie._id} className="border-t border-solid border-border_02">
                                    <td className="text-sm text-left leading-6 whitespace-nowrap px-5 py-8">
                                        <div className="w-12 p-1 bg-color_02 border-solid border border-border h-12 rounded overflow-hidden">
                                            <img className="h-full w-full object-cover" src={movie.imageWithTitleValue} alt="Game Of thrones" />
                                        </div>
                                    </td>
                                    <td className="text-sm text-left leading-6 whitespace-nowrap px-5 py-8 truncate max-w-[180px]">{movie.movieTitle}</td>
                                    <td className="text-sm text-left leading-6 whitespace-nowrap px-5 py-8">{movie.movieCategory}</td>
                                    <td className="text-sm text-left leading-6 whitespace-nowrap px-5 py-8">{movie.language}</td>
                                    <td className="text-sm text-left leading-6 whitespace-nowrap px-5 py-8">{movie.year}</td>
                                    <td className="text-sm text-left leading-6 whitespace-nowrap px-5 py-8">{movie.hours}hr</td>
                                    <td className="mt-[8px] text-sm text-left leading-6 whitespace-nowrap px-5 py-8 flex items-center gap-2">
                                        <button className="border border-border flex items-center bg-color_02 gap-2 text-border rounded py-1 px-2">
                                            Download
                                            <i className="fa-solid fa-cloud-arrow-down text-green-500"></i>
                                        </button>
                                        <a className="bg-color_01 text-white rounded flex justify-center items-center w-6 h-6" href={movie.video}>
                                            <i className="fa-regular fa-eye text-xs"></i>
                                        </a>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};

export default TableFavorite;