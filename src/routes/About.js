// import { Avatar, Card, IconButton, Typography } from "@mui/material";
// import SettingsIcon from '@mui/icons-material/Settings';
// import MenuIcon from '@mui/icons-material/Menu';
// import { useEffect, useState } from "react";
// import AboutDesktop from "../component/AboutDesktop";
// import AboutMobile from "../component/AboutMobile";
// import Navbar from "../component/Navbar";

// export const MAPBOX_API_KEY = "pk.eyJ1IjoiZGVkb3Rpa2VhIiwiYSI6ImNsYTI4aTlxNTBmbGUzcG9qZG1zY3p0eGcifQ.qNonohbDOkn2FTrTLhZLbA"


// const About = () => {

//     const [width, setWidth] = useState(window.innerWidth);

//     function handleWindowSizeChange() {
//         setWidth(window.innerWidth);
//     }

//     useEffect(() => {
//         window.addEventListener('resize', handleWindowSizeChange);
//         return () => {
//             window.removeEventListener('resize', handleWindowSizeChange);
//         }
//     }, []);

//     const isMobile = (width <= 480);
//     const RenderByDevice = () => {
//         return (
//             <div>
//                 {isMobile ?
//                     <AboutMobile></AboutMobile> :
//                     <AboutDesktop></AboutDesktop>
//                 }
//                 screen size: {width}px
//             </div>
//         )
//     }

//     return (
//         <div className="AboutPage" style={{ background: "black", color: "white" }}>
//             {/* kalo teks ini dihapus, kenapa colorbgnya ngga ngisi? */}
//             <Navbar></Navbar>
//             <div style={{ display: "flex", flexDirection: "column", textAlign: "center", alignItems: "center", justifyContent: "center" }}>
//                 <RenderByDevice></RenderByDevice>
//                 <div>
//                     <Avatar></Avatar>
//                     <IconButton aria-label="setting" color="secondary">
//                         <SettingsIcon></SettingsIcon>
//                     </IconButton>
//                     <IconButton aria-label="menu" color="secondary">
//                         <MenuIcon></MenuIcon>
//                     </IconButton>
//                     <Card>
//                         <Typography component="h1" variant='subtitle1'>test subtitle1</Typography>
//                     </Card>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default About

import Navbar from "../component/Navbar";
// import Tippy from "@tippyjs/react";

export default function About() {
    return (
        <div style={{ background: "black" }}>
            <div>
                <Navbar></Navbar>
            </div>
            {/* temp color */}
            <div style={{ background: "gold", textAlign: "center" }}>
                <h1>WIP</h1>
            </div>
            {/* <Tippy content="Hello">
                <button>My button</button>
            </Tippy> */}
        </div>
    )
}