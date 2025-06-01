import {createBrowserRouter} from 'react-router-dom';
import MoviesPage from "../pages/MoviesPage.tsx";
import MovieInfoPage from "../pages/MovieInfoPage.tsx";
import App from "../App.tsx";
import {MainPage} from "../pages/MainPage.tsx";
import {PaginationPage} from "../pages/PaginationPage.tsx";


export const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {path:"", element:<PaginationPage/>, children:[
                    {path:"genre/movie/list",element:<MainPage/>},
                    { path: "movie", element: <MoviesPage />},                ]
            },
            { path: "movie/:id", element: <MovieInfoPage /> },
            // { path: "movie/:id/posters", element: <PosterPreview /> },

        ],
    },
]);
