import TableDashboard from "../TableDashboard";
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
            <TableDashboard />
        </div>
    );
};

export default DashboardProfile;