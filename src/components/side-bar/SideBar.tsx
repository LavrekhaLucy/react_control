import {Outlet} from "react-router-dom";
import Menu from "../menu/Menu.tsx";

const SideBar = () => {


    return (

        <div className="flex h-screen">

            {/* Sidebar */}
            <aside className="w-64 bg-gradient-to-b from-purple-900 to-blue-900 text-white p-4 flex-shrink-0 ">
               <Menu/>
            </aside>

            {/* Основна частина */}
            <main className="flex-1 p-6 overflow-y-auto bg-gray-50">
                <Outlet />
            </main>
        </div>



    );
};

// <div className="SideBar">
//     <aside className=" bg-gradient-to-b from-purple-900 to-blue-900 text-white p-5 ">
//         <div className="text-lg font-semibold mb-6">Estelle Collins</div>
//         <nav className="space-y-2">
//             <button className="block w-full text-left">Movies</button>
//             <button>TV Shows</button>
//             <button>Music</button>
//             <button>Audiobooks</button>
//             <button>Games</button>
//             <button>Apps</button>
//             <button>Updates</button>
//         </nav>
//     </aside>

{/* Основна частина */}
//     <main className="flex-1 p-6 overflow-y-auto bg-gray-50">
//         <Outlet />
//     </main>
//
//
//
// </div>
export default SideBar;