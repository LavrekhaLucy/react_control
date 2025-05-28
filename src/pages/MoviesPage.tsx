import MoviesList from "../components/movies-list/MoviesList.tsx";
import {Outlet} from "react-router-dom";
import Pagination from "../pagination/Pagination.tsx";


const MoviesPage = () => {
    return (
        <div>

            <MoviesList/>
            <Outlet/>
            <Pagination/>


        </div>
    );
};

export default MoviesPage;