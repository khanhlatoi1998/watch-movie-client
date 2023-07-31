import ContactUs from "../pages/ContactUs";
import AboutUs from "../pages/AboutUs";
import Detail from "../pages/Detail";
import HomePage from "../pages/HomePage";
import Login from "../pages/Login";
import MoviesTemplate from "../pages/MoviesTemplate";
import Register from "../pages/Register";
import Watch from "../pages/Watch";
import Profile from "../pages/Profile";
import UpdateProfile from "../components/profile/UpdateProfile";
import DashboardProfile from "../components/profile/DashboardProfile";
import MoviesListProfile from "../components/profile/MoivesListProfile";
import AddMovieProfile from "../components/profile/AddMovieProfile";
import FavoritesMovies from "../components/profile/FavoritesMovies";
import ChangePassword from "../components/profile/ChangePassword";

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
    },
    {
        path: '/detail/:id',
        element: <Detail />
    },
    {
        path: '/watch',
        element: <Watch />
    },
    {
        path: '/profile',
        element: <Profile />,
        children: [
            {
                path: 'dashboard',
                element: <DashboardProfile />
            },
            {
                path: 'movies-list',
                element: <MoviesListProfile />
            },
            {
                path: 'add-movie',
                element: <AddMovieProfile />
            },
            {
                path: 'update-profile',
                element: <UpdateProfile />
            },
            {
                path: 'favorites-movies',
                element: <FavoritesMovies />
            },
            {
                path: 'change-password',
                element: <ChangePassword />
            },

        ]
    }
];
