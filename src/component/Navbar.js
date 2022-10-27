import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="text-nav-container">
            <NavLink className="textNav" style={({ isActive }) => {
                return {
                    textDecoration: "none",
                    // fontSize: "2vw",
                    display: "block",
                    margin: "1rem 0 0",
                    color: isActive ? "white" : "grey",
                    fontWeight: isActive ? "bold" : "",

                }
            }}
                to={`/me`}>
                <p>me</p>
            </NavLink>
            <NavLink className="textNav" style={({ isActive }) => {
                return {
                    textDecoration: "none",
                    // fontSize: "2vw",
                    display: "block",
                    color: isActive ? "white" : "grey",
                    fontWeight: isActive ? "bold" : "",
                }
            }}
                to={`/about`}>
                <p>about</p>
            </NavLink>
            <NavLink className="textNav" style={({ isActive }) => {
                return {
                    textDecoration: "none",
                    // fontSize: "2vw",
                    display: "block",
                    color: isActive ? "white" : "grey",
                    fontWeight: isActive ? "bold" : "",
                }
            }}
                to={`/maplist`}>
                <p>maplist</p>
            </NavLink>
            {/* <NavLink className="textNav" style={({ isActive }) => {
                return {
                    textDecoration: "none",
                    // fontSize: "2vw",
                    display: "block",
                    color: isActive ? "white" : "grey",
                    fontWeight: isActive ? "bold" : "",
                }
            }}
                to={`/makansiang`}>
                <p>makan Siang</p>
            </NavLink> */}
        </div>

    )
}

export default Navbar;