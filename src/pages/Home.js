import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";


const Home = () => {
 
  return (
    <div>
      <TypeAnimation
        className={"home position-absolute top-50 start-50 translate-middle-y"}
        sequence={[`Come Explore FullStack With Me.`, 5000]}
        wrapper="span"
        speed={30}
        repeat={Infinity}
        cursor={true}
      />
      <Link
        to="/aboutMe"
        className="mx-3 px-3 display-3 link rounded-5 bg-success bg-opacity-25 fw-bold position-absolute top-50 end-50 translate-middle-y"
      >
        About Me
      </Link>
    </div>
  );
};

export default Home;
