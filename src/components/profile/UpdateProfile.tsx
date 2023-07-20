import { FastField, Form, Formik } from "formik"
import InputField from "../../custom-fields/InputField";
import { UpdateProfileValidation } from "../../validation/UserValidation";
import { useDispatch, useSelector } from "react-redux";
import { useRef, useState } from "react";
import userServices from "../../api/userServices";
import InputFileField from "../../custom-fields/InputFileField";
import { updateUsreInfo } from "../../redux/sliceUserInfo";

interface UpdateProfileType {
    fullName: string;
    email: string;
    file: any
}

const UpdateProfile = () => {
    const userInfo = useSelector((state: any) => state.userInfo);
    const refImageUserInfo = useRef(null);
    const disPatch = useDispatch();
    const [initialValues, setInitialValues] = useState<any>({
        _id: userInfo._id,
        fullName: userInfo.fullName,
        email: userInfo.email,
        image: userInfo.image,
        token: userInfo.token,
        file: ""
    });

    const onSubmit = (values: any) => {
        console.log(values.image)
        const formData = new FormData();
        for (let key in values) {
            formData.append(key, values[key])
        }
        userServices.updateProfileService(formData)
            .then((res: any) => {
                console.log('res', res);
                disPatch(updateUsreInfo(res));
            })
            .catch(err => { })
    };

    const handleInputImage = (e: any) => {
        // let image: any = '';
        const file = e.target.files[0];
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.addEventListener('load', (e: any) => {
            const ref: any = refImageUserInfo;
            ref.current.src = e.target.result;
            // image = fileReader.result;
            // setInitialValues({
            //     ...initialValues,
            //     file: file
            // })
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
                                    <label className="col-span-10 block" htmlFor="upload-file">
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
                                            <span>
                                                <i className="text-color_01 fa-solid fa-arrow-up-from-bracket text-2xl"></i>
                                            </span>
                                            <p className="text-sm mt-2">Drag your image here</p>
                                            <em className="text-xs text-border">only .jpg and .png files will be accepted</em>
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
                                    // value="se"
                                    component={InputField}
                                >
                                </FastField>
                                <FastField
                                    name="email"
                                    label="Email"
                                    // value="va"
                                    component={InputField}
                                >
                                </FastField>

                                <div className="flex gap-2 flex-wrap flex-col-reverse font-medium sm:flex-row justify-between items-center my-4">
                                    <button className="rounded py-3 px-6 font-medium bg-color_01 w-full sm:w-auto hover:border borer-solid border-color_01 hover:bg-color_main">Delete Account</button>
                                    <button type="submit" className="rounded py-3 px-6 font-medium bg-color_main w-full sm:w-auto border borde-solid border-color_01 hover:bg-color_01">Upload Profile</button>
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