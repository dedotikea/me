import BackgroundChanges from "../component/BackgroundChanges"
import Footer from "../component/Footer";
import HeaderText from "../component/HeaderText";
import Navbar from "../component/Navbar";
import SocialLinks from "../component/SocialLinks";

const Home = () => {
    return (
        <div className="HomePage">
            <div className="Box"></div>
            <BackgroundChanges></BackgroundChanges>
            <Navbar></Navbar>
            <SocialLinks></SocialLinks>
            <HeaderText></HeaderText>
            <Footer></Footer>
        </div>
    )
}

export default Home;