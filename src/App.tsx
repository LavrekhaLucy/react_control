import {Outlet} from "react-router-dom";
import Menu from "./components/menu/Menu.tsx";
import Header from "./components/header/Header.tsx";


function App() {


  return (
    <div>
        <Menu/>
        <Header/>
        <hr/>
        <Outlet/>

    </div>
  )
}

export default App
