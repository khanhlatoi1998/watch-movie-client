import { NavLink } from "react-router-dom";
import RatingStar from "../components/RatingStar";
import Cast from "../components/Cast";
import Reviews from "../components/Reviews";
import Related from "../components/Related";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Mousewheel, Pagination } from "swiper";

const Detail = () => {
    const a = [1, 3, 4];
    return (
        <section className="pt-[103px] bg-color_main">
            <div className="w-full xl:h-screen relative text-white">
                <img className="w-full hidden xl:inline-block h-full object-cover" src="https://firebasestorage.googleapis.com/v0/b/netflixo-minah.appspot.com/o/dd8a26a1-9a18-4149-b0ff-a86cb40b8aa6.jpeg?alt=media" alt="" />
                <div className="xl:bg-color_main bg-color_02 flex justify-center items-center xl:bg-opacity-90 xl:absolute top-0 left-0 right-0 bottom-0">
                    <div className="container px-3 mx-auto 2xl:px-24 xl:grid grid-cols-3 flex-wrap flex justify-center items-center py-10 lg:py-20 gap-8">
                        <div className="xl:col-span-1 w-full xl:order-none order-last set-h bg-color_02 border border-gray-800 rounded-lg overflow-hidden">
                            <img src="https://firebasestorage.googleapis.com/v0/b/netflixo-minah.appspot.com/o/bd92322f-9b2f-4a30-8284-dea0a98c8798.jpg?alt=media" alt="The Beast" className="w-full h-full object-cover" />
                        </div>
                        <div className="col-span-2 md:grid grid-cols-6 gap-4 items-center">
                            <div className="col-span-4 flex flex-col gap-10">
                                <p className="xl:text-4xl capitalize font-sans text-2xl font-bold"> The Beast</p>
                                <div className="flex items-center gap-4 font-medium text-dryGray">
                                    <div className="bg-color_01 text-xs px-2 py-1">HD 4K</div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-sm font-medium">Thriller</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <i className="text-xs text-color_01 fa-regular fa-calendar-days"></i>
                                        <span className="text-sm font-medium">2027</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <i className="text-xs text-color_01 fa-regular fa-clock"></i>
                                        <span className="text-sm font-medium">1 Hr</span>
                                    </div>
                                </div>
                                <p className="text-opacity_01 text-justify line-[10px] leading-7">Recently widowed Dr. Nate Daniels and his two teenage daughters travel to a South African game reserve managed by Martin Battles, an old family friend and wildlife biologist. However, what begins as a journey of healing soon turns into a fearsome fight for survival when a lion</p>
                                <div className="border border-solid border-border_02 p-6 rounded-lg bg-color_main grid sm:grid-cols-5 grid-cols-3 gap-4">
                                    <div className="col-span-1 border-r border-border border-solid flex justify-center items-center">
                                        <button className="w-10 h-10 flex-colo rounded-lg bg-white bg-opacity-20">
                                            <i className="fa-solid fa-share-nodes text-white"></i>
                                        </button>
                                    </div>
                                    <div className="col-span-2 flex justify-center items-center">
                                        Language: English
                                    </div>
                                    <NavLink to="" className="hover:bg-color_01 sm:col-span-2 col-span-3 bg-color_02 py-3 px-12 rounded-full border-2 border-solid border-color_01 flex justify-center items-center gap-4">
                                        <span>
                                            <i className="fa-solid fa-play text-white"></i>
                                        </span>
                                        <span>Watch</span>
                                    </NavLink>
                                </div>
                                <div className="text-yellow-500 mb-6 flex items-center gap-2 text-lg">
                                    <RatingStar rate={4} />
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
                            a.map((cast, idx) => {
                                return (
                                    <SwiperSlide key={idx}>
                                        <Cast />

                                    </SwiperSlide>
                                )
                            })
                        }

                    </Swiper>
                </div>
                <Reviews />
                <Related />
            </div>
        </section>
    );
};

export default Detail;