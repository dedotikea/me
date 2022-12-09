import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="Navbar">
            <div className="text-nav-container">
                <NavLink
                    className="textNav"
                    style={({ isActive }) => {
                        return {
                            textDecoration: "none",
                            display: "block",
                            color: isActive ? "white" : "grey",
                            fontWeight: isActive ? "bold" : "",

                        }
                    }}
                    to={`/me`}>
                    <p>me</p>
                </NavLink>
                <NavLink
                    className="textNav"
                    style={({ isActive }) => {
                        return {
                            textDecoration: "none",
                            display: "block",
                            color: isActive ? "white" : "grey",
                            fontWeight: isActive ? "bold" : "",
                        }
                    }}
                    to={`/about`}>
                    <p>nyoba map</p>
                </NavLink>
                <NavLink
                    className="textNav"
                    style={({ isActive }) => {
                        return {
                            textDecoration: "none",
                            display: "block",
                            color: isActive ? "white" : "grey",
                            fontWeight: isActive ? "bold" : "",
                        }
                    }}
                    to={`/maplist`}>
                    <p>nyoba api</p>
                </NavLink>
                {/* <NavLink 
                className="textNav" 
                style={({ isActive }) => {
                return {
                    textDecoration: "none",
                    display: "block",
                    color: isActive ? "white" : "grey",
                    fontWeight: isActive ? "bold" : "",
                }
            }}
                to={`/makansiang`}>
                <p>makan Siang</p>
            </NavLink> */}
            </div>
        </div>

    )
}

export default Navbar;