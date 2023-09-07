import { FastField, Form, Formik } from "formik";
import { NavLink } from "react-router-dom";
import { ResgisterValidation } from "../validation/UserValidation";
import InputField from "../custom-fields/InputField";
import userServices from "../api/userServices";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { saveUserInfo } from "../redux/sliceUserInfo";
import { useNavigate } from "react-router-dom";


const Register = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const initialValues = {
        fullName: '',
        email: '',
        password: ''
    };

    const onSubmit = (values: any) => {
        setIsLoading(true);
        userServices.registerService(values)
            .then((res: any) => {
                setIsLoading(false);
                toast.success('Sign up success');
                dispatch(saveUserInfo(res));
                if (res.isAdmin) {
                    navigate('/profile/dashboard');
                } else {
                    navigate('/profile/update-profile')
                }
            })
            .catch(err => {
                toast.error(err.response.data.message);
                setIsLoading(false);
            })
    };




    return (
        <section className="pt-[103px] bg-color_main py-6 px-4">
            <div className="container mx-auto md:py-24 py-20">
                <Formik
                    initialValues={initialValues}
                    onSubmit={onSubmit}
                    validationSchema={ResgisterValidation}
                >
                    {
                        formikProps => {
                            return (
                                <Form className="border-solid border-border mx-auto  bg-color_02 w-full 2xl:w-3/5 gap-8 flex-colo p-8 sm:p-14 md:w-3/5 bg-dry  rounded-lg border">
                                    <div className="flex flex-col justify-between gap-8">
                                        <figure>
                                            <img src="./images/logo.png" alt="" className="w-full h-12 object-contain" />
                                        </figure>
                                        <FastField
                                            name="fullName"
                                            label="Full Name"
                                            placeholder="netflixo"
                                            component={InputField}
                                        >
                                        </FastField>
                                        <FastField
                                            label="Email"
                                            name="email"
                                            type="text"
                                            placeholder="netflixo@gmail.com"
                                            component={InputField}
                                        >
                                        </FastField>
                                        <FastField
                                            label="Password"
                                            name="password"
                                            type="password"
                                            placeholder="********"
                                            component={InputField}
                                        >
                                        </FastField>
                                        <button type="submit" className="bg-color_01 px-4 py-4 rounded-lg">
                                            <span>
                                                <i className="fa-solid fa-arrow-right-to-bracket mr-4"></i>
                                            </span>
                                            <span className="font-medium">
                                                {
                                                    isLoading ? 'Loading...' : 'Sign Up'
                                                }
                                            </span>
                                        </button>
                                        <p className="text-center text-border">
                                            Don't have an account?
                                            <NavLink to="/login" className="text-white ml-3 font-bold" >
                                                Sign In
                                            </NavLink>
                                        </p>
                                    </div>
                                </Form>
                            )
                        }
                    }
                </Formik>
            </div>
        </section>
    )
};

export default Register;