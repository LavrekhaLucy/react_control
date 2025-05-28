import {useSearchParams} from "react-router-dom";


export const PaginationComponent = () => {
    const [query,setQuery]= useSearchParams({page:'1'});


    return (
        <div>
            <button className="border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 ..."

                onClick={()=>{
                const page=query.get('page');
                if(page){
                    let currentPage =+page;
                    setQuery({page:(--currentPage).toString()});
                }
            }}>Prev</button>

            <button className="border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 ..."
                    onClick={()=>{
                const page=query.get('page');
                if(page){
                    let currentPage =+page;
                    setQuery({page:(++currentPage).toString()});

                }
            }}>Next</button>

        </div>
    );
};

export default PaginationComponent;