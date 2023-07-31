import { FastField, Form, Formik } from "formik";
import InputField from "../../custom-fields/InputField";
import { ChangePasswordValidation } from "../../validation/ProfileValidation";
import { useSelector } from "react-redux";
import userServices from "../../api/userServices";
import { toast } from "react-hot-toast";

interface ChangePasswordType {
    _id: string;
    oldPassword: string;
    newPassword: string;
    confirmPassword: string;
}


const ChangePassword = () => {
    const userInfo = useSelector((state: any) => state.userInfo);


    const initialValues = {
        oldPassword: '',
        newPassword: '',
        confirmPassword: '',
        _id: userInfo._id,
        token: userInfo.token
    }

    const onSubmit = (values: ChangePasswordType) => {
        console.log(values)
        userServices.changePasswordService(values)
        .then((res: any) => {
            toast.success('Change Password Success!');
        })
        .catch(err => {toast.error(err.response.data.message)})

    };


    return (
        <div className="">
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={ChangePasswordValidation}
            >
                {
                    formikProps => {
                        return (
                            <Form className="flex flex-col gap-8">
                                <p className="text-title lg:text-title-lg font-bold">Change Password </p>
                                <FastField
                                    label="Previous Password"
                                    name="oldPassword"
                                    type="text"
                                    value=""
                                    placeholder="********"
                                    component={InputField}
                                >
                                </FastField>
                                <FastField
                                    label="New Password"
                                    name="newPassword"
                                    type="text"
                                    value=""
                                    placeholder="********"
                                    component={InputField}
                                >
                                </FastField>
                                <FastField
                                    label="Confirm Password"
                                    name="confirmPassword"
                                    type="text"
                                    value=""
                                    placeholder="********"
                                    component={InputField}
                                >
                                </FastField>
                                <div className="flex gap-2 flex-wrap flex-col-reverse font-medium sm:flex-row justify-end items-center my-4">
                                    <button type="submit" className="rounded py-3 px-6 font-medium bg-color_main w-full sm:w-auto border borde-solid border-color_01 hover:bg-color_01">Change Password</button>
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