import type {FC} from "react";
import type {IMovie} from "../../../models/IMovies/IMovie.ts";
import {Link} from "react-router-dom";
import {IMAGE_BASE_URL} from "../../user-info/UserInfo.ts";


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
                alt={movie.title}
            /></div>


            <div>

                <Link to={`/movie/${movie.id}`}>
                    <h1 className='text-2xl hover:text-blue-500'>{movie.title}</h1>
                </Link>


                <p>{movie.release_date}</p>
                <p>Rating: {movie.vote_average}</p>
            </div>

        </div>


);
