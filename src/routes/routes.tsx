import {createBrowserRouter} from 'react-router-dom';
import MoviesPage from "../pages/MoviesPage.tsx";
import MovieDetailsPage from "../pages/MovieDetailsPage.tsx";
import App from "../App.tsx";
import {MainPage} from "../pages/MainPage.tsx";


export const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {path:"genre/movie/list",element:<MainPage/>},
            { path: "movie", element: <MoviesPage /> },
            { path: "movie/:id", element: <MovieDetailsPage /> },
            // { path: "movie/:id/posters", element: <PosterPreview /> },

        ],
    },
]);
