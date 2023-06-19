import { MovieType } from "../constants/type/inex";
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';

interface Props {
    rate: number;
}



const RatingStar: React.FC<Props> = ({ rate }) => {
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
        <>
            {
                ratingStar
            }
        </>

    );
};


export default RatingStar;