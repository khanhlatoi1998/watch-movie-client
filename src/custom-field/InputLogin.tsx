
interface Props {
    type?: string;
    label?: string;
    placeholder?: string;
    name?: string;
    bg?: any;
    register?: any;
    value?: any;
    onChange?: any;
}
const InputLogin: React.FC<Props> = ({
    type, label, placeholder, name, bg, register, value, onChange
}) => {
    return (
        <div>
            <label htmlFor="">{label}</label>
            <input
            required
            name={name}
            value={value}
            onChange={onChange}
            {...register}
                type={type}
                placeholder={placeholder}
            />
        </div>
    );
};

export default InputLogin