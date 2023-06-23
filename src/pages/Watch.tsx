const Watch = () => {
    return (
        <section className="pt-header pb-12 bg-color_main">
            <div className="container">
                <div className="p-8  bg-color_02">
                    <div className="rounded border-border_02 border border-solid gap-2 p-6 bg-color_main flex-wrap flex items-center justify-between">
                        <button className="flex items-center gap-4">
                            <span>
                                <i className="fa-solid fa-arrow-left-long"></i>
                            </span>
                            <p className="lg:text-title-lg text-title font-bold">Name</p>
                        </button>
                        <div className="flex items-center sm:w-auto w-full gap-5 sm:justify-center justify-between">
                            <div className="bg-white-op-30 py-2 px-4 rounded hover:text-color_01 transition duration-500 cursor-pointer">
                                <i className="fa-solid fa-heart"></i>
                            </div>
                            <button className="flex gap-2 rounded py-3 px-8 bg-color_01 hover:text-color_main transition duration-500">
                                <span>
                                    <i className="fa-solid fa-cloud-arrow-down"></i>
                                </span>
                                Download
                            </button>
                        </div>
                    </div>
                    <div className="mt-6">
                        <img src="https://firebasestorage.googleapis.com/v0/b/netflixo-minah.appspot.com/o/dd8a26a1-9a18-4149-b0ff-a86cb40b8aa6.jpeg?alt=media" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Watch;