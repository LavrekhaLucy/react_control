import {useEffect, useState} from 'react';
import type {IMovie} from "../../models/IGenres/IMovie.ts";
import {getMovies} from "../../services/api.service.ts";
import {MovieList} from "./movie-list/MovieList.tsx";


const MoviesList = () => {
    const [movies, setMovies] = useState<IMovie[]>([]);

    useEffect(() => {
        getMovies().then(res => setMovies(res.data.results));
    }, []);

    return (
        <div>
            <h1>Popular Movies</h1>


            {
                movies.map(value => <MovieList key ={value.id} value={value} />)
            }
        </div>
    );
};

export default MoviesList;