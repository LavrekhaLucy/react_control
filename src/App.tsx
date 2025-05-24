import {Outlet} from "react-router-dom";
import SideBar from "./components/side-bar/SideBar.tsx";
import Header from "./components/header/Header.tsx";


function App() {


  return (
    <div>

        <Header/>
        <SideBar/>
        <Outlet/>
    </div>


  )
}

export default App
