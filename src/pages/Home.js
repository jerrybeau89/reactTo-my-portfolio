import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";
import { explore } from "../assets/js/Text";


const Home = () => {
 
  return (
    <>
      <div>
        <TypeAnimation
          sequence={explore}
          wrapper="span"
          speed={30}
          repeat={1}
          cursor={true}
          className={"home-ani text-center"}
        />
      </div>
      <div>
      <Link
        to="/aboutMe"
        className="home-link col mx-3 px-3 display-3 link rounded-5 bg-success bg-opacity-25 fw-bold"
      >
        About Me
      </Link>
      </div>
    </>
  );
};

export default Home;
