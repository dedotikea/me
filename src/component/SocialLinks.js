import React from "react";
import discordIcon from "../assets/images/socials/discord.png"
import githubIcon from "../assets/images/socials/github.png"
import gmailIcon from "../assets/images/socials/gmail.png"
import instagramIcon from "../assets/images/socials/instagram.png"
import osuIcon from "../assets/images/socials/osu.png"
import twitchIcon from "../assets/images/socials/twitch.png"
import twitterIcon from "../assets/images/socials/twitter.png"
import youtubeIcon from "../assets/images/socials/youtube.png"


//bikin title dengan props value
const SocialLinks = () => {
    const discord = discordIcon;
    const github = githubIcon;
    const gmail = gmailIcon;
    const instagram = instagramIcon;
    const osu = osuIcon;
    const twitch = twitchIcon;
    const twitter = twitterIcon;
    const youtube = youtubeIcon;
    const blank = "_blank";
    const copy = () => {
        navigator.clipboard.writeText("dedotikea#8526")
        
    }
    return (
        <div className="SocialLinks-container">
            <div>
                <input type="image" src={discord} alt="discordIcon.png" onClick={copy}></input>
            </div>
            <div>
                <a href="https://github.com/dedotikea" target={blank}>
                    <img src={github} alt="githubIcon.png"></img>
                </a>
            </div>
            <div>
                <a href="mailto:rayhangustiar@gmail.com" target={blank}>
                    <img src={gmail} alt="gmailIcon.png"></img>
                </a>
            </div>
            <div>
                <a href="https://www.instagram.com/dedotikea/" target={blank}>
                    <img src={instagram} alt="instagramIcon.png"></img>
                </a>
            </div>
            <div>
                <a href="https://osu.ppy.sh/users/8805157" target={blank}>
                    <img src={osu} alt="osuIcon.png"></img>
                </a>
            </div>
            <div>
                <a href="https://www.twitch.tv/dedotikea" target={blank}>
                    <img src={twitch} alt="twitchIcon.png"></img>
                </a>
            </div>
            <div>
                <a href="https://twitter.com/dedotikea_ctb" target={blank}>
                    <img src={twitter} alt="twitterIcon.png"></img>
                </a>
            </div>
            <div>
                <a href="https://www.youtube.com/channel/UCba2VpPlvlnYIHR3Nr6Va4A" target={blank}>
                    <img src={youtube} alt="youtubeIcon.png"></img>
                </a>
            </div>
        </div>
    )
}

export default SocialLinks;