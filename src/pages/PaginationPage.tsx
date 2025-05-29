import Pagination from "../components/pagination/Pagination.tsx";
import {Outlet} from "react-router-dom";

export const PaginationPage = () => {
    return (
        <div>
        <Pagination/>
            <Outlet/>

        </div>
    );
};