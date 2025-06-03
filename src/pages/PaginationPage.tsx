// import {PaginationWithParams} from "../components/pagination/PaginationComponent.tsx";
import {Outlet} from "react-router-dom";
import PaginationComponent from "../components/pagination/PaginationComponent.tsx";


export const PaginationPage = () => {
    return (
        <div>

            <Outlet/>
        <PaginationComponent/>



            {/*<PaginationWithParams totalPages={totalSearchPages} />*/}


        </div>
    );
};