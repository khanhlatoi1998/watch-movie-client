import { HeroType } from "../../constants/type/inex";

interface Props {
    hero: HeroType
}


const HeroItem: React.FC<Props> = ({
    hero: { link, img, name, category, date, duration }
}) => {
    return (
        <div className="hero relative w-full h-full rounded overflow-hidden">
            <img className="absolute top-0 left-0 w-full h-full object-cover" src={img} alt="" />
            <div className="absolute w-full h-full z-1 xl:pl-52 sm:pl-32 pl-8 top-0 bottom-0 right-0 left-0 flex flex-col justify-center lg:gap-8 md:gap-5 gap-4">
                <p className="py-2 xl:text-4xl truncate capitalize lg:text-full text-xl font-bold">{name}</p>
                <div className="flex items-center justify-start gap-6 font-medium">
                    <span className="">{category}</span>
                    <span><i className="fa-regular fa-calendar-days mr-2 text-color_01 text-[10px]"></i>{date}</span>
                    <span><i className="fa-regular fa-clock mr-2 text-color_01 text-[10px]"></i> {duration}</span>
                </div>
                <div className="flex items-center gap-6">
                    <button className="bg-color_01 md:py-3 md:px-8  py-2 px-6 font-medium rounded text-md hover:text-black transition duration-500">Watch</button>
                    <div className="bg-white-op-30 py-2 px-3 rounded hover:text-color_01 transition duration-500 cursor-pointer">
                        <i className="fa-solid fa-heart"></i>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default HeroItem;