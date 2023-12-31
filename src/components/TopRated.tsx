import { A11y, Autoplay, Navigation, Pagination } from "swiper";
import { MovieType } from "../constants/type/inex";
import ItemTopRated from "./ItemTopRated";
import { SwiperSlide, Swiper, useSwiper } from "swiper/react";
import React, { useRef, useState } from "react";
import { listMoves } from "../data";
import movieServices from "../api/movieServices";
import { useQuery } from "@tanstack/react-query";
import Loader from "./Loader";


const TopRate: React.FC<{refetch?: any}> = () => {

    const { data, isLoading } = useQuery({
        queryKey: ['moviesServices'],
        queryFn: () => movieServices.getRatedTopMovies(),
        staleTime: 1000,
        keepPreviousData: true
    });

    return (
        <section className="top-rated bg-color_main lg:pt-12 pt-8 pb-[70px]">
            <div className="container mx-auto px-4">
                <div className="flex items-center gap-6 lg:text-title-lg  text-title font-bold">
                    <span><i className="fa-solid fa-medal text-color_01"></i></span>
                    <p>Top Rated</p>
                </div>
                {
                    data ? (<div className="lg:mt-8 mt-6">
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={40}
                            slidesPerGroup={1}
                            // navigation={true}
                            loop={true}
                            // autoplay={true}

                            navigation={{
                                prevEl: '.button-prev',
                                nextEl: '.button-next',
                            }}

                            breakpoints={{
                                640: {
                                    slidesPerView: 2,
                                    spaceBetween: 40
                                },
                                1024: {
                                    slidesPerView: 4,
                                    spaceBetween: 40
                                },
                            }}
                            pagination={{
                                el: '.swiper-pagination',
                                clickable: true,
                                enabled: false
                            }}
                            modules={[Pagination, Navigation, Autoplay, A11y]}
                        >
                            {
                                data?.map((movie: MovieType, idx: number) => {
                                    return (
                                        <SwiperSlide key={idx}>
                                            <ItemTopRated movie={movie} />
                                        </SwiperSlide>
                                    )
                                })
                            }
                            <div className="flex px-4 lg:pt-12 pt-8 justify-center items-center gap-6">
                                <div className="w-[32px] h-[32px] bg-color_01 rounded-md flex justify-center items-center button-prev hover:bg-color_02 transition duration-500" >
                                    <i className="fa-solid fa-caret-left"></i>
                                </div>
                                <div className="w-[32px] h-[32px] bg-color_01 rounded-md flex justify-center items-center button-next hover:bg-color_02 transition duration-500" >
                                    <i className="fa-solid fa-caret-right"></i>
                                </div>
                            </div>
                        </Swiper>
                    </div>)
                        : (<div className="flex flex-col justify-center items-center min-h-[260px]">
                            <Loader loading={true} />
                        </div>)
                }
            </div>
        </section>
    );
};

export default TopRate;