import { NavLink, useNavigate } from "react-router-dom";
import { MovieType } from "../constants/type/inex";
import userServices from "../api/userServices";
import { useSelector } from "react-redux";

interface Props {
    movie: MovieType;
}


const Movie: React.FC<Props> = ({
    movie: {
        _id,
        movieTitle,
        hours,
        language,
        year,
        movieDescription,
        movieCategory,
        casts,
        rate,
        numberOfReviews,
        imageWithTitleValue,
        imageWithThumbnailValue,
        video,
        reviews
    }
}) => {
    const navigate = useNavigate();
    const userInfo = useSelector((state: any) => state.userInfo);
    const handlFavoriteMovies = (e: any) => {
        e.preventDefault();
        if (userInfo) {
            userServices.addLikeMovies(userInfo?.token, _id).then(res=> {console.log(res)})
        } else (
            navigate('/login')
        )
    }

    return (
        <NavLink to={`detail/${_id}`} className="border border-solid border-gray-500 p-1 rounded hover:scale-[0.96] cursor-pointer transition duration-300">
            <div className="relative pt-[83%]">
                <img src={imageWithTitleValue} alt="" className="absolute top-0 left-0 w-full h-full object-fill" />
                <div className="absolute bottom-0 left-0 flex justify-between items-center gap-2 bg-[#00000070] w-full px-4 py-3" >
                    <p className="truncate font-medium text-title lg:text-title-lg">{movieTitle}</p>
                    <span onClick={(e) => handlFavoriteMovies(e)} className="bg-color_01 hover:bg-transparent outline outline-2 outline-[#F20000] rounded px-2 py-1">
                        <i className="fa-solid fa-heart"></i>
                    </span>
                </div>
            </div>
        </NavLink>
    );
};

export default Movie