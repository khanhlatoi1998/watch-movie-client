const AboutUs = () => {
    return (
        <section className="px-4 py-4 bg-color_main pt-[103px]">
            <div className="container mx-auto pt-6">
                <div className="relative md:pt-[24%] pt-[37%] rounded-md overflow-hidden">
                    <figure className="absolute top-0 left-0 w-full h-full">
                        <img src="./images/thumbnail.png" className="w-full h-full object-cover" alt="" />
                    </figure>
                    <p className="absolute top-0 left-0 w-full h-full flex justify-center items-center text-full font-bold">About Us</p>
                </div>
                <div className="md:py-20 py-12 gap-12 grid xl:grid-cols-2 grid-cols-1 items-center">
                    <div className="flex flex-col gap-6">
                        <p className="lg:text-full text-xl font-bold">Welcome to our Netflixo</p>
                        <p className="text-opacity_01 text-justify line-[10px] leading-7">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </p>
                        <div className="gap-6 mt-2 grid md:grid-cols-2 grid-cols-1 items-center justify-center">
                            <div className="bg-color_02 p-4 rounded-lg flex flex-col gap-2">
                                <p className="text-full font-bold">10K</p>
                                <p className="font-bold">Listed Movies</p>
                                <p className="text-opacity_01">Lorem Ipsum is simply dummy text of the printing and</p>
                            </div>
                            <div className="bg-color_02 p-4 rounded-lg flex flex-col gap-2">
                                <p className="text-full font-bold">8K</p>
                                <p className="font-bold">Lovely Users</p>
                                <p className="text-opacity_01">Completely free, without registration! Lorem Ipsum is simply</p>
                            </div>
                        </div>
                    </div>
                    <figure className="xl:block hidden">
                        <img src="./images/about_02.jpg" className="w-full  rounded-lg object-cover set-h" alt="" />
                    </figure>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;