import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <NavLink className="textNav" style={({ isActive }) => {
                return {
                    textDecoration: "none",
                    fontSize: "1.5em",
                    display: "block",
                    margin: "1rem 0",
                    color: isActive ? "white" : "grey",
                    fontWeight: isActive ? "bold" : "",
                    
                }
            }}
                to={`/me`}>
                me
            </NavLink>
            <NavLink className="textNav" style={({ isActive }) => {
                return {
                    textDecoration: "none",
                    fontSize: "1.5em",
                    display: "block",
                    margin: "1rem 0",
                    color: isActive ? "white" : "grey",
                    fontWeight: isActive ? "bold" : "",
                }
            }}
                to={`/about`}>
                about
            </NavLink>
            <NavLink className="textNav" style={({ isActive }) => {
                return {
                    textDecoration: "none",
                    fontSize: "1.5em",
                    display: "block",
                    margin: "1rem 0",
                    color: isActive ? "white" : "grey",
                    fontWeight: isActive ? "bold" : "",
                }
            }}
                to={`/maplist`}>
                maplist
            </NavLink>
            <NavLink className="textNav" style={({ isActive }) => {
                return {
                    textDecoration: "none",
                    fontSize: "1.5em",
                    display: "block",
                    margin: "1rem 0",
                    color: isActive ? "white" : "grey",
                    fontWeight: isActive ? "bold" : "",
                }
            }}
                to={`/makansiang`}>
                makan Siang
            </NavLink>
        </>

    )
}

export default Navbar;