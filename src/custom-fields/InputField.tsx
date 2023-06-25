
interface Props {
    type?: string;
    label?: string;
    placeholder?: string;
    name?: string;
    bg?: any;
    value?: any;
    onChange?: any;
    field: any;
    form: any;
}
const InputField: React.FC<Props> = ({
    type, label, placeholder,
    field, form
}) => {

    const { name, value, onChange, onBlur } = field;
    const { errors, touched } = form;
    const showError = errors[name] && touched[name];


    return (
        <div className="mb-[-23px]">
            <label htmlFor="" className="text-text font-medium">{label}</label>
            <br />
            <input
                className="mt-2 p-5 border-border border rounded border-solid w-full bg-color_main"
                name={name}
                {...field}
                type={type}

                placeholder={placeholder}
            />
            <p className="text-color_01 min-h-[23px] font-normal text-[14px]">{showError && errors[name]}</p>
        </div>
    );
};

export default InputField