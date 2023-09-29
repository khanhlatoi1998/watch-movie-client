import './style/global.scss'
import './style/custom.scss';
import './style/loading.scss';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import React, { Suspense } from 'react';
import Header from './components/header/Header';
import { routes } from './routes';
import { Toaster } from 'react-hot-toast';

function App() {
    const HomePage = React.lazy(() => import('./pages/HomePage'));

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
                                    >
                                        {
                                            route.children?.map((children: any, key: any) => {
                                                return (
                                                    <Route
                                                        key={key}
                                                        path={children.path}
                                                        element={children.element}
                                                    ></Route>
                                                )
                                            })
                                        }
                                    </Route>
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
