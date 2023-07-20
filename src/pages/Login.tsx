import { FastField, Form, Formik } from "formik";
import { NavLink, useNavigate } from "react-router-dom";
import InputField from "../custom-fields/InputField";
import { LoginValidation } from "../validation/UserValidation";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import userServices from "../api/userServices";
import { toast } from "react-hot-toast";
import { saveUserInfo } from "../redux/sliceUserInfo";

const Login = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const userInfo = useSelector((state: any) => state.userInfo);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if (userInfo) {
            navigate('/profile');
        }
    }, []);

    const initialValues = {
        email: '',
        password: ''
    }

    const onSubmit = (values: any) => {
        setIsLoading(true);
        userServices.loginService(values)
            .then(res => {
                dispatch(saveUserInfo(res));
                toast.success('Sign in success!');
                navigate('/profile');
            })
            .catch(err => {
                toast.error(err.response.data.message);
                setIsLoading(false);
            });
    };

    return (
        <section className="pt-[103px] bg-color_main py-6 px-4">
            <div className="container mx-auto md:py-24 py-20">
                <Formik
                    initialValues={initialValues}
                    onSubmit={onSubmit}
                    validationSchema={LoginValidation}
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
                                            name="email"
                                            label="Email"
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
                                                    isLoading ? 'Loading' : ' Sign In'
                                                }
                                            </span>
                                        </button>
                                        <p className="text-center text-border">
                                            Don't have an account?
                                            <NavLink to="/register" className="text-white ml-3 font-bold" >
                                                Sign Up
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

export default Login;