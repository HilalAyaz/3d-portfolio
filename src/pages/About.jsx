import { skills, experiences } from "../constants";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import CTA from "../components/CTA";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const About = () => {
  return (
    <section className="max-container ">
      <h1 className="head-text">
        Hello, I&apos;m{" "}
        <span className="blue-gradient_text font-semibold drop-shadow-lg">
          Hilal
        </span>
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          {" "}
          A Full Stack Developer from Pakistan, I have a degree in computer
          science and currently learning Full Stack Web Development with MERN Stack, NextJs and many other technologies.
        </p>
        <p className="mt-5 text-lg text-black font-semibold">
          Some Important Links:
        </p>
        <div className="flex gap-3">
          <Link
            to="https://www.linkedin.com/in/itshilaal/"
            className="hover:text-blue-500 font-semibold duration-200 ease-in hover:underline"
          >
            LinkedIn
          </Link>
          <Link
            to="https://www.Github.com/HilalAyaz"
            className="hover:text-blue-500 font-semibold duration-200 ease-in hover:underline"
          >
            GitHub
          </Link>
          <Link
            to="https://hilalayaz-webdev.netlify.app/"
            className="hover:text-blue-500 font-semibold duration-200 ease-in hover:underline"
          >
            Portfolio
          </Link>
        </div>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text"> My Skills </h3>
        <p>Here are some of my skills:</p>
        <div className="mt-10 flex  flex-wrap gap-12">
          {skills.map((skill) => (
            <div className="block-container w-20 h-20" key={skill.name}>
              <div className="btn-back rounded-xl " />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-16">
        <h3 className="subhead-text">
          My{" "}
          <span className="blue-gradient_text font-semibold drop-shadow-lg">
            Experience
          </span>
        </h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            {" "}
            I have experience in different areas of web development. I have worked on many languages, libraries, and frameworks such as React, Next, Node, TypeScript, HTML/CSS, Tailwindcss, Bootstrap, and many more. I have worked on many different projects. Some of my experiences in the field are shown below:
          </p>
        </div>
        <div className="mt-12 flex">
          <VerticalTimeline>
            {experiences.map((experience) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className="w-[60%] h-[60%] object-contain"
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
                iconStyle={{ background: experience.iconBg }}
              >
                <div>
                  <h3 className="text-xl text-black font-poppins font-semibold">
                    {experience.title}
                  </h3>
                  <p
                    className="text-black-500 font-medium font-base"
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>
                <ul className="my-5 list-disc ml-5 space-y-2">
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className="text-black-500/50 font-normal pl-1 text-sm"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
      <hr className="border-slate-300" />
      <CTA />
      <Footer/>

    </section>
  );
};

export default About;
