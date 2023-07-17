
interface Props {
    text?: string;
}


const InlineError: React.FC<Props> = ({ text }) => {
    return (
        <p className="text-color_01 min-h-[23px] font-normal text-[14px]">
           {text}
        </p>
    )
};

export default InlineError;