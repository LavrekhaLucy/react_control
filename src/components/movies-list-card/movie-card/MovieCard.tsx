import {Link} from 'react-router-dom';
import type {FC} from "react";
import type {IMovie} from "../../../models/IGenres/IMovie.ts";

type MovieTypeProps = {
    movie:IMovie;
}

export const MovieCard:FC<MovieTypeProps> = ({ movie }) => (
    <Link to={`/movie/${movie.id}`} className="card">
        {movie.poster_path}
        <h3>{movie.title}</h3>
        {movie.vote_average / 2}
    </Link>
);
