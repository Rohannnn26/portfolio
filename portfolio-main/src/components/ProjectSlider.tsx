import bannerBg from "../assets/img/bannerbg.webp";
import React, { useRef } from "react";
import Button from "./Button";
import LiveTicker from "./ParallaxText";
import { projectsData, toastMessages } from "../assets/lib/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCards, Pagination } from "swiper/modules";
import { ToastContainer, toast } from "react-toastify";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { useSectionInView } from "../assets/lib/hooks";
import { motion, useScroll, useTransform } from "framer-motion";
import "react-toastify/dist/ReactToastify.css";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";

const ProjectSlider: React.FC = () => {
  const { ref } = useSectionInView("Projects");
  const animationReference = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: animationReference,
    offset: ["1 1", "1.3 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const notifyServerRequest = () => {
    toast.info(toastMessages.loadingProject.en);
  };

  return (
    <React.Fragment>
      <section
        className=" skill-banner relative overflow-x-clip min-h-screen w-full flex flex-col gap-2 py-32"
        id="projects"
        ref={ref}
      >
        <ToastContainer
          className="w-max text-3xl block p-3 "
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <div
          className="quote-outer-container bg-[--darkblue] -rotate-3 flex justify-center items-center scale-110 pt-32 pb-32 max-lg:pt-16 max-lg:pb-16 max-lg:-ml-44 max-lg:-mr-44 max-lg:scale-100 "
          style={{
            backgroundImage: `url(${bannerBg})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="title-container flex flex-col  gap-6 mb-24 rotate-3 justify-between items-center max-lg:w-[100vw]">
            <motion.div
              ref={animationReference}
              style={{
                scale: scaleProgess,
                opacity: opacityProgess,
                textAlign: "center",
              }}
            >
              <p className="text-[--white] mt-16 mb-6">
                <span className="text-turquoise">&lt;</span>
                {"Projects"}
                <span className="text-turquoise">/&gt;</span>
              </p>
              <h2 className="text-[--white] mb-16">{"My Projects"}</h2>
            </motion.div>
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards, Autoplay, Pagination]}
              className=" w-[50vw] max-lg:hidden min-[1921px]:px-96"
              loop={true}
              autoplay={{
                delay: 4000,
                disableOnInteraction: true,
                pauseOnMouseEnter: true,
              }}
              pagination={{
                clickable: true,
              }}
            >
              {projectsData.map((project, index: number) => (
                <SwiperSlide
                  key={index}
                  className="quote-outer-container bg-[--darkblue] text-[--white] flex flex-row justify-center items-center  rounded-2xl p-20 text-center max-lg:hidden "
                >
                  <div className=" w-[90%] flex flex-col gap-12 justify-between">
                    <div className="flex justify-center items-center gap-5 w-full">
                      <div className="flex justify-center items-center h-[8rem] overflow-hidden rounded-xl w-[8rem] transition-all duration-200 shadow-2xl">
                        <img
                          src={project.image}
                          alt={`${project.title}-project-mockup`}
                          className={`w-full h-auto transition-all duration-[6000ms] transform opacity-100 hover:translate-y-[-50%] 
                      `}
                        />
                      </div>
                      <h2>{project.title}</h2>
                    </div>
                    <p className="text-white">{project.description_EN}</p>
                    <div className="technologies">
                      <h3>{"Technologies"}</h3>
                      <div className="grid grid-cols-6 gap-10 p-4">
                        {project.technologies.map(
                          (technology, innerIndex: number) => (
                            <img
                              key={innerIndex}
                              src={technology.icon}
                              alt={`${project.title}-icon`}
                              className="h-[5rem] w-[5rem] "
                              data-tooltip-id="my-tooltip"
                              data-tooltip-content={technology.name}
                            />
                          )
                        )}
                      </div>
                    </div>
                    <div className="buttons flex justify-center items-center gap-10">
                      <Button
                        label="Live Demo"
                        link={project.deploymenturl}
                        iconSVG={project.deploymenticon}
                        buttoncolor={project.colors.main}
                        iconcolor={project.colors.icon}
                        onClick={notifyServerRequest}
                      />
                      <Button
                        label="Github Repository"
                        link={project.githuburl}
                        iconSVG={project.githubicon}
                        buttoncolor={project.colors.main}
                        iconcolor={project.colors.icon}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            {projectsData.map((project, index: number) => (
              <article
                key={index}
                className="bg-darkblue flex flex-col gap-10 w-[80%] h-full  border-lightTur border-[0.4rem] p-8 rounded-xl mb-10 min-[1024px]:hidden max-lg:w-[90%]"
              >
                <div className="flex justify-center items-center gap-8">
                  <img
                    src={project.image}
                    alt={project.image}
                    className="h-[8rem] w-[8rem] object-cover object-top rounded-3xl"
                  />
                  <h2 className="text-white text-5xl">{project.title}</h2>
                </div>
                <div className="buttons flex gap-10 max-lg:flex-col justify-center items-center">
                  <Button
                    label="Live Demo"
                    link={project.deploymenturl}
                    iconSVG={project.deploymenticon}
                    buttoncolor={project.colors.main}
                    iconcolor={project.colors.icon}
                  />
                  <Button
                    label="Github Repository"
                    link={project.githuburl}
                    iconSVG={project.githubicon}
                    buttoncolor={project.colors.main}
                    iconcolor={project.colors.icon}
                  />
                </div>
                <p className="text-white text-center  max-lg:text-3xl">
                  {project.description_EN}
                </p>

                <div className="technologies flex flex-col justify-center items-center">
                  <h3 className="text-white">{"Technologies"}</h3>
                  <div className="grid grid-cols-3 gap-10 p-4">
                    {project.technologies.map(
                      (technology, innerIndex: number) => (
                        <img
                          key={innerIndex}
                          src={technology.icon}
                          alt={`${project.title}-icon`}
                          className="h-[5rem] w-[60%] "
                          data-tooltip-id="my-tooltip"
                          data-tooltip-content={technology.name}
                        />
                      )
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
        <LiveTicker />
      </section>
      <ReactTooltip
        place="top"
        id="my-tooltip"
        style={{
          fontSize: "1.5rem",
          backgroundColor: "var(--turquoise)",
        }}
      />
    </React.Fragment>
  );
};

export default ProjectSlider;
