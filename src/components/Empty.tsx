

interface Props {
    message: string;
}

const Empty: React.FC<Props> = ({message}) => {
    return (
        <div className="flex items-center justify-center flex-col w-full py-12 px-4 rounded border border-solid border-border bg-color_main gap-4">
            <div className="flex flex-col justify-center items-center w-24 h-24 p-5 rounded-full bg-color_02 text-color_01 text-4xl">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M12 20h8v2h-8C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10a9.956 9.956 0 0 1-2 6h-2.708A8 8 0 1 0 12 20zm0-10a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-4 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm8 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-4 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"></path>
                    </g>
                </svg>
            </div>
            <p className="text-border text-sm">{message}</p>
        </div>
    );
}

export default Empty;