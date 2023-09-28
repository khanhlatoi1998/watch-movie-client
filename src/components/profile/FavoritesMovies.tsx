import { useEffect } from "react";
import userServices from "../../api/userServices";
import { useSelector } from "react-redux";
import { useQuery } from '@tanstack/react-query';
import { toast } from "react-hot-toast";
import Empty from "../Empty";
import TableFavorite from "../TableFavorite";
import Loader from "../Loader";

const FavoritesMovies = () => {
    const userInfo = useSelector((state: any) => state.userInfo);

    const { data: getFavoriteMovies, isLoading: isLoadinggetFavoriteMovies } = useQuery({
        queryKey: ['getLikeMovies1'],
        queryFn: () => userServices.getFavoriteMovies(userInfo.token),
        staleTime: 1000,
        keepPreviousData: true
    });

    const deleteFavoriteMovies = () => {
        toast.success('Deleted Favorite Movies');
        userServices.deleteFavoriteMovies(userInfo.token)
    };

    return (
        <div className="flex flex-col gap-6">
            <div className="flex justify-between items-center">
                <p className="text-title lg:text-title-lg font-bold">Favorites Movies</p>
                <button onClick={deleteFavoriteMovies} className="rounded font-medium py-3 px-6 bg-color_main border borde-solid border-color_01 hover:bg-color_01">Delete All</button>
            </div>
            {
                getFavoriteMovies?.length > 0 ? (
                    !isLoadinggetFavoriteMovies ? <TableFavorite favoriteMovies={getFavoriteMovies} /> : <div className="flex flex-col justify-center items-center min-h-[200px]"><Loader loading={!isLoadinggetFavoriteMovies} /></div>
                )
                    : (<Empty message="You have no favorites movies" />)
            }
        </div>
    );
};

export default FavoritesMovies;