import { AddCastType } from "../constants/type/inex";

interface Props {
    cast: AddCastType;
}


const Cast: React.FC<Props> = ({
    cast: {
        nameCast, imgCast
    }
}) => {
    return (
        <div className="border border-solid border-border_02 p-3 rounded bg-color_02">
            <figure className="relative pt-[98%]">
                <img className="w-full h-full object-cover rounded absolute top-0 left-0" src={imgCast} alt="" />
            </figure>
            <p className="mt-4 text-center italic text-opacity_01 text-sm">{nameCast}</p>
        </div>
    )
};

export default Cast;