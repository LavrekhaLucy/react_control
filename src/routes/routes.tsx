import {createBrowserRouter} from 'react-router-dom';
import MoviesPage from "../pages/MoviesPage.tsx";
import MovieDetailsPage from "../pages/MovieDetailsPage.tsx";
import App from "../App.tsx";


export const routes =createBrowserRouter([

    {
        path: "/", element: <App/>, children: [
            {path: "movie", element: <MoviesPage/>},
            {path: "movie/:id", element: <MovieDetailsPage/>}
    ]
            }


])


