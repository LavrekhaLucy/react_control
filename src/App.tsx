import {Outlet} from "react-router-dom";
import SideBar from "./components/side-bar/SideBar.tsx";
import Header from "./components/header/Header.tsx";
import Pagination from "./pagination/Pagination.tsx";


function App() {


  return (
    <div>

        <Header/>
        <SideBar/>
         <Outlet/>
        <Pagination/>

    </div>


  )
}

export default App
