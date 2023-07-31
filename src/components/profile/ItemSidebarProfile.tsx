import { NavLink } from "react-router-dom";

interface Props {
    item: any;
    activeSidebar: string;
    setActiveSidebar: any;
    onClick?: Function;
}

const ItemSidebarProfile: React.FC<Props> = (
    {
        item: { icon, label, state, onClick },
        activeSidebar,
        setActiveSidebar
    }
) => {
    return (
        <li >
            <NavLink to={`${state}`} onClick={onClick} className={({isActive}) => (`${isActive ? 'bg-white text-color_01' : 'hover:bg-color_main'} cursor-pointer rounded font-medium text-sm transition duration-500 p-4 flex gap-3 items-center`)}>
                {icon}
                <span className="cursor-pointer">{label}</span>
            </NavLink>
        </li>
    )
};

export default ItemSidebarProfile;