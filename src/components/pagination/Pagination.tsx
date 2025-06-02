import {useSearchParams} from "react-router-dom";
import {useAppSelector} from "../store/store.ts";






const PaginationComponent = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const moviesPage = useAppSelector(state => state.movieStoreSlice.moviesPage);
    const totalPages = moviesPage?.total_pages || 1;
    let currentPage = Number(searchParams.get("page") || "1");
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
        <div className="flex justify-center items-center gap-2 mt-14 mb-18 flex-wrap">
            <button className="px-3 py-1 border rounded hover:bg-purple-100 "
                onClick={()=>{
                    if (currentPage >= 1){
                  goToPage(--currentPage)}
                }}>
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

            <button className="px-3 py-1 border rounded hover:bg-purple-100 disabled:opacity-50"

            onClick={() =>{
                if (currentPage <= totalPages){
                    goToPage(++currentPage)}
             }}>
                Next
            </button>
        </div>
    );
};

export default PaginationComponent;


//
// import { useSearchParams } from "react-router-dom";
//
// type Props = {
//     totalPages: number;
//     paramKey?: string; // параметр в URL, за замовчуванням — 'page'
// };
//
// export const PaginationWithParams = ({ totalPages, paramKey = "page" }: Props) => {
//     const [searchParams, setSearchParams] = useSearchParams();
//     const currentPage = parseInt(searchParams.get(paramKey) || "1", 10);
//
//     const goToPage = (page: number) => {
//         searchParams.set(paramKey, String(page));
//         setSearchParams(searchParams);
//     };
//
//     const createPageNumbers = () => {
//         const pages: (number | string)[] = [];
//
//         if (totalPages <= 10) {
//             for (let i = 1; i <= totalPages; i++) pages.push(i);
//         } else {
//             pages.push(1);
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
//     const pageNumbers = createPageNumbers();
//
//     return (
//         <div className="flex justify-center items-center gap-2 mt-6 flex-wrap">
//             <button
//                 onClick={() => goToPage(currentPage - 1)}
//                 disabled={currentPage <= 1}
//                 className="px-3 py-1 rounded bg-gray-300 hover:bg-gray-400 disabled:opacity-50"
//             >
//                 Prev
//             </button>
//
//             {pageNumbers.map((page, i) =>
//                     page === "..." ? (
//                         <span key={`dots-${i}`} className="px-2 text-gray-500">
//             ...
//           </span>
//                     ) : (
//                         <button
//                             key={page}
//                             onClick={() => goToPage(page as number)}
//                             className={`px-3 py-1 rounded ${
//                                 currentPage === page
//                                     ? "bg-blue-600 text-white"
//                                     : "bg-gray-100 hover:bg-gray-200"
//                             }`}
//                         >
//                             {page}
//                         </button>
//                     )
//             )}
//
//             <button
//                 onClick={() => goToPage(currentPage + 1)}
//                 disabled={currentPage >= totalPages}
//                 className="px-3 py-1 rounded bg-gray-300 hover:bg-gray-400 disabled:opacity-50"
//             >
//                 Next
//             </button>
//         </div>
//     );
// };
