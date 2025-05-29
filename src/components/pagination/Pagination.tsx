import {useSearchParams} from "react-router-dom";
import {useAppSelector} from "../store/store.ts";


// export const PaginationComponent = () => {
//     const [searchParams, setSearchParams] = useSearchParams('page');
//     let currentPage = Number(searchParams.get("page")|| '1');
//
//     return (
//         <div>
//             <button className="border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 ..."
//                 onClick={()=>{
//                 if (currentPage >= 1){
//                     setSearchParams({page: (--currentPage).toString()});
//                 }
//
//             }}>prev</button>
//
//             <button className="border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 ..."
//                 onClick={()=>{
//                 setSearchParams({page: (++currentPage).toString()});
//             }
//             }>next</button>
//         </div>
//     );




    export const PaginationComponent = () => {
        const [searchParams, setSearchParams] = useSearchParams({page: '1'});
        const totalPages = useAppSelector(state => state.movieStoreSlice.moviesPage?.total_pages || 1);
        let currentPage = Number(searchParams.get("page") || "1");

        const goToPage = (page: number) => {
            if (page >= 1 && page <= totalPages) {
                setSearchParams({ page: page.toString() });
            }
        };

        return (
            <div className="flex align-bottom justify-center gap-4 mb-9">
                <button className="px-4 py-2 border rounded text-purple-600 border-purple-300 hover:bg-purple-600 hover:text-white"

                            onClick={()=>{
                                if (currentPage >= 1){
                                 goToPage(--currentPage)}

                        }}>Prev</button>

                       <span className="text-lg font-semibold text-gray-700">
                              {currentPage} / {totalPages}
                        </span>


                        <button className="px-4 py-2 border rounded text-purple-600 border-purple-300 hover:bg-purple-600 hover:text-white"
                                onClick={()=>{
                                    if(currentPage <= totalPages)
                               goToPage(++currentPage)

                        }}>Next</button>

                    </div>



                );
                };



                // <div className="flex justify-center gap-4 mt-6">
            //     <button
            //         className="px-4 py-2 border rounded text-purple-600 border-purple-300 hover:bg-purple-600 hover:text-white"
            //         disabled={currentPage <= 1}
            //         onClick={() => goToPage(--currentPage)}
            //     >
            //         Prev
            //     </button>
            //
            //
            //
            //
            //     <span className="text-lg font-semibold text-gray-700">
            //             {currentPage} / {totalPages}
            //     </span>
            //
            //     <button
            //         className="px-4 py-2 border rounded text-purple-600 border-purple-300 hover:bg-purple-600 hover:text-white"
            //         disabled={currentPage >= totalPages}
            //         onClick={() => goToPage(++currentPage)}
            //     >
            //         Next
            //     </button>
            // </div>

    // const [query,setQuery]= useSearchParams({page:'1'});
    //
    //
    // return (
    //     <div>
    //         <button className="border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 ..."
    //
    //             onClick={()=>{
    //             const page=query.get('page');
    //             if(page){
    //                 let currentPage =+page;
    //                 setQuery({page:(--currentPage).toString()});
    //             }
    //         }}>Prev</button>
    //
    //         <button className="border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 ..."
    //                 onClick={()=>{
    //             const page=query.get('page');
    //             if(page){
    //                 let currentPage =+page;
    //                 setQuery({page:(++currentPage).toString()});
    //
    //             }
    //         }}>Next</button>
    //
    //     </div>
    // );
// };

export default PaginationComponent;