import "./Home.css"
import image from "../../images/image.png"

const Home = () => {
    return ( 
    <div className="homecontainer">
    <img className="image" src={image} alt="view"/>
    <p>Welcome to the SCORE app. The idea behind the app is to help people understand the importance of reducing their carbon footprint and ways of being able to do so. Also some helpful tips and advise on how best to recycle materials. </p>
    </div>
    );
}
 
export default Home;