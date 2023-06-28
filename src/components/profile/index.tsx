import { useState } from "react";
import ItemSidebarProfile from "./ItemSidebarProfile";
import UpdateProfile from "./UpdateProfile";
import FavoritesMovies from "./FavoritesMovies";
import ChangePassword from "./ChangePassword";


const Profile = () => {

    const listSidebar = [
        {
            label: 'Update Profile',
            state: 'update-profile',
            icon: <i className="fa-solid fa-gear"></i>
        },
        {
            label: 'Favorites Movies',
            state: 'favorites-movies',
            icon: <i className="fa-solid fa-heart"></i>
        },
        {
            label: 'Change Password',
            state: 'change-password',
            icon: <i className="fa-solid fa-lock"></i>
        },
        {
            label: 'Log Out',
            state: 'log-out',
            icon: <i className="fa-solid fa-arrow-right-from-bracket"></i>
        }
    ];

    const [activeSidebar, setActiveSidebar] = useState<string>('update-profile');


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
                    <div className={`${activeSidebar === 'update-profile' ? 'block' : 'hidden'} hover:bg-color_01 transition duration-1000 xl:mt-0 mt-8 col-span-6 rounded-lg bg-color_02 border border-solid border-border_02 p-6`}>
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