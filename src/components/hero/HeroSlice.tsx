import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Mousewheel, Pagination, Autoplay } from "swiper";
import HeroItem from "./HeroItem";
import { HeroType } from "../../constants/type/inex";
import { delay } from "@reduxjs/toolkit/dist/utils";

const HeroSlice = () => {

    const listHero: Array<HeroType> = [
        {
            link: 'data:image/jpeg;base64,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',
            img: 'https://wallpapers.com/images/high/chill-aesthetic-in-the-mountains-rndqn879078iujhv.webp',
            name: 'Game',
            category: 'cate',
            date: '12/123',
            duration: 130
        },
        {
            link: 'data:image/jpeg;base64,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',
            img: 'https://wallpapers.com/images/high/chill-aesthetic-in-the-mountains-rndqn879078iujhv.webp',
            name: 'Game',
            category: 'cate',
            date: '12/123',
            duration: 130
        }
    ]
    return (
        <section className="hero-slice pt-[103px] bg-color_main py-6 px-4">
            <div className="max-w-xl mx-auto relative lg:pt-[25%] md:pt-[33%] pt-[48%]">
                <div className="absolute top-0 left-0 w-full h-full">
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
                            listHero.map((hero: HeroType, idx) => {
                                return (
                                    <SwiperSlide key={idx}>
                                        <HeroItem hero={hero} />
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default HeroSlice;