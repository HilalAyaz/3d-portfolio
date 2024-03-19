import { Link } from "react-router-dom";
import { projects } from "../constants";
import { arrow } from "../assets/icons";
import CTA from "./../components/CTA";
import Footer from "../components/Footer";

const Projects = () => {
  return (
    <section className="max-container">
      <div className="w-full">
        <h1 className="head-text">
          My{" "}
          <span className="blue-gradient_text font-semibold drop-shadow-lg">
            Projects
          </span>
        </h1>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            {" "}
            I have worked on a variety of projects over the years. Many of them
            are open source, if you come accross that pings your mind, feel free
            to explore and contribute for further enhancements. Your collab is
            highly valued. Here are some of the most closest projects to me:
          </p>
        </div>
        <div>
          <p className="mt-5 text-lg text-slate-500 font-semibold">
            You can view all my projects on my GitHub Profile.
          </p>
          <div className="flex items-center gap-2 font-poppins">
            <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
            <Link
              to="https://github.com/HilalAyaz"
              target="_blank"
              rel="noreferrer noopenner"
              className="font-semibold text-blue-400 hover:text-blue-900 duration-150 ease-in"
            >
              Visit GitHub
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap my-20 gap-16 w-full">
        {projects.map((project) => (
          <div   key={project.name}>
            <div className="block-container w-12 h-12">
              <div className={`btn-back rounded-xl ${project.theme}  `} />
              <div className=" btn-front rounded-xl flex justify-center items-center ">
                <img
                  src={project.iconUrl}
                  alt={project.name}
                  className="w-1/2 h=1/2 object-contain"
                />
              </div>
            </div>
            <div className="mt-5 flex flex-col">
              <h4 className="text-2xl font-poppins font-semibold blue-gradient_text">
                {project.name}
              </h4>
              <p className=" mt-2 text-slate-500">{project.description}</p>

              <div className="mt-5 flex items-center gap-2 font-poppins">
                <img
                  src={arrow}
                  alt="arrow"
                  className="w-4 h-4 object-contain"
                />
                <Link
                  to={project.link}
                  target="_blank"
                  rel="noreferrer noopenner"
                  className="font-semibold text-blue-400 hover:text-blue-900 duration-150 ease-in"
                >
                  Live Link
                </Link>
              </div>
              <div className="flex items-center gap-2 font-poppins">
                <img
                  src={arrow}
                  alt="arrow"
                  className="w-4 h-4 object-contain"
                />
                <Link
                  to={project.githubLink}
                  target="_blank"
                  rel="noreferrer noopenner"
                  className="font-semibold text-blue-400 hover:text-blue-900 duration-150 ease-in"
                >
                  GitHub Link
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <hr className=" border-slate-500" />
      <CTA />
      <Footer />
    </section>
  );
};

export default Projects;
