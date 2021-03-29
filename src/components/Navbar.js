import { Link } from "react-router-dom";
// import Button from "react-bootstrap/Button";
// import { FiHome } from "react-icons/fi";
import { BsFillHouseFill } from "react-icons/bs";

const Navbar = () => {
    return (
            <nav className="navbar navbar-expand-lg bg-info justify-content-between fixed-top mb-5">
                <div className="container">
        <           div>
                        <Link to="/" className="nav-link text-white">
                            <strong>COUNTRIES API</strong>
                        </Link>
                    </div>
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link text-white">
                            {/* <FiHome/> */}
                            <BsFillHouseFill/>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/countries" className="nav-link text-white">
                                Countries
                            </Link>
                        </li>
                    </ul>
                    </div>
            
            </nav>
    )
}

export default Navbar
