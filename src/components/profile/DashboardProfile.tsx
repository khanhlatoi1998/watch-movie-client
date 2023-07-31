import ItemMoviePrfile from "./ItemMovieProfile";

const DashboardProfile = () => {
    return (
        <div className="flex flex-col gap-4">
            <p className="text-title lg:text-title-lg font-bold">Dashboard</p>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
                <div className="bg-color_main rounded  p-4">
                    <div className="flex gap-6">
                        <div className="w-[45px] h-[45px] bg-color_04 rounded-full flex items-center justify-center">
                            <i className="fa-regular fa-rectangle-list"></i>
                        </div>
                        <div className="">
                            <p>Total Movies</p>
                            <p className="mt-1">14</p>
                        </div>
                    </div>
                </div>
                <div className="bg-color_main rounded p-4">
                    <div className="flex gap-6">
                        <div className="w-[45px] h-[45px] bg-color_05 rounded-full flex items-center justify-center">
                            <i className="fa-solid fa-circle-nodes"></i>
                        </div>
                        <div className="">
                            <p>Total Categories</p>
                            <p className="mt-1">14</p>
                        </div>
                    </div>
                </div>
                <div className="bg-color_main rounded p-4">
                    <div className="flex gap-6">
                        <div className="w-[45px] h-[45px] bg-color_03 rounded-full flex items-center justify-center">
                            <i className="fa-solid fa-user"></i>
                        </div>
                        <div className="">
                            <p>Total Users</p>
                            <p className="mt-1">14</p>
                        </div>
                    </div>
                </div>
            </div>
            <p className="text-opacity_01 font-medium mt-2">Recent Movies</p>
            <div>
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
                                <ItemMoviePrfile />
                                <ItemMoviePrfile />
                                <ItemMoviePrfile />
                                <ItemMoviePrfile />
                                <ItemMoviePrfile />
                                <ItemMoviePrfile />
                                <ItemMoviePrfile />
                                <ItemMoviePrfile />
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default DashboardProfile;