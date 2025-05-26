import {Link} from "react-router-dom";

const Menu = () => {
    return (


            <div>
                <h2 className="text-xl font-bold mb-4 space-y-6">Menu</h2>
                <nav className="space-y-6">
                    <Link to="/" className="block hover:text-yellow-300">Main</Link>
                    <Link to="/movie" className="block hover:text-yellow-300">Movies</Link>
                    <Link to="/genre" className="block hover:text-yellow-300">All genres</Link>
                </nav>
            </div>



    );

};

export default Menu;