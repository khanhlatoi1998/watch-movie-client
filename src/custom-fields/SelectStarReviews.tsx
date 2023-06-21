import Select from 'react-select';
import RatingStar from '../components/RatingStar';

interface Props {
    name: string;
    placeholder: string;
    label: string;
    options: Array<any>;
    filed: any;
    form: any;
}


const SelectStarReviews: React.FC<Props> = (
    { name, placeholder, options, label }
) => {


    return (
        <div className="">
            <label htmlFor="">{label}</label>
            <div className="bg-color_main border border-solid border-border rounded mt-2">
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
            <div className="text-yellow-500 flex items-center gap-2 text-lg mt-4">
                <RatingStar rate={4} />
            </div>
        </div>
    );
}

export default SelectStarReviews;