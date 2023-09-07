import { useEffect } from "react";
import userServices from "../../api/userServices";
import { useSelector } from "react-redux";
import { useQuery } from '@tanstack/react-query';
import { toast } from "react-hot-toast";
import Empty from "../Empty";
import TableFavorite from "../TableFavorite";

const FavoritesMovies = () => {
    const userInfo = useSelector((state: any) => state.userInfo);

    const { data, isLoading }: any = useQuery({
        queryKey: ['getFavoriteMovies'],
        queryFn: () => userServices.deleteFavoriteMovies(userInfo.token),
        // staleTime: 1000
        keepPreviousData: true
    });

    const deleteFavoriteMovies = () => {
        toast.success(data.message)
    };

    return (
        <div className="flex flex-col gap-6">
            <div className="flex justify-between items-center">
                <p className="text-title lg:text-title-lg font-bold">Favorites Movies</p>
                <button onClick={deleteFavoriteMovies} className="rounded font-medium py-3 px-6 bg-color_main border borde-solid border-color_01 hover:bg-color_01">Delete All</button>
            </div>
            <TableFavorite />
            <Empty message="You have no favorites movies" />
        </div>
    );
};

export default FavoritesMovies;