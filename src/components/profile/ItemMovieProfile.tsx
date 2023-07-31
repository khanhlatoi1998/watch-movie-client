const ItemMoviePrfile = () => {
    return (
        <tr className="border-t border-solid border-border_02">
            <td className="text-sm text-left leading-6 whitespace-nowrap px-5 py-8">
                <div className="w-12 p-1 bg-color_02 border-solid border border-border h-12 rounded overflow-hidden">
                    <img className="h-full w-full object-cover" src="https://firebasestorage.googleapis.com/v0/b/netflixo-minah.appspot.com/o/cb51cbcb-05cf-43f3-a964-a9f37778bb78.webp?alt=media" alt="Game Of thrones" />
                </div>
            </td>
            <td className="text-sm text-left leading-6 whitespace-nowrap px-5 py-8 truncate max-w-[180px]">Game Of thrones</td>
            <td className="text-sm text-left leading-6 whitespace-nowrap px-5 py-8">Action</td>
            <td className="text-sm text-left leading-6 whitespace-nowrap px-5 py-8">English</td>
            <td className="text-sm text-left leading-6 whitespace-nowrap px-5 py-8">2011</td>
            <td className="text-sm text-left leading-6 whitespace-nowrap px-5 py-8">6hr</td>
            <td className="mt-[8px] text-sm text-left leading-6 whitespace-nowrap px-5 py-8 flex justify-end items-center gap-2">
                <button className="border border-border flex items-center bg-color_02 gap-2 text-border rounded py-1 px-2">
                    Edit
                    <i className="fa-regular fa-pen-to-square text-color_03"></i>
                </button>
                <a className="bg-color_01 text-white rounded flex justify-center items-center w-6 h-6" href="/movie/637cb36e3b231a4184b524d5">
                    <i className="fa-solid fa-trash-can"></i>
                </a>
            </td>
        </tr>
    )
};

export default ItemMoviePrfile;