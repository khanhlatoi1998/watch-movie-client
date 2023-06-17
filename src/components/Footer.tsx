const Footer = () => {
    return (
        <footer className="bg-color_02 px-4 lg:py-10 py-4">
            <div className="max-w-xl mx-auto">
                <div className="grid lg:grid-cols-4 grid-cols-2">
                    <div className="px-4 lg:py-6 py-4">
                        <p className="text-white font-medium text-lg">
                            Company
                        </p>
                        <ul className="mt-8 flex flex-col gap-2 text-[#ffffff40]">
                            <li>
                                <a href="#" className="py-1 hover:text-color_01 ">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#" className="py-1 hover:text-color_01 ">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="#" className="py-1 hover:text-color_01 ">
                                    Contact Us
                                </a>
                            </li>
                            <li>
                                <a href="#" className="py-1 hover:text-color_01 ">
                                    Movies
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="px-4 lg:py-6 py-4">
                        <p className="text-white font-medium text-lg">
                            Top Categories
                        </p>
                        <ul className="mt-8 flex flex-col gap-2 text-[#ffffff40]">
                            <li>
                                <a href="#" className="py-1 hover:text-color_01 ">
                                    Romantic
                                </a>
                            </li>
                            <li>
                                <a href="#" className="py-1 hover:text-color_01 ">
                                    Drama
                                </a>
                            </li>
                            <li>
                                <a href="#" className="py-1 hover:text-color_01 ">
                                    Historical
                                </a>
                            </li>
                            <li>
                                <a href="#" className="py-1 hover:text-color_01 ">
                                    Action
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="px-4 lg:py-6 py-4">
                        <p className="text-white font-medium text-lg">
                            My Account
                        </p>
                        <ul className="mt-8 flex flex-col gap-2 text-[#ffffff40]">
                            <li>
                                <a href="#" className="py-1 hover:text-color_01 ">
                                    Dashboard
                                </a>
                            </li>
                            <li>
                                <a href="#" className="py-1 hover:text-color_01 ">
                                    My Favorites
                                </a>
                            </li>
                            <li>
                                <a href="#" className="py-1 hover:text-color_01 ">
                                    Profile
                                </a>
                            </li>
                            <li>
                                <a href="#" className="py-1 hover:text-color_01 ">
                                    Change Password
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="px-4 lg:py-6 py-4">
                        <figure className="text-white font-medium text-lg">
                            <a href="#">
                                <img src="./images/logo.png" className="w-2/4 object-contain" alt="" />
                            </a>
                        </figure>
                        <div className="mt-4 flex flex-col gap-2 text-[#ffffff40]">
                            <p>
                                Lorem 196 Andrew Road, Suite 200,
                                New York, NY 10007
                            </p>
                            <p>
                                Tell: +255 754 661 423
                            </p>
                            <p>
                                Email: info@zpunet.com
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer >
    );
};

export default Footer;
