import Movie from "../components/Movie";
import { MovieType, SearchType } from "../constants/type/inex";
import { listMoves } from "../data";
import { TbPlayerTrackNext, TbPlayerTrackPrev } from 'react-icons/tb';
import { FastField, Form, Formik } from 'formik';
import SelectField from "../custom-fields/SelectField";
import { CATEGORY_OPTIONS, HOURS_OPTIONS, LANGUAGE_OPTIONS, RATES_OPTIONS, YEAR_OPTIONS } from "../constants/global";


const MoviesTemplate = () => {
    const initialValues: SearchType = {
        category: '',
        language: '',
        yaer: 2023,
        hours: 2,
        rate: 4
    }

    const onSubmit = (values: SearchType) => {
        console.log(values);
    };



    return (
        <section className="bg-color_main pt-[103px]">
            <div className="container px-4 mx-auto pb-20">
                <Formik
                    initialValues={initialValues}
                    onSubmit={onSubmit}
                >
                    {
                        formikProps => {
                            return (
                                <Form className="bg-color_02 p-6 rounded-lg border border-solid border-border_02 mt-6 grid lg:grid-cols-5 sm:grid-cols-2 grid-cols-1 justify-center lg::gap-8 gap-4 text-xs flex-wrap">
                                    <FastField
                                        name="category"
                                        classNameContainer="bg-color_main border border-solid border-border_02 rounded flex-1"
                                        component={SelectField}
                                        options={CATEGORY_OPTIONS}
                                        placeholder="ALl Categories"
                                    >
                                    </FastField>
                                    <FastField
                                        name="category"
                                        classNameContainer="bg-color_main border border-solid border-border_02 rounded flex-1"
                                        component={SelectField}
                                        options={LANGUAGE_OPTIONS}
                                        placeholder="Sort By Language"
                                    >
                                    </FastField>
                                    <FastField
                                        name="category"
                                        classNameContainer="bg-color_main border border-solid border-border_02 rounded flex-1"
                                        component={SelectField}
                                        options={YEAR_OPTIONS}
                                        placeholder="Sort By Year"
                                    >
                                    </FastField>
                                    <FastField
                                        name="category"
                                        classNameContainer="bg-color_main border border-solid border-border_02 rounded flex-1"
                                        component={SelectField}
                                        options={HOURS_OPTIONS}
                                        placeholder="Sort By Hours"
                                    >
                                    </FastField>
                                    <FastField
                                        name="category"
                                        classNameContainer="bg-color_main border border-solid border-border_02 rounded flex-1"
                                        component={SelectField}
                                        options={RATES_OPTIONS}
                                        placeholder="Sort By Rates"
                                    >
                                    </FastField>
                                </Form>
                            )
                        }
                    }
                </Formik>
                <div>
                    <p className="font-bold mt-8 text-title-lg text-title">
                        Total <span className="text-color_01">10</span> items Found
                    </p>
                    <div>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 mt-10">
                            {
                                listMoves.map((movie: MovieType, idx: number) => {
                                    return (
                                        <Movie key={idx} movie={movie} />
                                    )
                                })
                            }
                        </div>
                        <div className="flex px-4 lg:pt-14 pt-10 justify-center items-center gap-6">
                            <button className="py-2 px-4 border-2 border-solid border-color_01 rounded text-title-lg">
                                <TbPlayerTrackPrev />
                            </button>
                            <button className="py-2 px-4 border-2 border-solid border-color_01 rounded text-title-lg" >
                                <TbPlayerTrackNext />
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default MoviesTemplate;