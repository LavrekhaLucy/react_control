import {Link} from "react-router-dom";

const Menu = () => {
    return (


            <>
                <h2 className="text-xl font-bold mb-4">Menu</h2>
                <nav className="space-y-2">
                    <Link to="/" className="block hover:text-yellow-300">Main</Link>
                    <Link to="/movie" className="block hover:text-yellow-300">Movies</Link>
                    <Link to="/movie/:id" className="block hover:text-yellow-300">Movie Details</Link>
                    <Link to="/genre" className="block hover:text-yellow-300">All genres</Link>
                </nav>
            </>



    );

};

export default Menu;