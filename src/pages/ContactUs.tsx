const ContactUs = () => {
    return (
        <section className="bg-color_main pt-[103px]">
            <div className="container mx-auto pt-6 px-4">
                <div className="relative md:pt-[24%] pt-[40%] rounded-md overflow-hidden">
                    <figure className="absolute top-0 left-0 w-full h-full">
                        <img src="./images/thumbnail.png" className="w-full h-full object-cover" alt="" />
                    </figure>
                    <p className="absolute top-0 left-0 w-full h-full flex justify-center items-center text-full font-bold">Contact Us</p>
                </div>
                <div className="grid lg:grid-cols-3 grid-cols-1 gap-8 py-12">
                    <div className="rounded-lg border border-solid border-border bg-color_02 p-8">
                        <div className="flex flex-col justify-center items-center gap-2 text-center">
                            <span className="bg-color_main lg:w-20 lg:h-20 w-16 h-16 rounded-full flex justify-center items-center text-2xl">
                                <i className="fa-regular fa-envelope text-color_01"></i>
                            </span>
                            <p className="font-bold lg:text-title-lg text-title">Email Us</p>
                            <p>
                                <span className="text-blue-500">info@zpunet.com Interactively </span>
                                grow backend ideas for cross-platform models.
                            </p>
                        </div>
                    </div>
                    <div className="rounded-lg border border-solid border-border bg-color_02 p-8">
                        <div className="flex flex-col justify-center items-center gap-2 text-center">
                            <span className="bg-color_main lg:w-20 lg:h-20 w-16 h-16 rounded-full flex justify-center items-center text-2xl">
                                <i className="fa-solid fa-phone-volume text-color_01"></i>
                            </span>
                            <p className="font-bold lg:text-title-lg text-title">Call Us</p>
                            <p>
                                <span className="text-blue-500">+255 789 456 123 </span>
                                Distinctively exploit optimal alignments for intuitive bandwidth.
                            </p>
                        </div>
                    </div>
                    <div className="rounded-lg border border-solid border-border bg-color_02 p-8">
                        <div className="flex flex-col justify-center items-center gap-2 text-center">
                            <span className="bg-color_main lg:w-20 lg:h-20 w-16 h-16 rounded-full flex justify-center items-center text-2xl">
                                <i className="fa-solid fa-location-dot text-color_01"></i>
                            </span>
                            <p className="font-bold lg:text-title-lg text-title">Location</p>
                            <p>
                                Dar es salaam, Tanzania. 345 Kigamboni, Street No. 12,
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default ContactUs