// import {GenreComponent} from "../components/genres/GenreComponent.tsx";
// import {useAppSelector} from "../components/store/store.ts";
// import {MovieDetailCard} from "../components/movies-detail-card/MovieDetailCard.tsx";
//
// export const MainPage = () => {
//     const searchResults = useAppSelector(state => state.movieStoreSlice.searchResults);
//     const hasSearch = searchResults.length > 0;
//
//     return (
//         <main className="p-6">
//             {hasSearch && (
//                 <section>
//                     <h2 className="text-2xl font-semibold text-center text-gray-800">Search results:</h2>
//                     <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
//                         {searchResults.map(movie => (
//                             <MovieDetailCard key={movie.id} movie={movie} />
//                         ))}
//                     </div>
//
//                 </section>
//             )}
//                 <section className="mb-8">
//                     <h2 className="text-2xl font-serif mb-4 text-center text-gray-700">Genres</h2>
//                     <GenreComponent />
//                 </section>
//
//
//
//         </main>
//     );
// };



























