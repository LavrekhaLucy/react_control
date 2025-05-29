import {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../store/store.ts";
import {movieActions} from "../../slices/movieSlice.ts";
import {MovieList} from "./movie-list/MovieList.tsx";
import {useSearchParams} from "react-router-dom";


const MoviesList = () => {

    const dispatch = useAppDispatch();

    const movies = useAppSelector(state => state.movieStoreSlice.movies);

    const [searchParams]=useSearchParams({page:'1'});

    useEffect(()=>{
        const currentPage =searchParams.get("page") || '1';

        dispatch(movieActions.loadMovies(currentPage));



    },[dispatch,searchParams]);


    // if (!movies || !Array.isArray(movies)) {
    //
    //     return <p>Loading...</p>;
    // }

    return (
        <div style={{display: 'flex', justifyContent: 'center',alignItems: 'center', flexDirection: 'row',flexWrap: 'wrap',gap:'15px'}}>
            
            {/*<div style={{display: 'flex', justifyContent: 'center',alignItems: 'center'}}>*/}
            {/*    <h1 className='font-serif text-5xl text-gray-800'>Popular Movies</h1>*/}
            {/*</div>*/}



                {movies &&
                movies.map((movie) => <MovieList key={movie.id} movie={movie}/>)
            }



        </div>
    );
};

export default MoviesList;

