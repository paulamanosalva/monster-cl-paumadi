import logo from "../assets/images/logo.webp"
import skate from "../assets/images/skate.jpg"
import ScrollButton from "./ScrollButton";

const Home = () => {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-cover " style={{ backgroundImage: `url(${skate})` }}>
              <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay */}
              <div className="relative z-10 text-center">
        <img src={logo} alt="logo"/>
        <ScrollButton targetId="carouselSection"/>
      </div>
      </div>
    );
  };
  
  export default Home;