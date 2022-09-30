import { Link } from "react-router-dom"
import "./Navbar.css"
function Navbar(){
    return (
        <nav className="nav_container">
            <div>LOGO</div>
            <ul>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="technology">Technology</Link></li>
                <li><Link to="science">Science</Link></li>
                <li><Link to="entertainment">Entertainment</Link></li>
                <li><Link to="business">Business</Link></li>
                <li><Link to="health">Health</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar