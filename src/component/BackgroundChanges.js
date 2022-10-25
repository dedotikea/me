import React from "react";
import bckgrd0 from "../assets/images/index1.jpg"
import bckgrd1 from "../assets/images/index2.jpg"
import bckgrd2 from "../assets/images/index3.jpg"
import bckgrd3 from "../assets/images/index4.jpg"
import bckgrd4 from "../assets/images/index5.jpg"
import bckgrd5 from "../assets/images/index6.jpg"
import bckgrd6 from "../assets/images/index7.jpg"
import bckgrd7 from "../assets/images/index8.jpg"
import bckgrd8 from "../assets/images/index9.jpg"
import bckgrd9 from "../assets/images/index10.jpg"
import bckgrd10 from "../assets/images/index11.jpg"
import bckgrd11 from "../assets/images/index12.jpg"
import bckgrd12 from "../assets/images/index13.jpg"
import bckgrd13 from "../assets/images/index14.jpg"
import bckgrd14 from "../assets/images/index15.jpg"
import bckgrd15 from "../assets/images/index16.jpg"

const BackgroundChanges = () => {
    const backgrounds = [
        bckgrd0, bckgrd1, bckgrd2, bckgrd3, bckgrd4, bckgrd5, bckgrd6, bckgrd7, bckgrd8,
        bckgrd9, bckgrd10, bckgrd11, bckgrd12, bckgrd13, bckgrd14, bckgrd15,
    ]
    const [bg, setBg] = React.useState(0);
    React.useEffect(() => {
        const interval = setInterval(() => {
            setBg((bg) => {
                return bg === 15 ? 0 : bg + 1;
            })
        }, 150)
        return () => clearInterval(interval)
    }, [])
    return (
        <div className="background-changes">
            <img src={backgrounds[bg]} alt="index{bg}.jpg"></img>
        </div>
        
    )
}

export default BackgroundChanges;