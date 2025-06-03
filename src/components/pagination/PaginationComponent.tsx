// import {useAppDispatch, useAppSelector} from "../store/store.ts";
// import {useSearchParams} from "react-router-dom";
// import {movieActions} from "../../slices/movieSlice.ts";
//
// const PaginationComponent = () => {
//     const dispatch = useAppDispatch();
//     const [searchParams, setSearchParams] = useSearchParams();
//
//     const moviesPage = useAppSelector(state => state.movieStoreSlice.moviesPage);
//     const totalPages = moviesPage?.total_pages || 1;
//     let currentPage = Number(searchParams.get("page") || "1");
//
//
//     const searchQuery = searchParams.get("search");
//     const genreId = searchParams.get("genre");
//
//     const goToPage = (page: number) => {
//
//         const params = new URLSearchParams(searchParams);
//         params.set("page", page.toString());
//         setSearchParams(params);
//
//
//         if (searchQuery) {
//             dispatch(movieActions.loadMoviesBySearch({
//                 query: searchQuery,
//                 page
//             }));
//         }
//         else if (genreId) {
//                 dispatch(movieActions.loadMoviesByGenre({
//                     genreId: Number(genreId),
//                     page,
//                     sort: "popularity.desc"
//                 }));
//             } else {
//                 dispatch(movieActions.loadMovies(page.toString()));
//             }
//     };
//
//     const createPageNumbers = () => {
//         const pages: (number | string)[] = [];
//
//         if (totalPages <= 10) {
//             for (let i = 1; i <= totalPages; i++) pages.push(i);
//         } else {
//             pages.push(1);
//
//             if (currentPage > 4) pages.push("...");
//
//             const start = Math.max(2, currentPage - 2);
//             const end = Math.min(totalPages - 1, currentPage + 2);
//             for (let i = start; i <= end; i++) pages.push(i);
//
//             if (currentPage < totalPages - 3) pages.push("...");
//
//             pages.push(totalPages);
//         }
//
//         return pages;
//     };
//
//     const visiblePages = createPageNumbers();
//
//     return (
//         <div className="flex justify-center items-center gap-2 mt-14 mb-18 flex-wrap">
//             <button
//                 className="px-3 py-1 border rounded hover:bg-purple-100 disabled:opacity-50"
//                 // disabled={currentPage <= 1}
//                 onClick={() => {
//                     if (currentPage >= 1) {
//                         goToPage(-- currentPage );
//                     }
//                 }}>
//
//                 Previous
//
//             </button>
//
//             {visiblePages.map((page, index) =>
//                 typeof page === "number" ? (
//                     <button
//                         key={index}
//                         onClick={() => goToPage(page)}
//                         className={`px-3 py-1 rounded border ${page === currentPage? "bg-purple-600 text-white" : "bg-white text-purple-600 hover:bg-purple-100"}`}>
//
//                         {page}
//
//                     </button>
//
//                 ) : (
//                     <span key={index} className="px-2 text-gray-400 select-none">...</span>
//                 )
//             )}
//
//             <button
//                 className="px-3 py-1 border rounded hover:bg-purple-100 disabled:opacity-50"
//                 // disabled={currentPage >= totalPages}
//                 onClick={() => {
//                     if (currentPage < totalPages) {
//                         goToPage(++currentPage);
//                     }
//                 }}
//             >
//                 Next
//             </button>
//         </div>
//     );
// };
//
// export default PaginationComponent;




import {useAppDispatch, useAppSelector} from "../store/store.ts";
import {useSearchParams} from "react-router-dom";
import {movieActions} from "../../slices/movieSlice.ts";

const PaginationComponent = () => {
    const dispatch = useAppDispatch();
    const [searchParams, setSearchParams] = useSearchParams();

    // Отримуємо параметри пошуку з URL
    const searchQuery = searchParams.get("search");
    const genreId = searchParams.get("genre");
    let currentPage = Number(searchParams.get("page") || "1");

    // Отримуємо дані залежно від типу пошуку
    const moviesPage = useAppSelector(state => state.movieStoreSlice.moviesPage);
    const totalSearchPages = useAppSelector(state => state.movieStoreSlice.totalSearchPages);

    // Визначаємо загальну кількість сторінок залежно від контексту
    const totalPages = searchQuery
        ? totalSearchPages || 1
        : moviesPage?.total_pages || 1;

    const goToPage = (page: number) => {
        // Зберігаємо всі існуючі параметри і оновлюємо тільки сторінку
        const params = new URLSearchParams(searchParams);
        params.set("page", page.toString());
        setSearchParams(params);

        // Дебаг інформація
        console.log('Going to page:', page);
        console.log('Search query:', searchQuery);
        console.log('Genre ID:', genreId);

        // Викликаємо відповідний action залежно від типу пошуку
        if (searchQuery) {
            // Якщо є пошуковий запит
            console.log('Dispatching search with:', { query: searchQuery, page });
            dispatch(movieActions.loadMoviesBySearch({
                query: searchQuery,
                page
            }));
        } else if (genreId) {
            // Якщо обраний жанр
            dispatch(movieActions.loadMoviesByGenre({
                genreId: Number(genreId),
                page,
                sort: "popularity.desc" // або інший тип сортування за замовчуванням
            }));
        } else {
            // Звичайне завантаження всіх фільмів (популярні/топові)
            dispatch(movieActions.loadMovies(page.toString() ));
        }
    };

    const createPageNumbers = () => {
        const pages: (number | string)[] = [];

        if (totalPages <= 10) {
            for (let i = 1; i <= totalPages; i++) pages.push(i);
        } else {
            pages.push(1);

            if (currentPage > 4) pages.push("...");

            const start = Math.max(2, currentPage - 2);
            const end = Math.min(totalPages - 1, currentPage + 2);
            for (let i = start; i <= end; i++) pages.push(i);

            if (currentPage < totalPages - 3) pages.push("...");

            pages.push(totalPages);
        }

        return pages;
    };

    const visiblePages = createPageNumbers();

    return (
        <div className="flex justify-center items-center gap-2 mt-14 mb-18 flex-wrap">
            <button
                className="px-3 py-1 border rounded hover:bg-purple-100 disabled:opacity-50"
                // disabled={currentPage <= 1}
                onClick={() => {
                    if (currentPage > 1) {
                        goToPage(--currentPage);
                    }
                }}
            >
                Previous
            </button>

            {visiblePages.map((page, index) =>
                typeof page === "number" ? (
                    <button
                        key={index}
                        onClick={() => goToPage(page)}
                        className={`px-3 py-1 rounded border ${
                            page === currentPage
                                ? "bg-purple-600 text-white"
                                : "bg-white text-purple-600 hover:bg-purple-100"
                        }`}
                    >
                        {page}
                    </button>
                ) : (
                    <span key={index} className="px-2 text-gray-400 select-none">...</span>
                )
            )}

            <button
                className="px-3 py-1 border rounded hover:bg-purple-100 disabled:opacity-50"
                // disabled={currentPage >= totalPages}
                onClick={() => {
                    if (currentPage < totalPages) {
                        goToPage(++currentPage);
                    }
                }}
            >
                Next
            </button>
        </div>
    );
};

export default PaginationComponent;