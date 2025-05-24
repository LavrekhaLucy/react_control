import {useEffect, useState} from "react";
import type {IMovie} from "../../models/IGenres/IMovie.ts";

import {MovieCard} from "./movie-card/MovieCard.tsx";
import {getMovie} from "../../services/api.service.ts";

const MovieListCard = () => {
    const [movies, setMovies] = useState<IMovie[]>([]);

    useEffect(() => {
        getMovie().then(res => setMovies(res.data.results));
    }, []);

    return (
        <div>
            <h1>Card Movie</h1>

            {
                movies.map(movie => <MovieCard key ={movie.id} movie={movie} />)
            }
        </div>
    );
};

export default MovieListCard;