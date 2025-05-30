import { useState } from "react";
import {useAppDispatch, useAppSelector} from "../store/store";
import { movieActions } from "../../slices/movieSlice";
import {MovieList} from "../movies-list/movie-list/MovieList.tsx";

const Header = () => {
    const dispatch = useAppDispatch();
    const [query, setQuery] = useState("");

    const handleSearch = () => {
        if (query.trim()) {
            dispatch(movieActions.loadMoviesBySearch(query.trim()));
            setQuery(""); // Очистити поле після пошуку
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleSearch();
    };const searchResults = useAppSelector(state => state.movieStoreSlice.searchResults);



    return (
        <div className="w-full">
            <header className="bg-gradient-to-b from-purple-900 to-blue-900 p-4 flex items-center justify-between">
                {/* Логотип */}
                <div className="text-xl font-bold text-white"> The Movies App</div>

                {/* Форма пошуку */}
                <form onSubmit={handleSubmit} className="relative w-80">
                    <input
                        type="search"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Пошук фільму..."
                        className="bg-white h-10 w-full px-10 pr-4 rounded-full text-sm focus:outline-none border"
                    />
                    {searchResults.length > 0 && (
                        <section>
                            <h2>Результати пошуку:</h2>
                            <div>{searchResults.map(movie => (
                                <MovieList key={movie.id} movie={movie}/>
                            ))}</div>
                        </section>
                    )}




                    <button
                        type="submit"
                        className="absolute left-3 top-1/2 transform -translate-y-1/2"
                    >
                        <svg
                            className="h-5 w-5 text-gray-500"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 3a7.5 7.5 0 006.15 13.65z"
                            />
                        </svg>
                    </button>
                </form>
            </header>
        </div>
    );
};

export default Header;

//
//     return (
//         <div className="w-auto has-placeholder-shown:">
//             <header className="bg-gradient-to-b from-purple-900 to-blue-900  p-4 flex-shrink-0 px-6 py-4 flex items-center justify-space-evenly ,">
//                 {/*// Логотип*/}
//                 <div className="text-xl font-bold text-white">The Movies app</div>
//
//
//                 <div className="relative text-gray-600">
//                     <input
//                         type="search"
//                         name="search"
//                         placeholder="Search..."
//                         className="bg-white h-10 px-10 pr-4 rounded-full text-sm focus:outline-none border"
//
//                     />
//
//
//                     <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
//                         <svg className="h-5 w-5 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2"
//                              viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                             <path strokeLinecap="round" strokeLinejoin="round"
//                                   d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 3a7.5 7.5 0 006.15 13.65z"/>
//                         </svg>
//                     </div>
//                 </div>
//
//             </header>
//
//
//
//
//         </div>
//     );
// };

// export default Header;

