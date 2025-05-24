import type {FC} from "react";
import type {IMovie} from "../../../models/IGenres/IMovie.ts";

type MovieTypeProps = {
    movie:IMovie;
}

export const MovieCard:FC<MovieTypeProps> = ({ movie}) => (
    <div>

        <h1>{movie.title}</h1>
        <h3>{movie.overview}</h3>
        {movie.vote_average}
    </div>
);



