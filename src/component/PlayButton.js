import React from "react";
import playButton from "../assets/button/play.png"
import pauseButton from "../assets/button/pause.png"


const PlayButton = () => {
    return(
        <div className="play-button-container">
            <input type="image" src={playButton} alt="play.png"></input>
        </div>
    )
}

export default PlayButton;