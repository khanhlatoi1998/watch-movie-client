const FavoritesMovies = () => {
    return (
        <div className="flex flex-col gap-6">
            <div className="flex justify-between items-center">
                <p className="text-title lg:text-title-lg font-bold">Favorites Movies</p>
                <button className="rounded font-medium py-3 px-6 bg-color_main border borde-solid border-color_01 hover:bg-color_01">Delete All</button>
            </div>
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
                        <tr className="border-t border-solid border-border_02">
                            <td className="text-sm text-left leading-6 whitespace-nowrap px-5 py-8">
                                <div className="w-12 p-1 bg-color_02 border-solid border border-border h-12 rounded overflow-hidden">
                                    <img className="h-full w-full object-cover" src="https://firebasestorage.googleapis.com/v0/b/netflixo-minah.appspot.com/o/cb51cbcb-05cf-43f3-a964-a9f37778bb78.webp?alt=media" alt="Game Of thrones" />
                                </div>
                            </td>
                            <td className="text-sm text-left leading-6 whitespace-nowrap px-5 py-8 truncate max-w-[180px]">Game Of thrones</td>
                            <td className="text-sm text-left leading-6 whitespace-nowrap px-5 py-8">Action</td>
                            <td className="text-sm text-left leading-6 whitespace-nowrap px-5 py-8">English</td>
                            <td className="text-sm text-left leading-6 whitespace-nowrap px-5 py-8">2011</td>
                            <td className="text-sm text-left leading-6 whitespace-nowrap px-5 py-8">6hr</td>
                            <td className="mt-[8px] text-sm text-left leading-6 whitespace-nowrap px-5 py-8 flex items-center gap-2">
                                <button className="border border-border flex items-center bg-color_02 gap-2 text-border rounded py-1 px-2">
                                    Download
                                    <i className="fa-solid fa-cloud-arrow-down text-green-500"></i>
                                </button>
                                <a className="bg-color_01 text-white rounded flex justify-center items-center w-6 h-6" href="/movie/637cb36e3b231a4184b524d5">
                                    <i className="fa-regular fa-eye text-xs"></i>
                                </a>
                            </td>
                        </tr>
                        <tr className="border-t border-solid border-border_02">
                            <td className="text-sm text-left leading-6 whitespace-nowrap px-5 py-8">
                                <div className="w-12 p-1 bg-color_02 border-solid border border-border h-12 rounded overflow-hidden">
                                    <img className="h-full w-full object-cover" src="https://firebasestorage.googleapis.com/v0/b/netflixo-minah.appspot.com/o/cb51cbcb-05cf-43f3-a964-a9f37778bb78.webp?alt=media" alt="Game Of thrones" />
                                </div>
                            </td>
                            <td className="text-sm text-left leading-6 whitespace-nowrap px-5 py-8 truncate">Game Of thrones</td>
                            <td className="text-sm text-left leading-6 whitespace-nowrap px-5 py-8">Action</td>
                            <td className="text-sm text-left leading-6 whitespace-nowrap px-5 py-8">English</td>
                            <td className="text-sm text-left leading-6 whitespace-nowrap px-5 py-8">2011</td>
                            <td className="text-sm text-left leading-6 whitespace-nowrap px-5 py-8">6hr</td>
                            <td className="text-sm text-left leading-6 whitespace-nowrap px-5 py-8 flex items-center gap-2">
                                <button className="border border-border flex items-center bg-color_02 gap-2 text-border rounded py-1 px-2">
                                    Download
                                    <i className="fa-solid fa-cloud-arrow-down text-green-500"></i>
                                </button>
                                <a className="bg-color_01 text-white rounded flex justify-center items-center w-6 h-6" href="/movie/637cb36e3b231a4184b524d5">
                                    <i className="fa-regular fa-eye text-xs"></i>
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default FavoritesMovies;