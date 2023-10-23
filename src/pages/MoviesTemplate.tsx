import Movie from "../components/Movie";
import { MovieType, SearchType } from "../constants/type/inex";
import { listMoves } from "../data";
import { TbPlayerTrackNext, TbPlayerTrackPrev } from 'react-icons/tb';
import { FastField, Form, Formik } from 'formik';
import SelectField from "../custom-fields/SelectField";
import { CATEGORY_OPTIONS, HOURS_OPTIONS, LANGUAGE_OPTIONS, RATES_OPTIONS, YEAR_OPTIONS } from "../constants/global";
import { useQuery } from "@tanstack/react-query";
import movieServices from "../api/movieServices";
import { useState } from "react";


const MoviesTemplate = () => {
    const [page, setPage] = useState<number>(1);
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

    const nextData = () => {
        if (page < data.pages) {
            setPage(p => p + 1)
        }
    };

    const prevData = () => {
        if (page > 1) {
            setPage(p => p - 1)
        }
    };

    const { data, isLoading } = useQuery({
        queryKey: ['moviesTemplate', page],
        queryFn: () => movieServices.getMovies({
            limit: 8,
            page: page
        })
    });

    console.log(data)


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
                                <Form className="bg-color_02 p-6 pb-2 rounded-lg border border-solid border-border_02 mt-6 grid lg:grid-cols-5 sm:grid-cols-2 grid-cols-1 justify-center lg::gap-8 gap-4 text-xs flex-wrap">
                                    <div className="">
                                        <FastField
                                            name="category"
                                            component={SelectField}
                                            options={CATEGORY_OPTIONS}
                                            placeholder="ALl Categories"
                                        >
                                        </FastField>
                                    </div>
                                    <div className="">
                                        <FastField
                                            name="category"
                                            component={SelectField}
                                            options={LANGUAGE_OPTIONS}
                                            placeholder="Sort By Language"
                                        >
                                        </FastField>
                                    </div>
                                    <div className="">
                                        <FastField
                                            name="category"
                                            component={SelectField}
                                            options={YEAR_OPTIONS}
                                            placeholder="Sort By Year"
                                        >
                                        </FastField>
                                    </div>
                                    <div className="">
                                        <FastField
                                            name="category"
                                            component={SelectField}
                                            options={HOURS_OPTIONS}
                                            placeholder="Sort By Hours"
                                        >
                                        </FastField>
                                    </div>
                                    <div className="">
                                        <FastField
                                            name="category"
                                            component={SelectField}
                                            options={RATES_OPTIONS}
                                            placeholder="Sort By Rates"
                                        >
                                        </FastField>
                                    </div>
                                </Form>
                            )
                        }
                    }
                </Formik>
                <div>
                    <p className="font-bold mt-8 text-title-lg text-title">
                        Total <span className="text-color_01">{data?.length}</span> items Found
                    </p>
                    <div>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 mt-10">
                            {
                                data?.movies.map((movie: MovieType, idx: number) => {
                                    return (
                                        <Movie key={idx} movie={movie} />
                                    )
                                })
                            }
                        </div>
                        <div className="flex px-4 lg:pt-14 pt-10 justify-center items-center gap-6">
                            <button className="py-2 px-4 border-2 border-solid border-color_01 rounded text-title-lg" onClick={prevData}>
                                <TbPlayerTrackPrev />
                            </button>
                            <button className="py-2 px-4 border-2 border-solid border-color_01 rounded text-title-lg" onClick={nextData}>
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