import { FastField, Form, Formik } from "formik";
import InputField from "../../custom-fields/InputField";
import InputFileField from "../../custom-fields/InputFileField";
import { useRef, useState } from "react";
import TextareaMessageReviews from "../../custom-fields/TextareaMessageReviews";
import TextaereaMovieDescription from "../../custom-fields/TextaereaMovieDescription";
import SelectField from "../../custom-fields/SelectField";
import { CATEGORY_OPTIONS } from "../../constants/global";
import { AddCastValidation } from "../../validation/ProfileValidation";

interface AddCastType {
    nameCast: string;
    imgCast?: any;
    fileCast: any;
};

interface AddMovieType {
    movieTitle: string;
    hours: number,
    language: string;
    year: number;
    imageWithTitle: any,
    imageWithThumbnail: any;
    movieVideo: any;
    casts: AddCastType[];
};

const AddMovieProfile = () => {
    const refImageWithTitle = useRef<any>(null);
    const refImageWithThumbnail = useRef<any>(null);
    const refImageCast = useRef<any>(null);
    const [openPopupAddCast, setOpenPopupAddCast] = useState<boolean>(false);
    const [listCast, setListCast] = useState<AddCastType[]>([]);
    const initialValuesAddMovie = {
        movieTitle: '',
        hours: '',
        language: '',
        year: '',
        imageWithTitle: '',
        imageWithThumbnail: '',
        movieVideo: ''
    };

    const initialValuesAddCast: AddCastType = {
        nameCast: '',
        imgCast: '',
        fileCast: ''
    }

    const handleInputImage = (e: any, refImage: any) => {
        // let image: any = '';
        const file = e.target.files[0];
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.addEventListener('load', (e: any) => {
            const ref: any = refImage;
            ref.current.src = e.target.result;
            // image = fileReader.result;
            // setInitialValues({
            //     ...initialValues,
            //     file: file
            // })
        })
    };

    const onSubmitAddCast = (values: AddCastType) => {
        setOpenPopupAddCast(false);
        const newValue = {
            ...values,
            imgCast: refImageCast?.current?.src
        }
        listCast.push(newValue);
    }

    console.log(listCast);

    return (
        <div>
            <p className="text-title lg:text-title-lg font-bold">Create Movie</p>
            <div>
                <Formik
                    initialValues={initialValuesAddMovie}
                    onSubmit={() => { }}
                >
                    {
                        formikProp => {
                            return (
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
                                                        handleInputImage={(e: any) => handleInputImage(e, refImageWithTitle)}
                                                    >
                                                    </FastField>
                                                    {/* <input type="file" onChange={handleInputImage} className="hidden" name="upload-file" accept="image/*" id="upload-file" /> */}
                                                    <span>
                                                        <i className="text-color_01 fa-solid fa-arrow-up-from-bracket text-2xl"></i>
                                                    </span>
                                                    <p className="text-sm mt-2">Drag your image here</p>
                                                    <em className="text-xs text-border">only .jpg and .png files will be accepted</em>
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
                                                        handleInputImage={(e: any) => handleInputImage(e, refImageWithThumbnail)}
                                                    >
                                                    </FastField>
                                                    {/* <input type="file" onChange={handleInputImage} className="hidden" name="upload-file" accept="image/*" id="upload-file" /> */}
                                                    <span>
                                                        <i className="text-color_01 fa-solid fa-arrow-up-from-bracket text-2xl"></i>
                                                    </span>
                                                    <p className="text-sm mt-2">Drag your image here</p>
                                                    <em className="text-xs text-border">only .jpg and .png files will be accepted</em>
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
                                        <label htmlFor="movieCategoryAdmin" className="text-text font-medium">Movie Catergory</label>
                                        <div className=" mt-2 bg-color_main border border-solid border-border_02 rounded flex-1">
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
                                        <label className="col-span-10 block mt-2" htmlFor="imageWithThumbnail">
                                            <div className="px-6 w-full py-8  text-center border-2 border-border border-dashed bg-color_main rounded-md cursor-pointer">
                                                <FastField
                                                    name="movieVideo"
                                                    type="file"
                                                    accept="video/*"
                                                    component={InputFileField}
                                                    handleInputImage={(e: any) => handleInputImage(e, refImageWithThumbnail)}
                                                >
                                                </FastField>
                                                {/* <input type="file" onChange={handleInputImage} className="hidden" name="upload-file" accept="image/*" id="upload-file" /> */}
                                                <span>
                                                    <i className="text-color_01 fa-solid fa-arrow-up-from-bracket text-2xl"></i>
                                                </span>
                                                <p className="text-sm mt-2">Drag your video here</p>
                                                <em className="text-xs text-border">only .mp4 and .AVI files will be accepted</em>
                                            </div>
                                        </label>
                                    </div>
                                    <div className="grid grid-cols-2 gap-6  items-start">
                                        <button onClick={() => setOpenPopupAddCast(true)} type="button" className="w-full bg-color_main border border-solid border-color_01 rounded p-4 text-center">
                                            Add Cast
                                        </button>
                                        <div className="grid grid-cols-3 gap-4">
                                            {
                                                listCast.map((cast: AddCastType, idx) => {
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
                                    <button type="submit" className="py-3 rounded bg-color_01 text-center font-bold w-full">
                                        Publish Movie
                                    </button>
                                </Form>
                            )
                        }
                    }
                </Formik>
                <Formik
                    initialValues={initialValuesAddCast}
                    onSubmit={onSubmitAddCast}
                    validationSchema={AddCastValidation}
                >
                    {
                        formikProp => {
                            return (
                                <Form>
                                    <div onClick={(e) => setOpenPopupAddCast(false)} className={`${openPopupAddCast ? '' : 'hidden'} bg-[#00000066] fixed top-0 left-0 right-0 bottom-0 z-[900] flex justify-center items-center`}>
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
                                                            handleInputImage={(e: any) => handleInputImage(e, refImageCast)}
                                                        >
                                                        </FastField>
                                                        {/* <input type="file" onChange={handleInputImage} className="hidden" name="upload-file" accept="image/*" id="upload-file" /> */}
                                                        <span>
                                                            <i className="text-color_01 fa-solid fa-arrow-up-from-bracket text-2xl"></i>
                                                        </span>
                                                        <p className="text-sm mt-2">Drag your image here</p>
                                                        <em className="text-xs text-border">only .jpg and .png files will be accepted</em>
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
            </div>
        </div>
    );
};

export default AddMovieProfile;