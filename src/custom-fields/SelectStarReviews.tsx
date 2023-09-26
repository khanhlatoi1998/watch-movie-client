import Select from 'react-select';
import RatingStar from '../components/RatingStar';
import InlineError from '../notfications/Error';

interface Props {
    name: string;
    placeholder: string;
    label: string;
    options: Array<any>;
    field: any;
    form: any;
}


const SelectStarReviews: React.FC<Props> = (
    {
        field, form,
        placeholder, options, label
    }
) => {
    const { name, value, onChange, onBlur } = field;
    const selectedOption = options.find((o) => o.value === value);
    const { errors, touched } = form;
    const showError = errors[name] && touched[name];

    const handlSelectedOptionChange = (selectedOption: any) => {
        let selectedValue = selectedOption ? selectedOption.value : selectedOption;
        form.setFieldValue(name, selectedValue);
    };
    return (
        <div className="">
            <label htmlFor="">{label}</label>
            <div className="bg-color_main border border-solid border-border rounded mt-2 mb-1">
                <Select
                    id=""
                    {...field}
                    onChange={handlSelectedOptionChange}
                    value={selectedOption}
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
            <div className="text-yellow-500 flex items-center gap-2 text-lg mt-4">
                <RatingStar rate={Number(value)} />
            </div>
        </div>
    );
}

export default SelectStarReviews;