import type {FC} from "react";
import type {IMovie} from "../../../models/IMovies/IMovie.ts";
import StarRatings from "react-star-ratings";
import {IMAGE_BASE_URL} from "../../user-info/UserInfo.ts";
import {Link} from "react-router-dom";


type MoviePropsType = {
    movie: IMovie,
}

export const MovieList:FC<MoviePropsType> = ({movie}) => (


        <div style={{
            display: 'flex',
           flexDirection:'column',
        }}>


            <div>
                <img
                src={`${IMAGE_BASE_URL}/w200${movie.poster_path}`}
                alt={movie.title}/>
            </div>


            <div>

                <Link to={`/movie/${movie.id}`}>
                    <h1 className='text-2xl hover:text-blue-500'>{movie.title}</h1>
                </Link>
            </div>


                <p>{movie.release_date}</p>
            <StarRatings
                rating={movie.vote_average / 2}
                starRatedColor="#facc15"
                starEmptyColor="#e5e7eb"
                starDimension="20px"
                starSpacing="2px"
                numberOfStars={5}
                name={`rating-${movie.id}`}
            />


            </div> );







            {/*    <p>Rating: {movie.vote_average}</p>*/}




