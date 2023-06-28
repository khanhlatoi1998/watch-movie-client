interface Props {
    item: any;
    activeSidebar: string;
    setActiveSidebar: any;
}



const ItemSidebarProfile: React.FC<Props> = (
    {
        item: { icon, label, state },
        activeSidebar,
        setActiveSidebar
    }
) => {
    return (
        <li onClick={() => { setActiveSidebar(state) }} className={`${activeSidebar === state ? 'bg-white text-color_01' : 'hover:bg-color_main'} cursor-pointer rounded font-medium text-sm transition duration-500 flex gap-3 items-center p-4`}>
            {icon}
            <span className="cursor-pointer">{label}</span>
        </li>
    )
};

export default ItemSidebarProfile;