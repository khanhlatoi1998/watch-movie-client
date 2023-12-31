import { FastField, Form, Formik } from "formik"
import InputField from "../../custom-fields/InputField";
import { UpdateProfileValidation } from "../../validation/UserValidation";
import { useDispatch, useSelector } from "react-redux";
import { useRef, useState } from "react";
import userServices from "../../api/userServices";
import InputFileField from "../../custom-fields/InputFileField";
import { updateUsreInfo } from "../../redux/sliceUserInfo";
import { toast } from "react-hot-toast";
import uploadAPI from "../../api/uploadAPI";
import Loader from "../Loader";

interface UpdateProfileType {
    fullName: string;
    email: string;
}

const UpdateProfile = () => {
    const userInfo = useSelector((state: any) => state.userInfo);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const refImageUserInfo = useRef<any>(null);
    const disPatch = useDispatch();
    const [initialValues, setInitialValues] = useState<any>({
        _id: userInfo._id,
        token: userInfo.token,
        fullName: userInfo.fullName,
        email: userInfo.email,
        image: userInfo.image,
    });

    const onSubmit = (values: any) => {
        const newValues = {
            ...values,
            image: refImageUserInfo.current.src
        }
        const formData = new FormData();
        for (let key in newValues) {
            formData.append(key, newValues[key])
        }
        userServices.updateProfileService(formData)
            .then((res: any) => {
                disPatch(updateUsreInfo(res));
                toast.success('Updateprofile success!')
            })
            .catch(err => { toast.error(err.message) })
    };

    const handleInputImage = (elInput: any) => {
        // let image: any = '';
        setIsLoading(true);
        const file = elInput.target.files[0];
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.addEventListener('load', (e: any) => {
            uploadAPI.uploadFileImage(file)
                .then((res) => {
                    setIsLoading(false);
                    refImageUserInfo.current.src = res;
                })
                .catch(err => {
                    setIsLoading(false);
                })
        })
    };

    return (
        <div className="">
            <Formik
                enableReinitialize={true}
                initialValues={initialValues}
                validationSchema={UpdateProfileValidation}
                onSubmit={onSubmit}
            >
                {
                    formikProps => {
                        return (
                            <Form className="flex-1 flex flex-col gap-8">
                                <p className="text-title lg:text-title-lg font-bold">Profile</p>
                                <div className="w-full grid lg:grid-cols-12 gap-6 text-center">
                                    <label className="col-span-10 block" htmlFor="file">
                                        <div className="px-6 w-full py-8 border-2 border-border border-dashed bg-color_main rounded-md cursor-pointer">
                                            <FastField
                                                name="file"
                                                type="file"
                                                accept="image/*"
                                                component={InputFileField}
                                                handleInputImage={handleInputImage}
                                            >
                                            </FastField>
                                            {/* <input type="file" onChange={handleInputImage} className="hidden" name="upload-file" accept="image/*" id="upload-file" /> */}
                                            {
                                                !isLoading ? (
                                                    <div>
                                                        <span>
                                                            <i className="text-color_01 fa-solid fa-arrow-up-from-bracket text-2xl"></i>
                                                        </span>
                                                        <p className="text-sm mt-2">Drag your image here</p>
                                                        <em className="text-xs text-border">only .jpg and .png files will be accepted</em>
                                                    </div>
                                                ) : (
                                                    <div className="min-h-[77px] flex justify-center items-center">
                                                        <Loader loading={isLoading} />
                                                    </div>
                                                )
                                            }
                                        </div>
                                    </label>
                                    <div className="col-span-2">
                                        <figure className="w-32 mt-2 h-32 p-2 bg-color_main border-solid border border-border rounded">
                                            <img ref={refImageUserInfo} className="w-full h-full object-cover rounded" src={userInfo?.image} alt="" />
                                        </figure>
                                    </div>
                                </div>
                                <FastField
                                    name="fullName"
                                    label="Full Name"
                                    component={InputField}
                                >
                                </FastField>
                                <FastField
                                    name="email"
                                    label="Email"
                                    component={InputField}
                                >
                                </FastField>
                                <div className="flex gap-2 flex-wrap flex-col-reverse font-medium sm:flex-row justify-between items-center my-4">
                                    <button className="rounded py-3 px-6 font-medium bg-color_01 w-full sm:w-auto hover:border borer-solid border-color_01 hover:bg-color_main">Delete Account</button>
                                    <button type="submit" className="rounded py-3 px-6 font-medium bg-color_main w-full sm:w-auto border borde-solid border-color_01 hover:bg-color_01">
                                        Upload Profile
                                    </button>
                                </div>
                            </Form>
                        )
                    }
                }
            </Formik>
        </div>
    );
};

export default UpdateProfile