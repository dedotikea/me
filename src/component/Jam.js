import React, { useState, useEffect } from 'react'
import moment from "moment";
import "moment/locale/id";

const Jam = () => {
    const [dayndate, setDaynDate] = useState("Monday, January 1, 2022");
    const [time, settime] = useState("11:27 AM");

    const getDateNTime = () => {
        let dateNtime = moment()
            .locale("id")
            .format("dddd, DD MMMM YYYY, h:mm:ss a")
            .split(",");
        setDaynDate(`${dateNtime[0]}, ${dateNtime[1]}`);
        settime(`${dateNtime[2]}`);
    };

    useEffect(() => {
        setInterval(getDateNTime, 1000);
    });

    return (
        <div style={{position: "fixed", zIndex: "100", color: "white", marginTop: "25px", marginRight: "25px",textAlign: "right", right: "0", fontSize: "5vw"}}>
            <div>{time}</div>
            <div>{dayndate}</div>
        </div>
    );
}

export default Jam