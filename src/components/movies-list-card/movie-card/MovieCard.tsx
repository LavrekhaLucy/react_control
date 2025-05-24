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



// const MovieCard = ({ title, imageUrl }) => (
//     <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300">
//         <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
//         <div className="p-2 text-sm font-medium">{title}</div>
//     </div>
// );