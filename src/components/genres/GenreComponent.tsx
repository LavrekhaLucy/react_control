import {useAppDispatch, useAppSelector} from "../store/store.ts";
import {useEffect} from "react";
import {genreActions} from "../../slices/genreSlice.ts";
import GenreBadge from "./GenreBadge.tsx";
import {movieActions} from "../../slices/movieSlice.ts";

export const GenreComponent = () => {
    const dispatch = useAppDispatch();
    const genres = useAppSelector(state => state.genreStoreSlice.genres);

    const handleGenreClick = (id: number) => {
        dispatch(movieActions.loadMoviesByGenre(id));
    };
    useEffect(()=>{

        dispatch(genreActions.loadGenres());

    },[dispatch]);

    if (!genres || genres.length === 0) {
        return <p className="text-center text-gray-500">Завантаження жанрів...</p>;
    }


    return (
        <div>

                {
                   genres.map((genre) => <GenreBadge key={genre.id} id={genre.id} name={genre.name} onClick={handleGenreClick}/>)
                }

        </div>
    );
};



