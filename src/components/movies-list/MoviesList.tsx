import {useEffect, useState} from 'react';
import {getMovies} from "../../services/api.service.ts";
import {MovieList} from "./movie-list/MovieList.tsx";
import type {IMovie} from "../../models/IGenres/IMovie.ts";


const MoviesList = () => {
    const [movies, setMovies] = useState<IMovie[]>([]);

    useEffect(() => {
        getMovies().then(value =>setMovies(value.results));

    }, []);

    return (
        <div>
            <h1 className='font-serif text-4xl'>Popular Movies</h1>


            {
                movies.map(value => <MovieList key ={value.id} value={value} />)
            }
        </div>
    );
};

export default MoviesList;