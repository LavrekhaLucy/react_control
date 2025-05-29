import type {FC} from "react";
import type {IMovie} from "../../../models/IMovies/IMovie.ts";
import StarRatings from "react-star-ratings";
import {Link} from "react-router-dom";


type MoviePropsType = {
    movie: IMovie,
}

export const MovieList:FC<MoviePropsType> = ({movie}) => (
    <Link to={`/movie/${movie.id}`}>
    <div
        className="w-48 h-[400px] bg-white rounded-xl shadow-md overflow-hidden cursor-pointer
             transform transition-transform duration-[2000ms] hover:scale-110 hover:shadow-2xl">

        <img
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            alt={movie.title}
            className="w-full h-72 object-cover"/>

        <div className="p-3 text-center">
            <h3 className="text-base font-semibold text-gray-800 truncate">{movie.title}</h3>

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



//
// <div style={{
//     width:'250px',
//     display: 'flex',
//     justifyContent:'center',
//     alignItems:'center',
//    flexDirection:'column'
// }}>
//
//
//     <div className='transform transition-transform duration-[2000ms] hover:scale-110 '>
//         <img
//         src={`${IMAGE_BASE_URL}/w200${movie.poster_path}`}
//         alt={movie.title}/>
//     </div>
//
//
//     <div>
//
//         <Link to={`/movie/${movie.id}`}>
//             <h1 className='text-l hover:text-blue-500'>{movie.title}</h1>
//         </Link>
//     </div>
//
//
//         <p className='text-sm'>{movie.release_date}</p>
//
//     <StarRatings
//         rating={movie.vote_average / 2}
//         starRatedColor="#facc15"
//         starEmptyColor="#e5e7eb"
//         starDimension="20px"
//         starSpacing="2px"
//         numberOfStars={5}
//         name={`rating-${movie.id}`}
//     />
//
//
//     </div> );
//
//
//
//
//
//
//


        //     {/*    <p>Rating: {movie.vote_average}</p>*/}
// export const MovieCard = ({ movie }) => {

