import bannerBg from "../assets/img/bannerbg.webp";
import React, { useRef, useState } from "react";
import Button from "./Button";
import LiveTicker from "./ParallaxText";
import { projectsData, toastMessages } from "../assets/lib/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCards, Pagination, Navigation } from "swiper/modules";
import { ToastContainer, toast } from "react-toastify";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { useSectionInView } from "../assets/lib/hooks";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "react-toastify/dist/ReactToastify.css";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";

const ProjectSlider: React.FC = () => {
  const { ref } = useSectionInView("Projects");
  const animationReference = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const { scrollYProgress } = useScroll({
    target: animationReference,
    offset: ["1 1", "1.3 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const notifyServerRequest = () => {
    toast.info(toastMessages.loadingProject.en);
  };

  const cardVariants = {
    initial: { opacity: 0, y: 50, scale: 0.9 },
    animate: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    },
    hover: {
      y: -10,
      transition: { duration: 0.3 }
    }
  };

  const imageVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.1,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  const techVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: i * 0.05, duration: 0.3 }
    }),
    hover: {
      y: -5,
      scale: 1.15,
      transition: { duration: 0.2 }
    }
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
            
            {/* Desktop Swiper with Navigation */}
            <div className="relative w-[55vw] max-lg:hidden min-[1921px]:px-96">
              {/* Custom Navigation Buttons */}
              <motion.button
                className="swiper-button-prev-custom absolute left-[-60px] top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-gradient-to-r from-[--turquoise] to-[--orange] flex items-center justify-center cursor-pointer border-none shadow-lg"
                whileHover={{ scale: 1.15, boxShadow: "0 0 25px rgba(0, 255, 200, 0.5)" }}
                whileTap={{ scale: 0.95 }}
              >
                <FiChevronLeft className="text-white text-3xl" />
              </motion.button>
              <motion.button
                className="swiper-button-next-custom absolute right-[-60px] top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-gradient-to-r from-[--orange] to-[--turquoise] flex items-center justify-center cursor-pointer border-none shadow-lg"
                whileHover={{ scale: 1.15, boxShadow: "0 0 25px rgba(255, 150, 50, 0.5)" }}
                whileTap={{ scale: 0.95 }}
              >
                <FiChevronRight className="text-white text-3xl" />
              </motion.button>

              <Swiper
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards, Autoplay, Pagination, Navigation]}
                className="w-full"
                loop={true}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: true,
                  pauseOnMouseEnter: true,
                }}
                pagination={{
                  clickable: true,
                  dynamicBullets: true,
                }}
                navigation={{
                  prevEl: '.swiper-button-prev-custom',
                  nextEl: '.swiper-button-next-custom',
                }}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              >
                {projectsData.map((project, index: number) => (
                  <SwiperSlide
                    key={index}
                    className="rounded-3xl overflow-hidden"
                  >
                    <motion.div
                      className="bg-gradient-to-br from-[--darkblue] via-[--blackblue] to-[--darkblue] text-[--white] flex flex-row justify-center items-center rounded-3xl p-16 text-center border border-[--turquoise]/20 backdrop-blur-sm"
                      initial="initial"
                      animate="animate"
                      whileHover="hover"
                      variants={cardVariants}
                      style={{
                        boxShadow: `0 20px 60px ${project.colors.projectcolor}30, inset 0 1px 0 rgba(255,255,255,0.1)`,
                      }}
                    >
                      <div className="w-[90%] flex flex-col gap-10 justify-between">
                        {/* Project Header */}
                        <div className="flex justify-center items-center gap-6 w-full">
                          <motion.div 
                            className="relative h-[10rem] w-[10rem] rounded-2xl overflow-hidden shadow-2xl"
                            variants={imageVariants}
                            style={{
                              boxShadow: `0 10px 40px ${project.colors.projectcolor}50`,
                            }}
                          >
                            <motion.img
                              src={project.image}
                              alt={`${project.title}-project-mockup`}
                              className="w-full h-full object-cover object-top"
                              whileHover={{ scale: 1.1 }}
                              transition={{ duration: 0.4 }}
                            />
                            <div 
                              className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"
                            />
                          </motion.div>
                          <div className="flex flex-col items-start gap-2">
                            <motion.h2 
                              className="text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.2 }}
                            >
                              {project.title}
                            </motion.h2>
                            <motion.div 
                              className="h-1 rounded-full bg-gradient-to-r from-[--turquoise] to-[--orange]"
                              initial={{ width: 0 }}
                              animate={{ width: "100%" }}
                              transition={{ delay: 0.4, duration: 0.5 }}
                            />
                          </div>
                        </div>

                        {/* Description */}
                        <motion.p 
                          className="text-gray-300 text-lg leading-relaxed"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.3 }}
                        >
                          {project.description_EN}
                        </motion.p>

                        {/* Technologies */}
                        <div className="technologies">
                          <h3 className="text-[--turquoise] mb-4 text-xl">{"Technologies"}</h3>
                          <div className="grid grid-cols-6 gap-6 p-4">
                            {project.technologies.map(
                              (technology, innerIndex: number) => (
                                <motion.div
                                  key={innerIndex}
                                  className="flex items-center justify-center p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[--turquoise]/50 transition-colors"
                                  variants={techVariants}
                                  custom={innerIndex}
                                  initial="initial"
                                  animate="animate"
                                  whileHover="hover"
                                >
                                  <img
                                    src={technology.icon}
                                    alt={`${technology.name}-icon`}
                                    className="h-[4rem] w-[4rem] object-contain"
                                    data-tooltip-id="my-tooltip"
                                    data-tooltip-content={technology.name}
                                  />
                                </motion.div>
                              )
                            )}
                          </div>
                        </div>

                        {/* Buttons */}
                        <div className="buttons flex justify-center items-center gap-8 mt-4">
                          <motion.div
                            whileHover={{ scale: 1.05, y: -3 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <Button
                              label="Live Demo"
                              link={project.deploymenturl}
                              iconSVG={project.deploymenticon}
                              buttoncolor={project.colors.main}
                              iconcolor={project.colors.icon}
                              onClick={notifyServerRequest}
                            />
                          </motion.div>
                          <motion.div
                            whileHover={{ scale: 1.05, y: -3 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <Button
                              label="Github Repository"
                              link={project.githuburl}
                              iconSVG={project.githubicon}
                              buttoncolor={project.colors.main}
                              iconcolor={project.colors.icon}
                            />
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  </SwiperSlide>
                ))}
              </Swiper>
              
              {/* Project Counter */}
              <motion.div 
                className="flex justify-center mt-8 gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <span className="text-[--turquoise] text-2xl font-bold">{String(activeIndex + 1).padStart(2, '0')}</span>
                <span className="text-gray-400 text-2xl">/</span>
                <span className="text-gray-400 text-2xl">{String(projectsData.length).padStart(2, '0')}</span>
              </motion.div>
            </div>

            {/* Mobile Cards */}
            {projectsData.map((project, index: number) => (
              <motion.article
                key={index}
                className="bg-gradient-to-br from-[--darkblue] to-[--blackblue] flex flex-col gap-8 w-[80%] h-full border-[--turquoise]/30 border-2 p-8 rounded-3xl mb-10 min-[1024px]:hidden max-lg:w-[90%] backdrop-blur-sm"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  borderColor: project.colors.projectcolor,
                  boxShadow: `0 20px 50px ${project.colors.projectcolor}30`
                }}
                style={{
                  boxShadow: `0 10px 40px ${project.colors.projectcolor}20`,
                }}
              >
                <div className="flex justify-center items-center gap-6">
                  <motion.div
                    className="relative overflow-hidden rounded-2xl"
                    whileHover={{ scale: 1.05 }}
                  >
                    <img
                      src={project.image}
                      alt={project.image}
                      className="h-[8rem] w-[8rem] object-cover object-top rounded-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </motion.div>
                  <div className="flex flex-col gap-2">
                    <h2 className="text-white text-4xl font-bold">{project.title}</h2>
                    <div 
                      className="h-1 w-20 rounded-full"
                      style={{ background: `linear-gradient(to right, var(--turquoise), ${project.colors.projectcolor})` }}
                    />
                  </div>
                </div>
                <div className="buttons flex gap-6 max-lg:flex-col justify-center items-center">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      label="Live Demo"
                      link={project.deploymenturl}
                      iconSVG={project.deploymenticon}
                      buttoncolor={project.colors.main}
                      iconcolor={project.colors.icon}
                    />
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      label="Github Repository"
                      link={project.githuburl}
                      iconSVG={project.githubicon}
                      buttoncolor={project.colors.main}
                      iconcolor={project.colors.icon}
                    />
                  </motion.div>
                </div>
                <p className="text-gray-300 text-center max-lg:text-2xl leading-relaxed">
                  {project.description_EN}
                </p>

                <div className="technologies flex flex-col justify-center items-center">
                  <h3 className="text-[--turquoise] mb-4">{"Technologies"}</h3>
                  <div className="grid grid-cols-3 gap-6 p-4">
                    {project.technologies.map(
                      (technology, innerIndex: number) => (
                        <motion.div
                          key={innerIndex}
                          className="flex items-center justify-center p-3 rounded-xl bg-white/5 border border-white/10"
                          whileHover={{ scale: 1.1, borderColor: "var(--turquoise)" }}
                        >
                          <img
                            src={technology.icon}
                            alt={`${project.title}-icon`}
                            className="h-[4rem] w-[4rem] object-contain"
                            data-tooltip-id="my-tooltip"
                            data-tooltip-content={technology.name}
                          />
                        </motion.div>
                      )
                    )}
                  </div>
                </div>
              </motion.article>
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
