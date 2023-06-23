import { useState } from "react";
import ItemSidebarProfile from "./ItemSidebarProfile";


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
            <div className="container min-h-screen md:py-12 py-6">
                <div className="flex flex-wrap xl:gap-8 gap-6">
                    <div className="xl:w-[300px] w-full bg-color_02 border border-border_02 border-solid p-6 rounded-lg">
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
                    <div className="rounded-lg bg-color_02 flex-1 border border-solid border-border_02 p-6">
                        <p className="text-title lg:text-title-lg font-bold">Profile</p>
                        <div>
                            <input type="text" />
                            <figure>
                                <img src="" alt="" />
                            </figure>
                        </div>
                        <div>
                            <label htmlFor="">Name</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label htmlFor="">Email</label>
                            <input type="text" />
                        </div>
                        <div className="flex justify-between items-center">
                            <button>De</button>
                            <button></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Profile;