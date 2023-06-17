import ContactUs from "../components/ContactUs";
import AboutUs from "../pages/AboutUs";
import HomePage from "../pages/HomePage";
import Login from "../pages/Login";
import MoviesTemplate from "../pages/MoviesTemplate";
import Register from "../pages/Register";

export const routes = [
    {
        path: '/',
        element: <HomePage />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/register',
        element: <Register />
    },
    {
        path: '/about-us',
        element: <AboutUs />
    },
    {
        path: '/contact-us',
        element: <ContactUs />
    },
    {
        path: '/movies',
        element: <MoviesTemplate />
    }
];
