import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";


const Home = () => {
 
  return (
    <>
      <div>
        <TypeAnimation
          className={"home-ani text-center"}
          sequence={[`Come Explore Full Stack With Me.`, 5000]}
          wrapper="span"
          speed={30}
          repeat={Infinity}
          cursor={true}
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
