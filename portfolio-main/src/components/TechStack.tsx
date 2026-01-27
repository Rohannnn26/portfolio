import React, { useRef } from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { useSectionInView } from "../assets/lib/hooks";
import {
  skillsDataLang,
  skillsDataDB,
  skillsDataTech,
} from "../assets/lib/data";
import { useTheme } from "../context/theme-context";
import SkillSection from "./SkillSection";
import { motion, useScroll, useTransform } from "framer-motion";

const TechStack: React.FC = () => {
  const { ref } = useSectionInView("Skills");
  const { theme } = useTheme();
  const animationReference = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: animationReference,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <React.Fragment>
      <section
        className="relative tech-stack p-16 min-h-screen py-32"
        id="skills"
        ref={ref}
      >
        <div className="title-container flex flex-col justify-center items-center p-32 w-1/2   gap-6 min-[1921px]:px-[55rem] max-lg:p-0  max-lg:w-full max-lg:items-start max-lg:py-16 ">
          <motion.div
            ref={animationReference}
            style={{
              scale: scaleProgess,
              opacity: opacityProgess,
            }}
          >
            <p className="font-black mb-6">
              <span className="text-turquoise">&lt;</span>Skills
              <span className="text-turquoise">/&gt;</span>
            </p>
            <h2>
              {"My TechStack and Skills"}
            </h2>
          </motion.div>
        </div>
        <div className="flex gap-40 justify-center max-lg:flex-col">
          <div className="w-auto">
            <SkillSection skillsData={skillsDataTech} theme={theme} />
          </div>
          <div className="flex flex-col h-[inherit] text-center justify-around w-auto max-lg:gap-40">
            <SkillSection skillsData={skillsDataDB} theme={theme} />
            <SkillSection skillsData={skillsDataLang} theme={theme} />
          </div>
        </div>
      </section>
      <ReactTooltip
        place="top"
        id="my-tooltip"
        style={{
          fontSize: "1.5rem",
          zIndex: 10,
          backgroundColor: "var(--turquoise)",
        }}
      />
    </React.Fragment>
  );
};

export default TechStack;
