import BackgroundChanges from "../component/BackgroundChanges"
import Footer from "../component/Footer";
import HeaderText from "../component/HeaderText";
import Navbar from "../component/Navbar";
import SocialLinks from "../component/SocialLinks";


const Home = () => {
    return (
        <div className="Main">
            <div className="Box"></div>
            <div className="Navbar">
                <Navbar></Navbar>
            </div>
            <div className="SocialLinks">
                <SocialLinks></SocialLinks>
            </div>
            <div className="Header">
                <HeaderText></HeaderText>
            </div>
            <div className="Background">
                <BackgroundChanges></BackgroundChanges>
            </div>
            <div className="Footer">
                <Footer></Footer>
            </div>
        </div>
    )
}

export default Home;