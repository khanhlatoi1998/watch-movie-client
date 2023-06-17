import { NavLink } from "react-router-dom";
import { ItemType } from "../../constants/type/inex";

interface Props {
    item: ItemType;
}

const NavItem: React.FC<Props> = ({
    item: { link, label, active, icon }
}) => {
    return (
        <>
            <li className="font-medium cursor-pointer hover:text-color_01 transition duration-500">
                <NavLink to={link} className={({ isActive }) => (isActive ? "text-color_01 py-1 px-2" : "py-1 px-2")}>
                    {label}
                </NavLink>
                <span className="text-2xl">
                    {icon}
                </span>
            </li>
        </>
    );
};

export default NavItem;