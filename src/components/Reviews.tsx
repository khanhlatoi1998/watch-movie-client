import { FastField, Form, Formik } from "formik";
import SelectField from "../custom-fields/SelectField";
import { STAR_REVIEWS_OPTIONS } from "../constants/global";
import RatingStar from "./RatingStar";
import SelectStarReviews from "../custom-fields/SelectStarReviews";
import TextareaMessageReviews from "../custom-fields/TextareaMessageReviews";
import { useSelector } from "react-redux";
import { ReviewsValidation } from "../validation/UserValidation";
import movieServices from "../api/movieServices";
import { useParams } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";

interface Props {
    reviews: any;
};

const Reviews: React.FC<Props> = ({ reviews }) => {
    const userInfo = useSelector((state: any) => state.userInfo);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const param = useParams();
    const initialValues = {
        rating: 4,
        message: '',
        id: param.id,
        token: userInfo?.token
    }
    const onSubmit = (values: any) => {
        setIsLoading(true)
        movieServices.createMovieReview(values)
            .then((res: any) => {
                setIsLoading(false);
                toast.success('Movie reviewed');
            })
            .catch((err: any) => { toast.error(err) })
    };

    return (
        <div className="pt-12">
            <div className="flex items-center gap-8">
                <span>
                    <i className="fa-solid fa-crown text-color_01 text-2xl"></i>
                </span>
                <p className="font-bold lg:text-title-lg text-title">Reviews</p>
            </div>
            <div className="rounded bg-color_02 pt-12 lg:px-12 px-4 xl:grid grid-cols-5 gap-12 mt-8 pb-8 text-text">
                <Formik
                    initialValues={initialValues}
                    validationSchema={ReviewsValidation}
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
                                        name="rating"
                                        placeholder={STAR_REVIEWS_OPTIONS[4].label}
                                        component={SelectStarReviews}
                                        options={STAR_REVIEWS_OPTIONS}
                                    >
                                    </FastField>
                                    <FastField
                                        label="Message"
                                        name="message"
                                        placeholder="Make it and sweet..."
                                        component={TextareaMessageReviews}
                                    >

                                    </FastField>
                                    <button type="submit" className="w-full text-white font-medium bg-color_01 rounded p-4 mt-[-4px] text-cente">
                                        {
                                            userInfo ? (
                                                <div>
                                                    {
                                                        isLoading ? ('Submit...') : ('Submit')
                                                    }
                                                </div>)
                                                : ('Login to review this movie')
                                        }
                                    </button>
                                </Form>
                            )
                        }
                    }
                </Formik>
                <div className="lg:col-span-3 mt-8 xl:mt-0 text-white">
                    <p className="lg:text-title-lg text-title text-white font-bold">Reviews ({reviews?.length})</p>
                    <div className="set-h overflow-y-scroll bg-color_main md:p-12 p-6 rounded-lg mt-8 flex flex-col items-center gap-8">
                        {
                            reviews?.map((review: any, idx: number) => {
                                return (
                                    <div key={idx} className="w-full  bg-color_02 p-4 border border-solid border-border_02 rounded-lg">
                                        <div className="grid flex flex-col grid-cols-12 gap-6 ">
                                            <div className="md:col-span-2 col-span-5 bg-color_02">
                                                <img src={review.userImage} />
                                            </div>
                                            <div className="md:col-span-7 col-span-7 md:justify-start justify-center md:items-start flex flex-col gap-2">
                                                <h2>{review.userName}</h2>
                                                <p className="hidden md:block text-xs leading-6 font-medium text-opacity_01">
                                                    {review.message}
                                                </p>
                                                <div className="md:hidden flex items-center text-xs gap-1 text-yellow-500">
                                                    <RatingStar rate={Number(review.rating)} />
                                                </div>
                                            </div>
                                            <div className="col-span-3 hidden md:flex px-4 items-center justify-center border-l border-solid border-border text-xs gap-1 text-yellow-500">
                                                <RatingStar rate={Number(review.rating)} />
                                            </div>
                                        </div>
                                        <p className="md:hidden block mt-4 text-xs leading-6 font-medium text-opacity_01 w-full text-center md:text-left">
                                            {review.message}
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