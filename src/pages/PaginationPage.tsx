// import {PaginationWithParams} from "../components/pagination/Pagination.tsx";
import {Outlet} from "react-router-dom";
import PaginationComponent from "../components/pagination/Pagination.tsx";

export const PaginationPage = () => {
    return (
        <div>

            <Outlet/>
<PaginationComponent/>

            {/*<PaginationWithParams totalPages={totalSearchPages} />*/}


        </div>
    );
};