import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../store/store.ts";
import {movieDetailActions} from "../../slices/movieDetailSlice.ts";
import {useParams} from "react-router-dom";



export const MovieDetailCard = () => {

    const dispatch = useAppDispatch();
    const{id}=useParams();
    const movie = useAppSelector(state => state.movieDetailStoreSlice.movie);

    useEffect(() => {
        if (id) {
            dispatch(movieDetailActions.loadMovie(Number(id)));
        }

    }, [dispatch, id]);

    if (!movie) return <p>Loading...</p>;




    return (
        <div>
            <div style={{
                display: 'flex',
                gap: '2rem',
                padding: '2rem',
                border: '2px solid #FFD700',
                borderRadius: '1.5rem',
                background: '#fefcea',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
            }}>
                <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    style={{ width: '400px', borderRadius: '1rem' }}
                />

                <div>
                    <h1 style={{ fontSize: '2rem', color: '#003399' }}>{movie.title}</h1>
                    <p><strong>Overview:</strong>{movie.overview}</p>
                    <p><strong>Popularity:</strong> {movie.popularity}</p>
                    <p><strong>Rating:</strong> {movie.vote_average} </p>
                </div>
            </div>

        </div>

    );
};

