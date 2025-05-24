import {Link} from "react-router-dom";

const Menu = () => {
    return (
        <ul>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'movie'}>Movie</Link></li>
            <li><Link to={'/movie/:id'}>Movie details</Link></li>
        </ul>
    );
};

export default Menu;