import type {FC} from "react";
import type {IMovie} from "../../../models/IGenres/IMovie.ts";
import {Link} from "react-router-dom";

type MoviePropsType = {
    value: IMovie,
}
export const MovieList:FC<MoviePropsType> = ({value}) => (


    <div className="movies-list grid grid-cols-4 grid-rows-8">
        <h1 className='text-2xl'>{value.title}</h1>

        <h2>{value.poster_path}</h2>
        <p>Рейтинг: {value.vote_average}</p>

        <Link to={`/movie/${value.id}`}>
            <button className='border-2 border-b-inherit rounded-sm '> more detail </button>
        </Link>

    </div>
);

