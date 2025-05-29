import {useSearchParams} from "react-router-dom";
import {useAppSelector} from "../store/store.ts";




    // export const PaginationComponent = () => {
    //     const [searchParams, setSearchParams] = useSearchParams({page: '1'});
    //     const totalPages = useAppSelector(state => state.movieStoreSlice.moviesPage?.total_pages || 1);
    //     let currentPage = Number(searchParams.get("page") || "1");
    //
    //     const goToPage = (page: number) => {
    //         if (page >= 1 && page <= totalPages) {
    //             setSearchParams({ page: page.toString() });
    //         }
    //     };
    //
    //         const visiblePages = Array.from(
    //             { length: Math.min(10, totalPages) }, // показуємо не більше 10
    //             (_, i) => i + 1
    //         );
    //
    //     return (
    //         <div className="flex align-bottom justify-center gap-4 mb-9">
    //             <button className="px-4 py-2 border rounded text-purple-600 border-purple-300 hover:bg-purple-600 hover:text-white"
    //
    //                         onClick={()=>{
    //                             if (currentPage >= 1){
    //                              goToPage(--currentPage)}
    //
    //                     }}>Prev</button>
    //
    //                    {visiblePages.map(page => (
    //                         <button
    //                             key={page}
    //                             onClick={() => goToPage(page)}
    //                             className={`px-3 py-1 rounded border ${
    //                                 page === currentPage
    //                                     ? "bg-purple-600 text-white"
    //                                     : "bg-white text-purple-600 hover:bg-purple-100"
    //                             }`}
    //                         >
    //                             {page}
    //                         </button>
    //                     ))}
    //
    //
    //                     <button className="px-4 py-2 border rounded text-purple-600 border-purple-300 hover:bg-purple-600 hover:text-white"
    //                             onClick={()=>{
    //                                 if(currentPage <= totalPages)
    //                            goToPage(++currentPage)
    //
    //                     }}>Next</button>
    //
    //                 </div>
    //
    //
    //
    //             );
    //             };
    //

const PaginationComponent = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const moviesPage = useAppSelector(state => state.movieStoreSlice.moviesPage);
    const totalPages = moviesPage?.total_pages || 1;
    const currentPage = Number(searchParams.get("page") || "1");
    // const genre = searchParams.get("genre");

    const goToPage = (page: number) => {
        const params = { page: page.toString() };
        // if (genre) params.genre = genre;
        setSearchParams(params);
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
        <div className="flex justify-center items-center gap-2 mt-6 mb-6 flex-wrap">
            <button
                disabled={currentPage <= 1}
                onClick={() => goToPage(currentPage - 1)}
                className="px-3 py-1 border rounded hover:bg-purple-100 "
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
                disabled={currentPage >= totalPages}
                onClick={() => goToPage(currentPage + 1)}
                className="px-3 py-1 border rounded hover:bg-purple-100 disabled:opacity-50"
            >
                Next
            </button>
        </div>
    );
};

export default PaginationComponent;