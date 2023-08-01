import InlineError from "../notfications/Error";

interface Props {
    form: any;
    field: any;
    accept: string;
    type: string;
}


const InputFileVideoField: React.FC<Props> = ({
    form, field,
    type, accept,
}) => {

    const { name, value, onChange, onBlur } = field;
    const {errors, touched} = form;
    const showError = errors[name] && touched[name];
    const onChangeFile = (e: any) => {

        form.setFieldValue(name, e.target.files[0]);
    };

    return (
        <>
            <input
                {...field}
                value={""}
                onChange={onChangeFile}
                type={type}
                className="hidden"
                name={name}
                accept={accept}
                id={name}
            />
            <InlineError text={showError && errors[name]} />
        </>
    );
};

export default InputFileVideoField;