import './style/global.scss'
import './style/custom.scss';
import './style/loading.scss';

import userServices from './api/userServices';
import { useQuery } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginValidation } from './validation/UserValidation';
import InputLogin from './custom-field/InputLogin';
import InlineError from './notfications/Error';
import HomePage from './pages/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Footer from './components/Footer';
import React, { Suspense } from 'react';
import Header from './components/header/Header';
import { routes } from './routes';
import { Toaster, toast } from 'react-hot-toast';

function App() {
    // const { data, isLoading } = useQuery({
    //     queryKey: ['userServices'],
    //     queryFn: () => userServices.loginService({
    //         email: 'khanhla3344werui@gmail.com',
    //         password: "124234edaq24245",
    //     }),
    //     // staleTime: 1000
    //     keepPreviousData: true
    // });

    // const {
    //     register,
    //     handleSubmit,
    //     formState: { errors }
    // } = useForm({
    //     resolver: yupResolver(LoginValidation)
    // })

    // const onSubmit = (data: any) => {
    //     console.log(data)
    // }

    const HomePage = React.lazy(() => import('./pages/HomePage'));

    toast.error("This didn't work.")


    return (
        <div className="App">
            <Toaster
                position="bottom-left"
                reverseOrder={false}
            />
            <Suspense fallback={
                <div className="text-red-400 h-[100vh] flex items-center justify-center">
                    <svg className="pl" width="240" height="240" viewBox="0 0 240 240">
                        <circle className="pl__ring pl__ring--a" cx="120" cy="120" r="105" fill="none" stroke="#000" stroke-width="20" stroke-dasharray="0 660" stroke-dashoffset="-330" stroke-linecap="round"></circle>
                        <circle className="pl__ring pl__ring--b" cx="120" cy="120" r="35" fill="none" stroke="#000" stroke-width="20" stroke-dasharray="0 220" stroke-dashoffset="-110" stroke-linecap="round"></circle>
                        <circle className="pl__ring pl__ring--c" cx="85" cy="120" r="70" fill="none" stroke="#000" stroke-width="20" stroke-dasharray="0 440" stroke-linecap="round"></circle>
                        <circle className="pl__ring pl__ring--d" cx="155" cy="120" r="70" fill="none" stroke="#000" stroke-width="20" stroke-dasharray="0 440" stroke-linecap="round"></circle>
                    </svg>
                </div>
            }>
                <BrowserRouter>
                    <Header />
                    <Routes>
                        {
                            routes.map((route, idx) => {
                                return (
                                    <Route
                                        key={idx}
                                        path={route.path}
                                        element={route.element}
                                    />
                                )
                            })
                        }
                    </Routes>
                    <Footer />
                </BrowserRouter>
            </Suspense>
        </div>
    );
}

export default App;
