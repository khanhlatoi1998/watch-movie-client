import { FastField, Form, Formik } from "formik";
import InputField from "../../custom-fields/InputField";
import InputFileField from "../../custom-fields/InputFileField";
import { useRef, useState } from "react";
import TextareaMessageReviews from "../../custom-fields/TextareaMessageReviews";
import TextaereaMovieDescription from "../../custom-fields/TextaereaMovieDescription";
import SelectField from "../../custom-fields/SelectField";
import { CATEGORY_OPTIONS } from "../../constants/global";
import { AddCastValidation, AddMovieValidation } from "../../validation/ProfileValidation";
import InputVideoField from "../../custom-fields/InputVideoField";
import { useSelector } from "react-redux";
import movieServices from "../../api/movieServices";
import InlineError from "../../notfications/Error";
import Loader from "../Loader";
import uploadAPI from "../../api/uploadAPI";
import { MovieType } from "../../constants/type/inex";

interface AddCastType {
    nameCast: string;
    imgCast?: any;
};



const AddMovieProfile = () => {
    const [isLoadingCast, setIsLoadingCast] = useState<boolean>(false);
    const [isLoadingImageWithTitle, setIsLoadingImageWithTitle] = useState<boolean>(false);
    const [isLoadinImageWithThumbnail, setIsLoadinImageWithThumbnail] = useState<boolean>(false);
    const [isLoadingAddMovie, setIsLoadingAddMovie] = useState<boolean>(false);
    const refImageWithTitle = useRef<any>(null);
    const refImageWithThumbnail = useRef<any>(null);
    const refImageCast = useRef<any>(null);
    const refVideo = useRef<any>(null);
    const refInputCast = useRef<any>(null);
    const [openPopupAddCast, setOpenPopupAddCast] = useState<boolean>(false);
    const [casts, setCasts] = useState<AddCastType[]>([]);
    const userInfo = useSelector((state: any) => state.userInfo);
    const [initialValuesAddMovie, setInitialValuesAddMovie] = useState<MovieType>({
        movieTitle: '',
        hours: '',
        language: '',
        year: '',
        movieDescription: '',
        movieCategory: '',
        casts: '',
        rate: 0,
        numberOfReviews: 0,
        imageWithTitleValue: '',
        imageWithThumbnailValue: '',
        video: '',
        reviews: []
    })

    const [initialValuesAddCast, setInitialValuesAddCast] = useState<AddCastType>({
        nameCast: '',
        imgCast: '',
    })

    const handleInputImage = (elInput: any, refImage: any, formikProp?: any, setIsLoading?: any) => {
        setIsLoading(true);
        const nameInputValue = elInput.target.parentElement.querySelectorAll('input')[1].name;
        const file = elInput.target.files[0];
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.addEventListener('load', (e: any) => {
            uploadAPI.uploadFileImage(file)
                .then((res) => {
                    setIsLoading(false);
                    refImage.current.src = e.target.result;
                    formikProp.getFieldHelpers(nameInputValue).setValue(res)
                })
                .catch(err => { setIsLoading(false) })
        })
    };

    const handleVideo = (e: any, refVideo: any, formikProp: any) => {
        const file = e.target.files[0];
        const videoURL: any = URL.createObjectURL(file);
        refVideo.current.src = videoURL;
        formikProp.getFieldHelpers('video').setValue(file)
    };

    const onSubmitAddCast = (formikPropAddMovie: any, values: AddCastType) => {
        setOpenPopupAddCast(false);
        const newValue = {
            ...values,
            imgCast: refInputCast?.current?.value
        }
        casts.push(newValue);
        setInitialValuesAddMovie({
            ...initialValuesAddMovie,
            casts: casts
        });
        formikPropAddMovie.getFieldHelpers('casts').setValue(casts);
    }

    const onSubmitAddMovie = async (values: any) => {
        console.log('uploading')
        setIsLoadingAddMovie(true);
        const newValues = await {
            ...values,
            casts: JSON.stringify(casts),
            token: userInfo.token
        }
        const formData = new FormData();
        for (let key in newValues) {
            formData.append(key, newValues[key])
        }
        movieServices.createMovie(formData)
            .then((res: any) => {
                console.log(res)
                setIsLoadingAddMovie(false);
            })
            .catch(err => { setIsLoadingAddMovie(false); })
    };

    const closeVideo = (formikProp: any) => {
        formikProp.getFieldHelpers('video').setValue('');
    }

    return (
        <div>
            <p className="text-title lg:text-title-lg font-bold">Create Movie</p>
            <div>
                <Formik
                    initialValues={initialValuesAddMovie}
                    onSubmit={onSubmitAddMovie}
                    validationSchema={AddMovieValidation}
                >
                    {
                        formikPropAddMovie => {
                            return (
                                <>
                                    <Form className="flex flex-col gap-6 mt-6">
                                        <div className="grid grid-cols-2 gap-x-6 gap-y-8">
                                            <FastField
                                                label="Movie Title"
                                                name="movieTitle"
                                                type="text"
                                                placeholder="Game of Thrones"
                                                component={InputField}
                                            >
                                            </FastField>
                                            <FastField
                                                label="Hours"
                                                name="hours"
                                                type="number"
                                                placeholder="2hr"
                                                component={InputField}
                                            >
                                            </FastField>
                                            <FastField
                                                label="Language Used"
                                                name="language"
                                                type="text"
                                                placeholder="English"
                                                component={InputField}
                                            >
                                            </FastField>
                                            <FastField
                                                label="Year of Release"
                                                name="year"
                                                type="number"
                                                placeholder="2023"
                                                component={InputField}
                                            >
                                            </FastField>
                                            <div className="">
                                                <p className="text-text font-medium">Image with Title</p>
                                                <label className="col-span-10 block mt-2" htmlFor="imageWithTitle">
                                                    <div className="px-6 w-full py-8  text-center border-2 border-border border-dashed bg-color_main rounded-md cursor-pointer">
                                                        <FastField
                                                            name="imageWithTitle"
                                                            type="file"
                                                            accept="image/*"
                                                            component={InputFileField}
                                                            handleInputImage={(e: any) => handleInputImage(e, refImageWithTitle, formikPropAddMovie, setIsLoadingImageWithTitle)}
                                                        >
                                                        </FastField>
                                                        {
                                                            !isLoadingImageWithTitle ? (
                                                                <div>
                                                                    <span>
                                                                        <i className="text-color_01 fa-solid fa-arrow-up-from-bracket text-2xl"></i>
                                                                    </span>
                                                                    <p className="text-sm mt-2">Drag your image here</p>
                                                                    <em className="text-xs text-border">only .jpg and .png files will be accepted</em>
                                                                </div>
                                                            ) : (
                                                                <div className="min-h-[70px] flex justify-center items-center">
                                                                    <Loader loading={isLoadingImageWithTitle} />
                                                                </div>
                                                            )
                                                        }
                                                        <FastField
                                                            name="imageWithTitleValue"
                                                            component={(fieldProps: any) => {
                                                                const { field, form } = fieldProps;
                                                                const { name, value, onChange, onBlur } = field;
                                                                const { errors, touched } = form;
                                                                const showError = errors[name] && touched[name];
                                                                return (
                                                                    <div>
                                                                        <input
                                                                            ref={refInputCast}
                                                                            name={name}
                                                                            {...field}
                                                                            id={name}
                                                                            className="hidden"
                                                                        />
                                                                        <InlineError text={showError && errors[name]} />
                                                                    </div>
                                                                )
                                                            }}
                                                        >
                                                        </FastField>
                                                    </div>
                                                </label>
                                                <figure className="w-32 mt-4 h-32 p-2 bg-color_main border-solid border border-border rounded">
                                                    <img ref={refImageWithTitle} className="w-full h-full object-cover rounded" src="../images/logo_02.png" alt="" />
                                                </figure>
                                            </div>
                                            <div className="">
                                                <p className="text-text font-medium">Image with Thumnail</p>
                                                <label className="col-span-10 block mt-2" htmlFor="imageWithThumbnail">
                                                    <div className="px-6 w-full py-8  text-center border-2 border-border border-dashed bg-color_main rounded-md cursor-pointer">
                                                        <FastField
                                                            name="imageWithThumbnail"
                                                            type="file"
                                                            accept="image/*"
                                                            component={InputFileField}
                                                            handleInputImage={(e: any) => handleInputImage(e, refImageWithThumbnail, formikPropAddMovie, setIsLoadinImageWithThumbnail)}
                                                        >
                                                        </FastField>
                                                        {
                                                            !isLoadinImageWithThumbnail ? (
                                                                <div>
                                                                    <span>
                                                                        <i className="text-color_01 fa-solid fa-arrow-up-from-bracket text-2xl"></i>
                                                                    </span>
                                                                    <p className="text-sm mt-2">Drag your image here</p>
                                                                    <em className="text-xs text-border">only .jpg and .png files will be accepted</em>
                                                                </div>
                                                            ) : (
                                                                <div className="min-h-[70px] flex justify-center items-center">
                                                                    <Loader loading={isLoadinImageWithThumbnail} />
                                                                </div>
                                                            )
                                                        }
                                                        <FastField
                                                            name="imageWithThumbnailValue"
                                                            component={(fieldProps: any) => {
                                                                const { field, form } = fieldProps;
                                                                const { name, value, onChange, onBlur } = field;
                                                                const { errors, touched } = form;
                                                                const showError = errors[name] && touched[name];
                                                                return (
                                                                    <div>
                                                                        <input
                                                                            ref={refInputCast}
                                                                            name={name}
                                                                            {...field}
                                                                            id={name}
                                                                            className="hidden"
                                                                        />
                                                                        <InlineError text={showError && errors[name]} />
                                                                    </div>
                                                                )
                                                            }}
                                                        >
                                                        </FastField>
                                                    </div>
                                                </label>
                                                <figure className="w-32 mt-4 h-32 p-2 bg-color_main border-solid border border-border rounded">
                                                    <img ref={refImageWithThumbnail} className="w-full h-full object-cover rounded" src="../images/logo_02.png" alt="" />
                                                </figure>
                                            </div>
                                        </div>
                                        <div className="mt-2">
                                            <FastField
                                                name="movieDescription"
                                                label="Movie Description"
                                                type="text"
                                                placeholder="Make it short and sweet"
                                                component={TextaereaMovieDescription}
                                            >
                                            </FastField>
                                        </div>
                                        <div className="">
                                            <div className="">
                                                <FastField
                                                    name="movieCategory"
                                                    label="Movie Catergory"
                                                    component={SelectField}
                                                    options={CATEGORY_OPTIONS}
                                                    placeholder={CATEGORY_OPTIONS[0].label}
                                                >
                                                </FastField>
                                            </div>
                                        </div>
                                        <div className="">
                                            <p className="text-text font-medium">Image with Thumnail</p>
                                            <label className="col-span-10 block mt-2" htmlFor="video">
                                                <div className="px-6 w-full py-8  text-center border-2 border-border border-dashed bg-color_main rounded-md cursor-pointer">
                                                    <FastField
                                                        name="video"
                                                        type="file"
                                                        accept="video/*"
                                                        handleVideo={(e: any) => handleVideo(e, refVideo, formikPropAddMovie)}
                                                        component={InputVideoField}
                                                    >
                                                    </FastField>
                                                    <span>
                                                        <i className="text-color_01 fa-solid fa-arrow-up-from-bracket text-2xl"></i>
                                                    </span>
                                                    <p className="text-sm mt-2">Drag your video here</p>
                                                    <em className="text-xs text-border">only .mp4 and .AVI files will be accepted</em>
                                                </div>
                                            </label>
                                        </div>
                                        <div className={`${formikPropAddMovie.values.video ? 'flex gap-4' : 'hidden gap-4'}`}>
                                            <video id="video-element" ref={refVideo} src="" controls className="max-w-[95%] max-h-[500px]"></video>
                                            <div>
                                                <i onClick={() => closeVideo(formikPropAddMovie)} className="fa-solid fa-xmark p-2 cursor-pointer"></i>
                                            </div>
                                        </div>
                                        <div className="grid md:grid-cols-2 gap-6  items-start">
                                            <button onClick={() => setOpenPopupAddCast(true)} type="button" className="w-full bg-color_main border border-solid border-color_01 rounded p-4 text-center">
                                                Add Cast
                                            </button>
                                            <div className="grid grid-cols-3 gap-4">
                                                {
                                                    casts.map((cast: AddCastType, idx) => {
                                                        return (
                                                            <div key={idx} className="bg-color_main text-center border border-solid border-border rounded p-2 flex flex-col gap-2 col-span-1">
                                                                <figure className="relative pt-[100%]">
                                                                    <img className="rounded imgCast absolute top-0 left-0 w-full h-full object-cover" src={cast.imgCast} alt="" />
                                                                </figure>
                                                                <p className="overflow-hidden text-ellipsis">{cast.nameCast}</p>
                                                                <div className="flex justify-center items-center gap-2">
                                                                    <button className="w-[30px] h-[30px] border border-solid border-border rounded">
                                                                        <i className="fa-regular fa-pen-to-square text-color_03"></i>
                                                                    </button>
                                                                    <button className="w-[30px] h-[30px] border border-solid border-border rounded">
                                                                        <i className="fa-solid fa-trash text-color_01"></i>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                        <div className="mt-[-20px]">
                                            <FastField
                                                name="casts"
                                                component={(fieldProps: any) => {
                                                    const { field, form } = fieldProps;
                                                    const { name, value, onChange, onBlur } = field;
                                                    const { errors, touched } = form;
                                                    const showError = errors[name] && touched[name];
                                                    return (
                                                        <div>
                                                            <input

                                                                name={name}
                                                                {...field}
                                                                id={name}
                                                                className="hidden"
                                                            />
                                                            <InlineError text={showError && errors[name]} />
                                                        </div>
                                                    )
                                                }}
                                            >
                                            </FastField>
                                        </div>
                                        <button type="submit" className="py-3 rounded bg-color_01 text-center font-bold w-full" disabled={isLoadingAddMovie}>
                                            {
                                                !isLoadingAddMovie ? ('Publish Movie') : ('Uploading...')
                                            }
                                        </button>
                                        {
                                            isLoadingAddMovie ? (
                                                <div className="flex justify-center items-center">
                                                    <Loader loading={isLoadingAddMovie} />
                                                </div>
                                            ) : (<></>)
                                        }
                                    </Form>
                                    <Formik
                                        initialValues={initialValuesAddCast}
                                        onSubmit={(value: any) => onSubmitAddCast(formikPropAddMovie, value)}
                                        validationSchema={AddCastValidation}
                                        enableReinitialize={true}

                                    >
                                        {
                                            formikPropAddCast => {
                                                return (
                                                    <Form>
                                                        <div onClick={(e) => setOpenPopupAddCast(false)} className={`${openPopupAddCast ? '' : 'hidden'} bg-[#00000066] fixed px-8 top-0 left-0 right-0 bottom-0 z-[900] flex justify-center items-center`}>
                                                            <div onClick={(e) => e.stopPropagation()} className="border border-solid border-border rounded-lg p-8 bg-color_main lg:w-2/5 w-full flex flex-col gap-6">
                                                                <p className="font-medium text-title lg:text-title-lg text-center">Create Cast</p>
                                                                <FastField
                                                                    name="nameCast"
                                                                    label="Cast Name"
                                                                    placeholder="Jax"
                                                                    component={InputField}
                                                                >
                                                                </FastField>
                                                                <div className="">
                                                                    <p className="text-text font-medium">Image with Thumnail</p>
                                                                    <label className="col-span-10 block mt-2" htmlFor="fileCast">
                                                                        <div className="px-6 w-full py-8  text-center border-2 border-border border-dashed bg-color_main rounded-md cursor-pointer">
                                                                            <FastField
                                                                                name="fileCast"
                                                                                type="file"
                                                                                accept="image/*"
                                                                                component={InputFileField}
                                                                                handleInputImage={(e: any) => handleInputImage(e, refImageCast, formikPropAddCast, setIsLoadingCast)}
                                                                            >
                                                                            </FastField>
                                                                            {
                                                                                !isLoadingCast ? (
                                                                                    <div>
                                                                                        <span>
                                                                                            <i className="text-color_01 fa-solid fa-arrow-up-from-bracket text-2xl"></i>
                                                                                        </span>
                                                                                        <p className="text-sm mt-2">Drag your image here</p>
                                                                                        <em className="text-xs text-border">only .jpg and .png files will be accepted</em>
                                                                                    </div>
                                                                                ) : (
                                                                                    <div className="min-h-[75px] flex justify-center items-center">
                                                                                        <Loader loading={isLoadingCast} />
                                                                                    </div>
                                                                                )
                                                                            }
                                                                            <FastField
                                                                                name="imgCast"
                                                                                component={(fieldProps: any) => {
                                                                                    const { field, form } = fieldProps;
                                                                                    const { name, value, onChange, onBlur } = field;
                                                                                    const { errors, touched } = form;
                                                                                    const showError = errors[name] && touched[name];
                                                                                    return (
                                                                                        <div>
                                                                                            <input
                                                                                                ref={refInputCast}
                                                                                                name={name}
                                                                                                {...field}
                                                                                                id={name}
                                                                                                className="hidden"
                                                                                            />
                                                                                            <InlineError text={showError && errors[name]} />
                                                                                        </div>
                                                                                    )
                                                                                }}
                                                                            >
                                                                            </FastField>
                                                                        </div>
                                                                    </label>
                                                                    <figure className="w-32 mt-4 h-32 p-2 bg-color_main border-solid border border-border rounded">
                                                                        <img ref={refImageCast} className="w-full h-full object-cover rounded" src="../images/logo_02.png" alt="" />
                                                                    </figure>
                                                                </div>
                                                                <button type="submit" className="text-center bg-color_01 rounded font-medium py-3">
                                                                    Add
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </Form>
                                                )
                                            }
                                        }
                                    </Formik>
                                </>
                            )
                        }
                    }
                </Formik>
            </div>
        </div>
    );
};

export default AddMovieProfile;