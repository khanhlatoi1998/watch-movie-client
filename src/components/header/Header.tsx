import { useState } from "react";
import { ItemType } from "../../constants/type/inex";
import NavItem from "./NavItem";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import userServices from "../../api/userServices";
import { useQuery } from "@tanstack/react-query";

const Header = () => {
    const items: Array<ItemType> = [
        {
            link: '/movies',
            label: 'Movies',
            active: false,
        },
        {
            link: '/about-us',
            label: 'About Us',
            active: false,
        },
        {
            link: '/contact-us',
            label: 'Contact Us',
            active: false,
        },
    ];
    const [openMenu, setOpenMenu] = useState<boolean>(false);
    const [openSearch, setOpenSearch] = useState<boolean>(false);
    const userInfo = useSelector((state: any) => state.userInfo);

    const { data, isLoading } = useQuery({
        queryKey: ['getLikeMovies'],
        queryFn: () => userServices.getFavoriteMovies(userInfo.token),
        staleTime: 100,
        keepPreviousData: true
    });

    return (
        <header className="bg-color_main block text-md fixed z-[100] inset-x-0">
            <div className="relative container mx-auto flex flex-row justify-between items-center md:gap-16 gap-8 py-6 px-4">
                <div className="lg:order-1 order-2">
                    <NavLink to="/" className="">
                        <img className="max-w-[146px] object-contain" src="../images/logo.png" alt="" />
                    </NavLink>
                </div>
                <div className={`lg:order-2 lg:block lg:static top-[100%] left-0 right-0 px-4 py-6 lg:px-0 lg:py-0 bg-color_02 lg:bg-transparent absolute ${openSearch ? 'block' : 'hidden'}`}>
                    <div className="flex justify-center items-stretch overflow-hidden rounded text-sm">
                        <div className="bg-color_01 flex justify-center items-center px-4 py-4">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </div>
                        <div>
                            <input
                                className="bg-white px-4 py-3 w-[300px] xl:w-[450px] text-black"
                                type="text"
                                placeholder="Search Movie Name from here"
                            />
                        </div>
                    </div>
                </div>
                <nav className="order-3 lg:flex-1 flex items-center lg:gap-6 gap-8 justify-end">
                    <ul className={` lg:flex justify-end lg:gap-6 gap-4 items-center ${openMenu ? 'flex flex-col absolute top-[100%] left-0 right-0 bg-color_02 px-8 pt-2 pb-3' : 'hidden'}`}>
                        {
                            items.map((item: ItemType, idx) => {
                                return (
                                    <NavItem key={idx} item={item} />
                                )
                            })
                        }
                    </ul>
                    <div className="flex justify-center items-center lg:gap-6 gap-4">
                        <span className="lg:hidden">
                            <i className={`fa-solid fa-magnifying-glass cursor-pointer p-1 ${openSearch ? 'hidden' : ''}`} onClick={() => setOpenSearch(true)}></i>
                            <i className={`fa-solid fa-xmark text-xl cursor-pointer p-1 ${openSearch ? '' : 'hidden'}`} onClick={() => setOpenSearch(false)}></i>
                        </span>
                        <NavLink to="/login" className={({ isActive }) => (isActive ? "hover:text-color_01 transition duration-500 p-1 text-color_01" : "hover:text-color_01 transition duration-500 p-1")}>
                            {
                                userInfo
                                    ? (<figure>
                                        <img className="w-8 h-8 rounded-full border border-solid object-cover border-color_01" src={userInfo?.image} alt="" />
                                    </figure>)
                                    : (<i className="fa-regular fa-user"></i>)
                            }
                        </NavLink>
                        <NavLink to="/profile/favorites-movies" className="p-1 hover:text-color_01 relative">
                            <i className="fa-solid fa-heart text-2xl"></i>
                            <div className="w-[21px] h-[21px] rounded-full bg-color_01 absolute left-[50%] top-0 translate-x-[-50%] translate-y-[-100%] flex flex-col justify-center items-center">
                                <p className="text-xs text-white font-medium">{data?.length || 0}</p>
                            </div>
                        </NavLink>
                    </div>
                </nav>
                <div className="block lg:hidden lg:order-4 order-1">
                    <button className="p-1" onClick={() => { setOpenMenu(e => !e) }}>
                        <i className="fa-solid fa-bars text-[25px]"></i>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;