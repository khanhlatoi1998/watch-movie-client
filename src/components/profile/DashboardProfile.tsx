import { useQuery } from "@tanstack/react-query";
import movieServices from "../../api/movieServices";
import TableDashboard from "../TableDashboard";
import ItemMoviePrfile from "./ItemMovieProfile";
import userServices from "../../api/userServices";
import { useSelector } from "react-redux";
import { CATEGORY_OPTIONS } from "../../constants/global";

const DashboardProfile = () => {
    const userInfo = useSelector((state: any) => state.userInfo);
    const { data: dataMovies, isLoading: isLoadingMovies } = useQuery({
        queryKey: ['moviesServices'],
        queryFn: () => movieServices.getAll(),
        staleTime: 1000,
        keepPreviousData: true
    });

    const { data: dataUsers, isLoading: isLoadingUsers } = useQuery({
        queryKey: ['usersServices'],
        queryFn: () => userServices.getAllUser(userInfo.token),
        staleTime: 1000,
        keepPreviousData: true
    });

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
                            <p className="mt-1">{dataMovies?.length}</p>
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
                            <p className="mt-1">{Object.entries(CATEGORY_OPTIONS).length}</p>
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
                            <p className="mt-1">{dataUsers?.length}</p>
                        </div>
                    </div>
                </div>
            </div>
            <p className="text-opacity_01 font-medium mt-2">Recent Movies</p>
            <TableDashboard movies={dataMovies} />
        </div>
    );
};

export default DashboardProfile;