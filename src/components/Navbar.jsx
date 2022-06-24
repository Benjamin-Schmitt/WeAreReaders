import { Link } from "react-router-dom";
export function NavBar() {
    return (
        <div className="navbar">  
            <div className="navButton">
                <div className="navi"></div>
                <div className="navi"></div>
                <div className="navi"></div>
                <div className="navi"></div>                
            </div>
            <div className="dropdown-content">
                <Link to="/reader/mylist">Book List</Link>                 
            </div>        
        </div>       
        )
}
