
interface Props {
    text?: any;
}


const InlineError: React.FC<Props> = ({text}) => {

    return (
        <div className="text-red-800 w-full mt-2 text-xs font-medium">
            <p>{text}</p>
        </div>
    )
};  

export default InlineError;