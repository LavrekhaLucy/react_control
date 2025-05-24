import type {FC} from "react";
import type {IMovie} from "../../models/IGenres/IMovie.ts";

type PosterPreviewTypeProps = {
    value:IMovie;

}

export const PosterPreview:FC<PosterPreviewTypeProps> = ({ value }) => (


    <img src={`https://image.tmdb.org/t/p/w200${value}`}
         alt="Poster"
         className="poster"/>
);