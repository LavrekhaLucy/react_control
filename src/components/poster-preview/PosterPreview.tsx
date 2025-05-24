import type {FC} from "react";
import type {IMovie} from "../../models/IGenres/IMovie.ts";

type PosterPreviewTypeProps = {
    movie:IMovie;

}

export const PosterPreview:FC<PosterPreviewTypeProps> = ({ movie }) => (


    <img src={`https://image.tmdb.org/t/p/w200${movie}`}
         alt="Poster"
         className="poster"/>
);