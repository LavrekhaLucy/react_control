import {useEffect, useState} from "react";
import type {IMovie} from "../../models/IGenres/IMovie.ts";

import {useParams} from "react-router-dom";
import {getMovie} from "../../services/api.service.ts";


export const MovieDetailCard = () => {

    const {id} = useParams();
    const [movieDetail, setMovieDetail] = useState<IMovie | null>(null);

    useEffect(() => {
        if (id) {
            getMovie(Number(id)).then(setMovieDetail).catch(err => console.error(err));}
        },[id]);

        if (!movieDetail) return <p>Loading...</p>;


    return (
        <div>
            <h1>Card Movie</h1>

            <h1>{movieDetail.title}</h1>
            <h3>{movieDetail.overview}</h3>
            <p>{movieDetail.popularity}</p>
            <p>{movieDetail.video}</p>
            <p>Rating:{movieDetail.vote_average}</p>


        </div>
    );
};

