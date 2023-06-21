import { FastField, Form, Formik } from "formik";
import SelectField from "../custom-fields/SelectField";
import { STAR_REVIEWS_OPTIONS } from "../constants/global";
import RatingStar from "./RatingStar";
import SelectStarReviews from "../custom-fields/SelectStarReviews";
import TextareaMessageReviews from "../custom-fields/TextareaMessageReviews";

const Reviews = () => {
    const onSubmit = () => {
        console.log(2)
    };
    return (
        <div className="pt-12">
            <div className="flex items-center gap-8">
                <span>
                    <i className="fa-solid fa-crown text-color_01 text-2xl"></i>
                </span>
                <p className="font-bold lg:text-title-lg text-title">Reviews</p>
            </div>
            <div className="rounded bg-color_02 pt-12 lg:px-12 px-4 xl:grid grid-cols-5 gap-12 mt-8 text-text">
                <Formik
                    initialValues={{}}
                    onSubmit={onSubmit}
                >
                    {
                        formikProps => {
                            return (
                                <Form className="lg:col-span-2 flex flex-col gap-8">
                                    <p className="lg:text-title-lg text-title font-bold text-white">Review "The School for Good and Evil"</p>
                                    <p className="">Write a review for this movie. It will be posted on this page. lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec</p>
                                    <FastField
                                        label="Select Rating"
                                        name="star-reviews"
                                        placeholder="0 -Foor"
                                        component={SelectStarReviews}
                                        options={STAR_REVIEWS_OPTIONS}
                                    >
                                    </FastField>
                                    <FastField
                                        label="Message"
                                        name="message-reviews"
                                        placeholder="Make it and sweet..."
                                        component={TextareaMessageReviews}
                                        options={STAR_REVIEWS_OPTIONS}
                                    >

                                    </FastField>
                                    <button className="w-full bg-color_main rounded p-4 text-center border-border text-color_01 border border-dotted">
                                        Login to review this movie
                                    </button>
                                </Form>
                            )
                        }
                    }
                </Formik>
                <div className="lg:col-span-3 mt-8 xl:mt-0 text-white">
                    <p className="lg:text-title-lg text-title text-white font-bold">Reviews (5)</p>
                    <div className="set-h overflow-y-scroll bg-color_main md:p-12 p-6 rounded-lg mt-8 flex flex-col items-center gap-8">
                        {
                            [1, 3, 4, 3, 4, 423, 4].map((review, idx) => {
                                return (
                                    <div key={idx} className="w-full  bg-color_02 p-4 border border-solid border-border_02 rounded-lg">
                                        <div className="grid flex flex-col grid-cols-12 gap-6 ">
                                            <div className="md:col-span-2 col-span-5 bg-color_02">
                                                <img src="https://firebasestorage.googleapis.com/v0/b/netflixo-minah.appspot.com/o/ad5ea3f2-be4a-4db4-9922-aa11efd718f4.jpg?alt=media" alt="Alex Pavlov" className="xl:w-full md:mx-auto ml-auto sm:w-24 w-16 h-16 sm:h-24 rounded-lg object-cover" />
                                            </div>
                                            <div className="md:col-span-7 col-span-7 md:justify-start justify-center md:items-start flex flex-col gap-2">
                                                <h2>Alex Pavlov dasdasdas</h2>
                                                <p className="hidden md:block text-xs leading-6 font-medium text-opacity_01">Mesasd asdasd asdasdad
                                                    asdasdasd
                                                    dadadasdadasdasd

                                                    asdadd
                                                    a
                                                    dadadadada
                                                    sdasda
                                                    dad asdasd dasd asddasd asdasd asdasdasdasd asdadada asda dsage</p>
                                                <div className="md:hidden flex items-center text-xs gap-1 text-yellow-500">
                                                    <RatingStar rate={4} />
                                                </div>
                                            </div>
                                            <div className="col-span-3 hidden md:flex px-4 items-center justify-center border-l border-solid border-border text-xs gap-1 text-yellow-500">
                                                <RatingStar rate={4} />
                                            </div>
                                        </div>
                                        <p className="md:hidden block mt-4 text-xs leading-6 font-medium text-opacity_01 w-full text-center md:text-left">
                                        Mesasd asdasd asdasdad asdasdasd dadadasdadasdasd asdadd a dadadadada sdasda dad asdasd dasd asddasd asdasd asdasdasdasd asdadada asda dsage
                                        </p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Reviews