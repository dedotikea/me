import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <NavLink style={({ isActive }) => {
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
            <NavLink style={({ isActive }) => {
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
            <NavLink style={({ isActive }) => {
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
        </>

    )
}

export default Navbar;