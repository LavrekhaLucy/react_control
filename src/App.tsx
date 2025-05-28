import {Outlet} from "react-router-dom";
import Header from "./components/header/Header.tsx";
import SideBar from "./components/side-bar/SideBar.tsx";


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
