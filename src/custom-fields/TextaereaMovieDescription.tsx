import InlineError from "../notfications/Error";

interface Props {
    name: string;
    placeholder: string;
    label: string;
    field: any;
    form: any;
}


const TextaereaMovieDescription: React.FC<Props> = ({
    label, placeholder,
    field, form
}) => {

    const { value, name, onChange, onBlur } = field;
    const { errors, touched } = form;
    const showError = errors[name] && touched[name];

    return (
        <div>
            <label htmlFor="" className="text-text font-medium">{label}</label>
            <textarea
                {...field}
                placeholder={placeholder}
                className="p-4 border border-border mt-2 text-white rounded bg-color_main w-full h-[160px]"
                id={name}
            ></textarea>
            <InlineError text={showError && errors[name]} />
        </div>
    );
};

export default TextaereaMovieDescription;