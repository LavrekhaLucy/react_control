import {useEffect, useState} from "react";
import type {IMovie} from "../../models/IGenres/IMovie.ts";
import {getMovies} from "../../services/api.service.ts";
import {MovieCard} from "./movie-card/MovieCard.tsx";

const MoviesListCard = () => {
    const [movies, setMovies] = useState<IMovie[]>([]);

    useEffect(() => {
        getMovies().then(res => setMovies(res.data.results));
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

export default MoviesListCard;