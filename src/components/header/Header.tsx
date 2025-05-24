import {Link} from "react-router-dom";
import'./Header.css'

const Header = () => {

    return (
        <div>
            <ul>
                <li><Link to={'genre'}>Genre</Link></li>
                <li><Link to={'movie'}>Movie</Link></li>
                <li><Link to={'TV'}>TV</Link></li>
            </ul>
        </div>
    );
};

export default Header;