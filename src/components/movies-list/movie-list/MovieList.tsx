import type {FC} from "react";
import type {IMovie} from "../../../models/IGenres/IMovie.ts";

type MoviePropsType = {
    value: IMovie,
}
export const MovieList:FC<MoviePropsType> = ({value}) => (


    <div className="movies-list">
        {value.id} --- {value.title}

    </div>
);

