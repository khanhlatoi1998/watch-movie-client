import Select from 'react-select';
import InlineError from '../notfications/Error';

interface Props {
    name: string;
    classNameContainer: string;
    classNameSelect: string;
    placeholder: string;
    options: Array<any>;
    field: any;
    form: any;
    label: string;
    type: string;
    disable: string;
}


const SelectField: React.FC<Props> = ({
    classNameContainer, classNameSelect, placeholder, options, label,
    form, field, type, disable
}
) => {

    const { name, value, onChange, onBlur } = field;
    const { errors, touched } = form;
    const showError = errors[name] && touched[name];

    const selectedOption = options.find((o) => o.value === value);

    const handlSelectedOptionChange = (selectedOption: any) => {
        let selectedValue = selectedOption ? selectedOption.value : selectedOption;
        form.setFieldValue(name, selectedValue);
    };


    return (
        <div>
            <label htmlFor="movieCategoryAdmin" className="text-text font-medium">{label}</label>
            <div className=" mt-2 bg-color_main border border-solid border-border_02 rounded flex-1">
                <Select
                    id={name}
                    {...field}
                    value={selectedOption}
                    onChange={handlSelectedOptionChange}

                    isDisabled={disable}
                    placeholder={placeholder}
                    options={options}
                    styles={{
                        placeholder: (baseStyles, state) => ({
                            ...baseStyles,
                            color: 'white'
                        }),
                        control: (baseStyles, state) => ({
                            ...baseStyles,
                            backgroundColor: 'transparent',
                            borderColor: 'red',
                            border: 0,
                            cursor: 'pointer',
                            boxShadow: 'none',
                            color: 'red',
                            padding: '4px 8px',

                        }),
                        container: (baseStyles, state) => ({
                            ...baseStyles,
                            color: 'black',
                            borderWidth: 0,
                            borderColor: 'red',
                        }),
                        singleValue: (baseStyles, state) => ({
                            ...baseStyles,
                            color: 'white'
                        }),
                        indicatorSeparator: (baseStyles, state) => ({
                            ...baseStyles,
                            width: 0
                        })
                    }}
                />
            </div>
            <InlineError text={showError && errors[name]} />
        </div>
    );
}

export default SelectField;