import { MovieType } from "../constants/type/inex";
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
import RatingStar from "./RatingStar";

interface Props {
    movie: MovieType;
}

const ItemTopRated: React.FC<Props> = ({
    movie: {
        link,
        img,
        thumbnail,
        name,
        userId,
        desc,
        category,
        language,
        year,
        time,
        video,
        rate,
        numberOfReviews,
        // reviews: [reviewSchema],
        // reviews: [],
        casts
    }
}) => {
    const ratingStar = Array.from({ length: 5 }, (ele, idx) => {
        let number: number = idx + 0.5;
        return (
            <span key={idx}>
                {
                    rate >= idx + 1
                        ? (
                            <BsStarFill />
                        )
                        : rate >= number
                            ? (
                                <BsStarHalf />
                            )
                            : (
                                <BsStar />
                            )

                }
            </span>
        )
    })

    return (
        <div className="group relative hover:bg-black bg-color_02 cursor-pointer border overflow-hidden border-solid border-gray-500 p-4 rounded-lg">
            <div className="relative md:pt-[123%] pt-[65%]">
                <img src={img} alt="" className="absolute top-0 left-0 w-full h-full rounded-lg object-cover" />
            </div>
            <div className="hidden absolute px-8 py-12 top-0 left-0 w-full h-full group-hover:flex flex-col  justify-around items-center bg-[#000000ad]" >
                <span className="w-[41px] h-[41px] hover:bg-color_01 rounded-full transition duration-500 bg-[#ffffff59] flex items-center justify-center">
                    <i className="fa-solid fa-heart"></i>
                </span>
                <p className="truncate font-medium text-title lg:text-title-lg text-center w-full">{name}</p>
                <div className="text-yellow-500 flex justify-center items-center gap-1">
                    <RatingStar rate={rate} />
                </div>
            </div>
        </div>
    );
};

export default ItemTopRated;