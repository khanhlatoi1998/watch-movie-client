import { FastField, Form, Formik } from "formik";
import InputField from "../../custom-fields/InputField";

const ChangePassword = () => {
    const onSubmit = () => {

    };


    return (
        <div className="">
            <Formik
                initialValues={{}}
                onSubmit={onSubmit}
            >
                {
                    formikProps => {
                        return (
                            <Form className="flex flex-col gap-8">
                                <p className="text-title lg:text-title-lg font-bold">Change Password </p>
                                <FastField
                                    label="Previous Password"
                                    name="previous-password"
                                    type="text"
                                    placeholder="********"
                                    component={InputField}
                                >
                                </FastField>
                                <FastField
                                    label="New Password"
                                    name="new-password"
                                    type="text"
                                    placeholder="********"
                                    component={InputField}
                                >
                                </FastField>
                                <FastField
                                    label="Confirm Password"
                                    name="confirm-password"
                                    type="text"
                                    placeholder="********"
                                    component={InputField}
                                >
                                </FastField>
                                <div className="flex gap-2 flex-wrap flex-col-reverse font-medium sm:flex-row justify-end items-center my-4">
                                    <button className="rounded py-3 px-6 font-medium bg-color_main w-full sm:w-auto border borde-solid border-color_01 hover:bg-color_01">Change Password</button>
                                </div>
                            </Form>
                        )
                    }
                }
            </Formik>
        </div>
    );
};

export default ChangePassword;