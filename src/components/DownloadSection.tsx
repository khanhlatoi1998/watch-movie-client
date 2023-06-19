const DownloadSection = () => {
    return (
        <section className="bg-color_main px-4 lg:pt-16 pt-8">
            <div className="container mx-auto bg-color_02 lg:px-16 px-8 lg:py-12 py-8 flex flex-wrap">
                <div className="flex-1 flex flex-col justify-around gap-6">
                    <p className="lg:text-full text-xl font-bold">Download Your Movies Watch Offline. <br /> Enjoy On Your Mobile</p>
                    <p className="opacity-70 lg:leading-[32px] leading-[24px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries..</p>
                    <div className="flex items-center gap-6">
                        <div className="bg-black text-color_01 rounded px-4 py-3 min-w-[90px] text-center font-bold">HD 4K</div>
                        <div className="bg-black text-color_01 rounded px-4 py-3 min-w-[90px] text-center">
                            <i className="fa-regular fa-user mr-4"></i> 
                            <span className="font-bold">2K</span>
                        </div>
                    </div>
                </div>
                <div className="lg:w-[50%] w-full">
                    <img src="../images/view-mobile.png" alt="" />
                </div>
            </div>
        </section>
    );
};

export default DownloadSection;