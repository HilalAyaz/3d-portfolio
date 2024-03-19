import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <h1 className="sm:text-2xl sm:leading-normal text-center neo-brutalism-blue py-5 px-8 text-gray-100 mx-5 ">
        Hey, I'm
        <span className="font-semibold mx-2 ">Hilal</span>
        👋
        <br />A
        <span className="font-semibold mx-2 ">
          Full Stack Developer
        </span>
        From Pakistan
      </h1>
    );

  if (currentStage === 2) {
    return (
      <div className="info-box ">
        <p className="font-medium sm:text-xl text-center text-gray-100">
          Want to know more about me and my work?
          <br />
          Explore my story here!
        </p>

        <Link to="/about" className="neo-brutalism-white neo-btn">
          Learn more
          <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className="info-box">
        <p className="font-medium text-center sm:text-xl text-gray-100">
          Explore my portfolio to see the projects I have completed.
        </p>

        <Link to="/projects" className="neo-brutalism-white neo-btn">
          Visit my portfolio
          <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className="info-box">
        <p className="font-medium sm:text-xl text-center">
          Need help with a project or looking to collaborate?
       
        </p>

        <Link to="/contact" className="neo-brutalism-white neo-btn">
          Let's talk
          <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
        </Link>
      </div>
    );
  }

  return null;
};

export default HomeInfo;
