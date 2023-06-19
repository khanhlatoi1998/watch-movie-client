import { NavLink } from "react-router-dom";

const Login = () => {
    return (
        <section className="pt-[103px] bg-color_main py-6 px-4">
            <div className="container mx-auto md:py-24 py-20">
                <form action="" className=" border-solid border-border mx-auto  bg-color_02 w-full 2xl:w-3/5 gap-8 flex-colo p-8 sm:p-14 md:w-3/5 bg-dry  rounded-lg border">
                    <div className="flex flex-col justify-between gap-8">
                        <figure>
                            <img src="./images/logo.png" alt="" className="w-full h-12 object-contain" />
                        </figure>
                        <div className="w-full">
                            <div className="text-sm w-full">
                                <label className="text-border font-semibold">Email</label>
                                <input name="email" type="email" placeholder="netflixo@gmail.com" className="w-full text-sm mt-2 p-5 border border-border rounded text-white bg-color_main" />
                            </div>
                        </div>
                        <div className="w-full">
                            <div className="text-sm w-full">
                                <label className="text-border font-semibold">Password</label>
                                <input name="email" type="email" placeholder="******" className="w-full text-sm mt-2 p-5 border border-border rounded text-white bg-color_main"  />
                            </div>
                        </div>
                        <button className="bg-color_01 px-4 py-4 rounded-lg">
                            <span>
                                <i className="fa-solid fa-arrow-right-to-bracket mr-4"></i>
                            </span>
                            <span className="font-medium">
                                Sign In
                            </span>
                        </button>
                        <p className="text-center text-border">
                            Don't have an account?
                            <NavLink to="/register" className="text-white ml-3 font-bold" >
                                Sign Up
                            </NavLink>
                        </p>
                    </div>
                </form>
            </div>
        </section>
    )
};

export default Login;