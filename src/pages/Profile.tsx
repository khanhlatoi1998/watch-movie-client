import { useEffect, useState } from "react";
import ItemSidebarProfile from "../components/profile/ItemSidebarProfile";
import UpdateProfile from "../components/profile/UpdateProfile";
import FavoritesMovies from "../components/profile/FavoritesMovies";
import ChangePassword from "../components/profile/ChangePassword";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeUserInfo, saveUserInfo } from "../redux/sliceUserInfo";
import DashboardProfile from "../components/profile/DashboardProfile";
import MoviesListProfile from "../components/profile/MoivesListProfile";
import AddMovieProfile from "../components/profile/AddMovieProfile";
import { ItemDashboardType } from "../constants/type/inex";


const Profile = () => {
    const userInfo = useSelector((state: any) => state.userInfo);
    const [activeSidebar, setActiveSidebar] = useState<string>(userInfo.isAdmin ? 'dashboard' : 'update-profile');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    let listSidebar: ItemDashboardType[] = [];

    const listSidebarUser: ItemDashboardType[] = [
        {
            label: 'Update Profile',
            state: 'update-profile',
            icon: <i className="fa-solid fa-gear"></i>,
            href: 'update-profile',
            // onClick: () => { setActiveSidebar('update-profile') },
            component: <UpdateProfile />
        },
        {
            label: 'Favorites Movies',
            state: 'favorites-movies',
            icon: <i className="fa-solid fa-heart"></i>,
            href: 'favorites-movies',
            // onClick: () => { setActiveSidebar('favorites-movies') },
            component: <FavoritesMovies />
        },
        {
            label: 'Change Password',
            state: 'change-password',
            href: 'change-password',
            icon: <i className="fa-solid fa-lock"></i>,
            // onClick: () => { setActiveSidebar('change-password') },
            component: <ChangePassword />
        },
        {
            label: 'Log Out',
            state: '/',
            href: "/",
            icon: <i className="fa-solid fa-arrow-right-from-bracket"></i>,
            onClick: () => {
                dispatch(removeUserInfo({}));
                navigate('/');
            },
        }
    ];

    const listSidebarAdmin: ItemDashboardType[] = [
        {
            label: 'Dashboard',
            state: 'dashboard',
            href: 'dashboard',
            icon: <i className="fa-solid fa-table-columns"></i>,
            // onClick: () => { setActiveSidebar('dashboard') },
            component: <DashboardProfile />
        },
        // {
        //     label: 'Movies List',
        //     state: 'movies-list',
        //     href: 'movies-list',
        //     icon: <i className="fa-regular fa-rectangle-list"></i>,
        //     // onClick: () => { setActiveSidebar('movies-list') },
        //     component: <MoviesListProfile />
        // },
        {
            label: 'Add Movie',
            state: 'add-movie',
            href: 'add-movie',
            icon: <i className="fa-solid fa-location-crosshairs"></i>,
            // onClick: () => { setActiveSidebar('add-movie')},
            component: <AddMovieProfile />
        },
    ];

    if (userInfo.isAdmin) {
        listSidebar = [...listSidebarAdmin, ...listSidebarUser];
    } else {
        listSidebar = [...listSidebarUser];
    }

    return (
        <section className="bg-color_main pt-header">
            <div className="container xl:min-h-screen md:py-12 pb-12">
                <div className="xl:grid grid-cols-8 items-start xl:gap-8 gap-6">
                    <div className="col-span-2 bg-color_02 border border-border_02 border-solid p-6 rounded-lg">
                        <ul>
                            {
                                listSidebar.map((item: any, idx: number) => {
                                    return (
                                        <ItemSidebarProfile item={item} key={idx} setActiveSidebar={setActiveSidebar} activeSidebar={activeSidebar} />
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div  className={`transition duration-1000 xl:mt-0 mt-8 col-span-6 rounded-lg bg-color_02 border border-solid border-border_02 p-6`}>
                        <Outlet />
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Profile;