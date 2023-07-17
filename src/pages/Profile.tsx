import { useState } from "react";
import ItemSidebarProfile from "../components/profile/ItemSidebarProfile";
import UpdateProfile from "../components/profile/UpdateProfile";
import FavoritesMovies from "../components/profile/FavoritesMovies";
import ChangePassword from "../components/profile/ChangePassword";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeUserInfo, saveUserInfo } from "../redux/sliceUserInfo";


const Profile = () => {
    const [activeSidebar, setActiveSidebar] = useState<string>('update-profile');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const listSidebar = [
        {
            label: 'Update Profile',
            state: 'update-profile',
            icon: <i className="fa-solid fa-gear"></i>,
            onClick: () => { setActiveSidebar('update-profile') }
        },
        {
            label: 'Favorites Movies',
            state: 'favorites-movies',
            icon: <i className="fa-solid fa-heart"></i>,
            onClick: () => { setActiveSidebar('favorites-movies') }
        },
        {
            label: 'Change Password',
            state: 'change-password',
            icon: <i className="fa-solid fa-lock"></i>,
            onClick: () => { setActiveSidebar('change-password') }
        },
        {
            label: 'Log Out',
            state: 'log-out',
            icon: <i className="fa-solid fa-arrow-right-from-bracket"></i>,
            onClick: () => {
                dispatch(removeUserInfo({}));
                navigate('/');
            }
        }
    ];

    return (
        <section className="bg-color_main pt-header">
            <div className="container xl:min-h-screen md:py-12 pb-12">
                <div className="xl:grid grid-cols-8 items-start xl:gap-8 gap-6">
                    <div className="col-span-2 bg-color_02 border border-border_02 border-solid p-6 rounded-lg">
                        <ul>
                            {
                                listSidebar.map((item, idx) => {
                                    return (
                                        <ItemSidebarProfile item={item} key={idx} setActiveSidebar={setActiveSidebar} activeSidebar={activeSidebar} />
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className={`${activeSidebar === 'update-profile' ? 'block' : 'hidden'} transition duration-1000 xl:mt-0 mt-8 col-span-6 rounded-lg bg-color_02 border border-solid border-border_02 p-6`}>
                        <UpdateProfile />
                    </div>
                    <div className={`${activeSidebar === 'favorites-movies' ? 'block' : 'hidden'} transition duration-500 xl:mt-0 mt-8 col-span-6 rounded-lg bg-color_02 border border-solid border-border_02 p-6`}>
                        <FavoritesMovies />
                    </div>
                    <div className={`${activeSidebar === 'change-password' ? 'block' : 'hidden'} transition duration-500 xl:mt-0 mt-8 col-span-6 rounded-lg bg-color_02 border border-solid border-border_02 p-6`}>
                        <ChangePassword />
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Profile;