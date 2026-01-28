import bannerBg from "../assets/img/bannerbg.webp";
import React, { useRef, useState } from "react";
import Button from "./Button";
import LiveTicker from "./ParallaxText";
import { projectsData } from "../assets/lib/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCards, Pagination, Navigation } from "swiper/modules";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { useSectionInView } from "../assets/lib/hooks";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";

const ProjectSlider: React.FC = () => {
  const { ref } = useSectionInView("Projects");
  const animationReference = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { scrollYProgress } = useScroll({
    target: animationReference,
    offset: ["1 1", "1.3 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <React.Fragment>
      <section
        className=" skill-banner relative overflow-x-clip min-h-screen w-full flex flex-col gap-2 py-32"
        id="projects"
        ref={ref}
      >
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
            <div className="relative w-[55vw] max-lg:w-[90vw] min-[1921px]:px-96">
              {/* Custom Navigation Buttons - Hidden on mobile */}
              <motion.button
                className="swiper-button-prev-custom absolute left-[-60px] max-lg:left-2 top-1/2 -translate-y-1/2 z-20 w-14 h-14 max-lg:w-10 max-lg:h-10 rounded-full bg-gradient-to-r from-[--turquoise] to-[--orange] flex items-center justify-center cursor-pointer border-none shadow-lg"
                whileHover={{ scale: 1.15, boxShadow: "0 0 25px rgba(0, 255, 200, 0.5)" }}
                whileTap={{ scale: 0.95 }}
              >
                <FiChevronLeft className="text-white text-3xl max-lg:text-xl" />
              </motion.button>
              <motion.button
                className="swiper-button-next-custom absolute right-[-60px] max-lg:right-2 top-1/2 -translate-y-1/2 z-20 w-14 h-14 max-lg:w-10 max-lg:h-10 rounded-full bg-gradient-to-r from-[--orange] to-[--turquoise] flex items-center justify-center cursor-pointer border-none shadow-lg"
                whileHover={{ scale: 1.15, boxShadow: "0 0 25px rgba(255, 150, 50, 0.5)" }}
                whileTap={{ scale: 0.95 }}
              >
                <FiChevronRight className="text-white text-3xl max-lg:text-xl" />
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
                    <div
                      className="relative bg-gradient-to-br from-[--darkblue] via-[--blackblue] to-[--darkblue] text-[--white] rounded-3xl overflow-hidden border border-[--turquoise]/20 cursor-pointer"
                      style={{
                        boxShadow: `0 20px 60px ${project.colors.projectcolor}30, inset 0 1px 0 rgba(255,255,255,0.1)`,
                        height: "500px",
                      }}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      onClick={() => setHoveredIndex(hoveredIndex === index ? null : index)}
                    >
                      {/* Screenshot as Main Background */}
                      <div className="absolute inset-0 w-full h-full">
                        {project.image ? (
                          <img
                            src={project.image}
                            alt={`${project.title}-screenshot`}
                            className="w-full h-full object-cover object-top"
                          />
                        ) : (
                          <div 
                            className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[--darkblue] to-[--blackblue]"
                            style={{ background: `linear-gradient(135deg, ${project.colors.projectcolor}20, transparent)` }}
                          >
                            <span className="text-6xl text-white/20">📸</span>
                          </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      </div>

                      {/* Title & Tech at Bottom (Always Visible) */}
                      <div className="absolute bottom-0 left-0 right-0 p-8 max-lg:p-4 z-10">
                        <h2 className="text-4xl max-lg:text-2xl font-bold text-white mb-4 max-lg:mb-2">
                          {project.title}
                        </h2>
                        <div className="flex gap-3 max-lg:gap-2 flex-wrap">
                          {project.technologies.slice(0, 4).map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 max-lg:px-2 text-sm max-lg:text-xs rounded-full bg-white/10 text-white border border-white/20"
                            >
                              {tech.name}
                            </span>
                          ))}
                          {project.technologies.length > 4 && (
                            <span className="px-3 py-1 max-lg:px-2 text-sm max-lg:text-xs rounded-full bg-white/10 text-white border border-white/20">
                              +{project.technologies.length - 4}
                            </span>
                          )}
                        </div>
                        <p className="text-gray-400 text-sm mt-3 hidden max-lg:block">Tap to see details</p>
                      </div>

                      {/* Hover/Tap Overlay with Description */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br from-[--darkblue]/95 via-[--blackblue]/95 to-[--darkblue]/95 flex flex-col justify-center items-center p-12 max-lg:p-6 z-20 transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                      >
                        <h2 className="text-4xl max-lg:text-2xl font-bold text-white mb-6 max-lg:mb-3 text-center">
                          {project.title}
                        </h2>
                        
                        <div className="h-1 w-32 max-lg:w-20 rounded-full bg-gradient-to-r from-[--turquoise] to-[--orange] mb-6 max-lg:mb-3" />
                        
                        <p className="text-gray-300 text-lg max-lg:text-sm leading-relaxed text-center mb-8 max-lg:mb-4 max-w-2xl max-lg:line-clamp-4">
                          {project.description_EN}
                        </p>

                        {/* Technologies - Hidden on mobile for space */}
                        <div className="flex gap-4 flex-wrap justify-center mb-8 max-lg:hidden">
                          {project.technologies.map((technology, innerIndex: number) => (
                            <div
                              key={innerIndex}
                              className="flex items-center justify-center p-3 rounded-xl bg-white/5 border border-white/10 hover:border-[--turquoise]/50 transition-colors"
                            >
                              <img
                                src={technology.icon}
                                alt={`${technology.name}-icon`}
                                className="h-[3rem] w-[3rem] object-contain"
                                data-tooltip-id="my-tooltip"
                                data-tooltip-content={technology.name}
                              />
                            </div>
                          ))}
                        </div>

                        {/* GitHub Button */}
                        <Button
                          label="View on GitHub"
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
              
              {/* Project Counter */}
              <div className="flex justify-center mt-8 gap-2">
                <span className="text-[--turquoise] text-2xl font-bold">{String(activeIndex + 1).padStart(2, '0')}</span>
                <span className="text-gray-400 text-2xl">/</span>
                <span className="text-gray-400 text-2xl">{String(projectsData.length).padStart(2, '0')}</span>
              </div>
            </div>
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
