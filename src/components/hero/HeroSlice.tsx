import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Mousewheel, Pagination, Autoplay } from "swiper";
import HeroItem from "./HeroItem";
import { HeroType, MovieType } from "../../constants/type/inex";
import { delay } from "@reduxjs/toolkit/dist/utils";
import movieServices from "../../api/movieServices";
import { useQuery } from "@tanstack/react-query";
import { date } from "yup";
import Loader from "../Loader";


interface Props {
    popularMovies: MovieType[];
}

const HeroSlice: React.FC<Props> = ({ popularMovies }) => {
    return (
        <section className="hero-slice pt-[103px] bg-color_main py-6 px-4">
            <div className="container mx-auto relative lg:pt-[25%] md:pt-[33%] pt-[48%]">
                <div className="absolute top-0 left-0 w-full h-full">
                    {
                        popularMovies ? (
                            <Swiper
                                direction={"vertical"}
                                slidesPerView={1}
                                spaceBetween={30}
                                loop={true}
                                autoplay={true}
                                mousewheel={true}
                                pagination={{
                                    clickable: true,
                                }}
                                modules={[Mousewheel, Pagination, Autoplay]}
                                className="mySwiper"
                            >
                                {
                                    popularMovies?.slice(0, 3).map((movie: any, idx: number) => {
                                        return (
                                            <SwiperSlide key={idx}>
                                                <HeroItem movie={movie} />
                                            </SwiperSlide>
                                        )
                                    })
                                }
                            </Swiper>)
                            : (<div className="flex flex-col justify-center items-center min-h-[220px]"><Loader loading={true} /></div>)
                    }
                </div>
            </div>
        </section>
    );
};

export default HeroSlice;