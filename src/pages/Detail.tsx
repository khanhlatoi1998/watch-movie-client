import { Link, NavLink, useParams } from "react-router-dom";
import RatingStar from "../components/RatingStar";
import Cast from "../components/Cast";
import Reviews from "../components/Reviews";
import Related from "../components/Related";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Mousewheel, Pagination } from "swiper";
import { useQuery } from "@tanstack/react-query";
import movieServices from "../api/movieServices";
import { AddCastType } from "../constants/type/inex";
import { useEffect, useState } from "react";
import TopRate from "../components/TopRated";

const Detail = () => {
    const [openMovie, setOpenMovie] = useState<boolean>(false);
    let { id } = useParams();

    const { data, isLoading, refetch } = useQuery({
        queryKey: ['detailMovie'],
        queryFn: () => movieServices.getMovieById(id),
        staleTime: 1000,
        keepPreviousData: true
    });

    useEffect(() => {
        refetch()
    }, [id]);


    return (
        <section className="pt-[103px] bg-color_main">
            <div className="w-full xl:h-screen relative text-white">
                <img className="w-full hidden xl:inline-block h-full object-cover" src={data?.imageWithTitleValue} alt="" />
                <div className="xl:bg-color_main bg-color_02 flex justify-center items-center xl:bg-opacity-90 xl:absolute top-0 left-0 right-0 bottom-0">
                    <div className="container px-3 mx-auto 2xl:px-24 xl:grid grid-cols-3 flex-wrap flex justify-center items-center py-10 lg:py-20 gap-8">
                        <div className="xl:col-span-1 w-full xl:order-none order-last set-h bg-color_02 border border-gray-800 rounded-lg overflow-hidden">
                            <img src={data?.imageWithThumbnailValue} alt="The Beast" className="w-full h-full object-fill" />
                        </div>
                        <div className="col-span-2 md:grid grid-cols-6 gap-4 items-center">
                            <div className="col-span-4 flex flex-col gap-10">
                                <p className="xl:text-4xl capitalize font-sans text-2xl font-bold">{data?.movieTitle}</p>
                                <div className="flex items-center gap-4 font-medium text-dryGray">
                                    <div className="bg-color_01 text-xs px-2 py-1">HD 4K</div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-sm font-medium">Thriller</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <i className="text-xs text-color_01 fa-regular fa-calendar-days"></i>
                                        <span className="text-sm font-medium">{data?.year}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <i className="text-xs text-color_01 fa-regular fa-clock"></i>
                                        <span className="text-sm font-medium">{data?.hours} Hr</span>
                                    </div>
                                </div>
                                <p className="text-opacity_01 text-justify line-[10px] leading-7">{data?.movieDescription}</p>
                                <div className="border border-solid border-border_02 p-6 rounded-lg bg-color_main grid sm:grid-cols-5 grid-cols-3 gap-4">
                                    <div className="col-span-1 border-r border-border border-solid flex justify-center items-center">
                                        <button className="w-10 h-10 flex-colo rounded-lg bg-white bg-opacity-20">
                                            <i className="fa-solid fa-share-nodes text-white"></i>
                                        </button>
                                    </div>
                                    <div className="col-span-2 flex justify-center items-center">
                                        Language: English
                                    </div>
                                    <Link to={data?.video} className="hover:bg-color_01 sm:col-span-2 col-span-3 bg-color_02 py-3 px-12 rounded-full border-2 border-solid border-color_01 flex justify-center items-center gap-4">
                                        <span>
                                            <i className="fa-solid fa-play text-white"></i>
                                        </span>
                                        <span>Watch</span>
                                    </Link>
                                    {/* {
                                        openMovie ? (
                                            <div className="bg-black fixed top-0 left-0 right-0 bottom-0 p-4 flex justify-center items-center flex-col z-[999]">
                                                <video src={data?.video} className="max-w-full max-h-full" controls></video>
                                            </div>
                                        ) : (<></>)
                                    } */}
                                </div>
                                <div className="text-yellow-500 mb-6 flex items-center gap-2 text-lg">
                                    <RatingStar rate={Number(data?.rate)} />
                                </div>
                            </div>
                            <div className="col-span-2 md:mt-0 mt-2 flex justify-end">
                                <button className="md:w-2/6 w-full relative flex justify-center items-center bg-color_01 hover:bg-transparent border-2 border-color_01 transitions md:h-64 h-20 rounded font-medium">
                                    <div className="flex-rows flex gap-6 text-md uppercase tracking-widest absolute md:rotate-90">
                                        Download
                                        <i className="fa-solid fa-download"></i>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto pt-12">
                <div>
                    <div className="flex items-center gap-8">
                        <span>
                            <i className="text-color_01 fa-solid fa-users text-2xl"></i>
                        </span>
                        <p className="font-bold lg:text-title-lg text-title">Casts</p>
                    </div>
                    <Swiper
                        slidesPerView={2}
                        spaceBetween={30}
                        loop={true}
                        autoplay={true}
                        breakpoints={{
                            640: {
                                slidesPerView: 3,
                                spaceBetween: 40
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 40
                            },
                        }}
                        modules={[Mousewheel, Pagination, Autoplay]}
                        className="mt-8"
                    >
                        {
                            data?.casts.map((cast: AddCastType, idx: number) => {
                                return (
                                    <SwiperSlide key={idx}>
                                        <Cast cast={cast} />
                                    </SwiperSlide>
                                )
                            })
                        }

                    </Swiper>
                </div>
                <Reviews reviews={data?.reviews} />
                {/* <Related /> */}
                <TopRate refetch={refetch} />
            </div>
        </section>
    );
};

export default Detail;