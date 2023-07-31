interface Props {
    name: string;
    placeholder: string;
    label: string;
    filed: any;
    form: any;
}


const TextaereaMovieDescription: React.FC<Props> = ({
    name, label, placeholder

}) => {
    return (
        <div>
            <label htmlFor="" className="text-text font-medium">{label}</label>
            <textarea
                placeholder={placeholder}
                className="p-4 border border-border mt-2 text-white rounded bg-color_main w-full h-[160px]"
                name=""
                id=""
            ></textarea>
        </div>
    );
};

export default TextaereaMovieDescription;