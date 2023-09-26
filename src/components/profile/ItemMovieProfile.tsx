import { NavLink } from "react-router-dom";
import { MovieType } from "../../constants/type/inex";
import { useDispatch, useSelector } from "react-redux";
import movieServices from "../../api/movieServices";
import { handler } from "../../redux/siliceButton";
import Loader from "../Loader";
import { useState } from "react";

interface Props {
    movie: MovieType
}

const ItemMoviePrfile: React.FC<Props> = ({
    movie: {
        _id,
        imageWithTitleValue,
        movieTitle,
        movieCategory,
        language,
        year,
        hours
    }
}) => {
    const userInfo = useSelector((state: any) => state.userInfo);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const handleDeleteMovie = () => {
        setIsLoading(true)
        movieServices.deleteMovie(_id, userInfo.token)
            .then(res => {
                setIsLoading(false);
                console.log(res)
            })
            .catch(err => {})
    };

    return (
        <tr className="border-t border-solid border-border_02">
            <td className="text-sm text-left leading-6 whitespace-nowrap px-5 py-8">
                <NavLink to={`/detail/${_id}`} className="w-12 p-1 block bg-color_02 border-solid border border-border h-12 rounded overflow-hidden">
                    <img className="h-full w-full object-cover" src={imageWithTitleValue} alt="Game Of thrones" />
                </NavLink>
            </td>
            <td className="text-sm text-left leading-6 whitespace-nowrap px-5 py-8 truncate max-w-[180px]">{movieTitle}</td>
            <td className="text-sm text-left leading-6 whitespace-nowrap px-5 py-8">{movieCategory}</td>
            <td className="text-sm text-left leading-6 whitespace-nowrap px-5 py-8">{language}</td>
            <td className="text-sm text-left leading-6 whitespace-nowrap px-5 py-8">{year}</td>
            <td className="text-sm text-left leading-6 whitespace-nowrap px-5 py-8">{hours}hr</td>
            <td className="mt-[8px] text-sm text-left leading-6 whitespace-nowrap px-5 py-8 flex justify-end items-center gap-2">
                <button className="border border-border flex items-center bg-color_02 gap-2 text-border rounded py-1 px-2">
                    Edit
                    <i className="fa-regular fa-pen-to-square text-color_03"></i>
                </button>
                <button disabled={isLoading} onClick={handleDeleteMovie} className="bg-color_01 text-white rounded flex justify-center items-center w-6 h-6 cursor-pointer">
                    {
                        isLoading ? (
                            <Loader loading={true} size={20} color='#fff' />
                        ) : (<i className="fa-solid fa-trash-can"></i>)
                    }
                </button>
            </td>
        </tr>
    )
};

export default ItemMoviePrfile;