// import Navbar from "../component/Navbar";
// // import MapCard from "../component/MapCard";
// // import { Container, Grid } from "@mui/material"
// import LatihanPakeAPI from "../component/LatihanPakeAPI";

// export default function MapList() {

//     return (
//         //temp color
//         <>
//         <Navbar></Navbar>
//             <div style={{ background: "black", color: "white", display: "flex", flexDirection: "column", textAlign: "center", alignItems: "center", justifyContent: "center" }} className="MapListPage">
//                 {/* temp color */}
//                 misalnya judul
//                 {/* <Container>
//                     <Grid
//                         container spacing={4}>
//                         <MapCard></MapCard>
//                         <MapCard></MapCard>
//                     </Grid>
//                 </Container> */}
//                 <LatihanPakeAPI></LatihanPakeAPI>
//             </div>
//         </>
//     )
// }

import Navbar from "../component/Navbar";

export default function MapList() {
    return (
        //temp color
        <div style={{ background: "black" }}>
            <div>
                <Navbar></Navbar>
            </div>
            {/* temp color */}
            <div style={{ background: "gold", textAlign: "center" }}>
                <h1>WIP</h1>
            </div>
        </div>
    )
}