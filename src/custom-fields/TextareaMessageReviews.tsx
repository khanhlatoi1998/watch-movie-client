import InlineError from "../notfications/Error";

interface Props {
    name: string;
    placeholder: string;
    label: string;
    field: any;
    form: any;
}


const TextareaMessageReviews: React.FC<Props> = ({
    field, form,
    label, placeholder

}) => {
    const { name, value, onChange, onBlur } = field;
    const { errors, touched } = form;
    const showError = errors[name] && touched[name];

    return (
        <div>
            <label htmlFor="">{label}</label>
            <textarea
                id=""
                {...field}
                placeholder={placeholder}
                className="p-4 border border-border mt-2 text-white rounded bg-color_main w-full h-[160px]"
            ></textarea>
            <InlineError text={showError && errors[name]} />
        </div>
    );
};

export default TextareaMessageReviews;