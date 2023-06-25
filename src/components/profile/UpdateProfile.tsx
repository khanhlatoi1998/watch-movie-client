import { FastField, Form, Formik } from "formik"
import InputField from "../../custom-fields/InputField";
import { ResgisterValidation } from "../../validation/UserValidation";

const UpdateProfile = () => {

    const onSubmit = () => {

    };

    return (
        <div className="">
            <Formik
                initialValues={{}}
                validationSchema={ResgisterValidation}
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
                                            <input type="file" className="hidden" name="upload-file" id="upload-file" />
                                            <span>
                                                <i className="text-color_01 fa-solid fa-arrow-up-from-bracket text-2xl"></i>
                                            </span>
                                            <p className="text-sm mt-2">Drag your image here</p>
                                            <em className="text-xs text-border">only .jpg and .png files will be accepted</em>
                                        </div>
                                    </label>
                                    <div className="col-span-2">
                                        <figure className="w-32 mt-2 h-32 p-2 bg-color_main border-solid border border-border rounded">
                                            <img className="w-full h-full object-cover rounded" src="https://firebasestorage.googleapis.com/v0/b/netflixo-minah.appspot.com/o/859e9b82-4e4a-47b2-9e5f-9100edc201d7.png?alt=media" alt="" />
                                        </figure>
                                    </div>
                                </div>
                                <FastField
                                    name="fullName"
                                    label="new name"
                                    component={InputField}
                                >
                                </FastField>
                                <FastField
                                    name="email"
                                    label="new name"
                                    component={InputField}
                                >
                                </FastField>

                                <div className="flex gap-2 flex-wrap flex-col-reverse font-medium sm:flex-row justify-between items-center my-4">
                                    <button className="rounded py-3 px-6 font-medium bg-color_01 w-full sm:w-auto hover:border borer-solid border-color_01 hover:bg-color_main">Delete Account</button>
                                    <button className="rounded py-3 px-6 font-medium bg-color_main w-full sm:w-auto border borde-solid border-color_01 hover:bg-color_01">Upload Profile</button>
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