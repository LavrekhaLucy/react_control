// import {PaginationWithParams} from "../components/pagination/Pagination.tsx";
import {Outlet} from "react-router-dom";

export const PaginationPage = () => {
    return (
        <div>

            <Outlet/>
            {/*<PaginationWithParams totalPages={totalSearchPages} />*/}


        </div>
    );
};