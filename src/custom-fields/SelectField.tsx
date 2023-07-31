import Select from 'react-select';

interface Props {
    name: string;
    classNameContainer: string;
    classNameSelect: string;
    placeholder: string;
    options: Array<any>;
    filed: any;
    form: any;
    label: string;
}


const SelectField: React.FC<Props> = (
    { name, classNameContainer, classNameSelect, placeholder, options, label }
) => {


    return (
        <div>
            <Select
                name={name} id=""
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
    );
}

export default SelectField;