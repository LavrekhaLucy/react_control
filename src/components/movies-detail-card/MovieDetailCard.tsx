import type {FC} from "react";
import type {IMovie} from "../../models/IMovies/IMovie.ts";
import {Link} from "react-router-dom";

import StarRatings from "react-star-ratings";
import {IMAGE_BASE_URL} from "../user-info/UserInfo.ts";


type MoviePropsType = {
    movie: IMovie,
}

export const MovieDetailCard:FC<MoviePropsType> = ({movie}) => (
    <Link to={`/movie/${movie.id}`}>
    <div
        className="w-48 h-[400px] bg-white rounded-xl shadow-md overflow-hidden cursor-pointer
             transform transition-transform duration-[2000ms] hover:scale-110 hover:shadow-2xl">

        <img
            src={`${IMAGE_BASE_URL}/w500${movie.poster_path}`}
            alt={movie.title}
            className="w-full h-70 object-cover"/>

        <div className="p-3 text-center">
            <h3 className="text-base font-semibold text-gray-800 truncate">{movie.title}</h3>
            <p className="text-base font-semibold text-gray-800 truncate">{movie.release_date}</p>

            <StarRatings
                    rating={movie.vote_average / 2}
                    starRatedColor="#facc15"
                    starEmptyColor="#e5e7eb"
                    starDimension="20px"
                    starSpacing="2px"
                    numberOfStars={5}
                    name={`rating-${movie.id}`}/>
        </div>

    </div>
    </Link>
)



