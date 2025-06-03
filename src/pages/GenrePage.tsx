// import { useEffect } from "react";
// import { useSearchParams } from "react-router-dom";
//
// import { genreActions } from "../slices/genreSlice";
// import { movieActions } from "../slices/movieSlice";
// import GenreBadge from "../components/genres/GenreBadge.tsx";
// import {useAppDispatch, useAppSelector} from "../components/store/store.ts";
//
//
// export const GenrePage = () => {
//     const dispatch = useAppDispatch();
//     const genres = useAppSelector((state) => state.genreStoreSlice.genres);
//     const [searchParams, setSearchParams] = useSearchParams();
//
//
//     const sort = searchParams.get("sort") || "popularity.desc";
//
//     useEffect(() => {
//         dispatch(genreActions.loadGenres());
//     }, [dispatch]);
//
//     const handleGenreClick = (genreId: number) => {
//         setSearchParams({ genreId: genreId.toString(), page: "1", sort });
//         dispatch(movieActions.loadMoviesByGenre({ genreId, page: 1, sort }));
//     };
//
//     if (!genres || genres.length === 0) {
//         return <p className="text-center text-gray-500">Завантаження жанрів...</p>;
//     }
//
//     return (
//         <div className="flex flex-wrap justify-center gap-4">
//             {genres.map((genre) => (
//                 <GenreBadge
//                     key={genre.id}
//                     id={genre.id}
//                     name={genre.name}
//                     onClick={handleGenreClick}
//                 />
//             ))}
//         </div>
//     );
// };


import {GenreComponent} from "../components/genres/GenreComponent.tsx";

const GenrePage = () => {
    return (
        <div>
            <GenreComponent/>

        </div>
    );
};

export default GenrePage;