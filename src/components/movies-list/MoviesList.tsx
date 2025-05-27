import {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../store/store.ts";
import {movieActions} from "../../slices/movieSlice.ts";
import {MovieList} from "./movie-list/MovieList.tsx";


const MoviesList = () => {

    const dispatch = useAppDispatch();
    const movies = useAppSelector(state => state.movieStoreSlice.movies);

    useEffect(()=>{

        dispatch(movieActions.loadMovies());

    },[]);
    if (!movies) return <p>Loading...</p>;

    return (
        <div>
            <div style={{display: 'flex', justifyContent: 'center',alignItems: 'center'}}>
                <h1 className='font-serif text-5xl text-gray-800'>Popular Movies</h1>
            </div>

                {
                    movies.results.map((movie) => <MovieList key={movie.id} movie = {movie}/>)
                }


        </div>
    );
};

export default MoviesList;

