import { Link } from "react-router-dom"
import "./Navbar.css"
function Navbar(){
    return (
        <nav className="nav_container">
            <ul>
                <li><Link>HOME</Link></li>
                <li><Link>Services</Link></li>
                <li><Link>About Us</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar