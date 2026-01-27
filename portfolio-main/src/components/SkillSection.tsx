import React from "react";
import { motion } from "framer-motion";

interface Skill {
  title: string;
  hash: string;
  icon?: any;
  color?: any;
}

interface SkillCategory {
  readonly skillsTitle: string;
  readonly skills: readonly Skill[];
}

interface SkillSectionProps {
  skillsData: readonly SkillCategory[];
  theme: "dark" | "light";
}

const SkillSection: React.FC<SkillSectionProps> = ({ skillsData, theme }) => {
  const getSkillColor = (theme: string, skill: Skill) => {
    if (
      theme === "dark" &&
      (skill.title.includes("Next") || skill.title.includes("Express") || 
       skill.title.includes("Flask") || skill.title.includes("GitHub") ||
       skill.title.includes("Vercel") || skill.title.includes("LangChain"))
    ) {
      return Array.isArray(skill.color) ? skill.color[1] : skill.color;
    } else if (skill.title !== "Next.js" && skill.title !== "Express") {
      return skill.color;
    } else {
      return Array.isArray(skill.color) ? skill.color[0] : skill.color;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <motion.article
      className={`h-auto rounded-3xl p-16 pt-32 grid grid-cols-3 gap-10 relative z-10 max-w-[1600px] w-full max-lg:grid-cols-2 max-lg:p-8 max-lg:pt-32 lg:grid-cols-5 ${
        theme === "dark"
          ? "bg-[--blackblue] dark-mode-shadow"
          : "bg-gray-100 dark-shadow"
      }`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div
        className={`absolute top-10 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-t-xl w-full text-center`}
      >
        <p className="font-black text-4xl">
          <span className="text-[--turquoise]">&lt;</span>
          {skillsData[0].skillsTitle}
          <span className="text-[--turquoise]">/&gt;</span>
        </p>
      </div>
      {skillsData[0].skills.map((skill, index) => {
        const IconComponent = skill.icon;
        const skillColor = getSkillColor(theme, skill);
        return (
          <motion.div
            key={index}
            className={`skill-item cursor-pointer flex flex-col gap-6 rounded-2xl p-8 border-solid border-[0.25rem] text-center items-center justify-center ${
              theme === "dark" ? "bg-[--darkblue]" : "bg-[--icewhite]"
            }`}
            data-tooltip-id="my-tooltip"
            data-tooltip-content={skill.title}
            style={{
              borderColor: skillColor,
            }}
            variants={itemVariants}
            whileHover={{
              scale: 1.05,
              boxShadow: `0 0 25px ${skillColor}60`,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div 
              className="flex items-center justify-center h-[9rem] w-[10rem] max-lg:h-[8rem]"
              whileHover={{
                rotate: [0, -5, 5, 0],
                transition: { duration: 0.4 },
              }}
            >
              <IconComponent 
                className="w-full h-full" 
                style={{ color: skillColor }}
              />
            </motion.div>
            <h3 className="max-lg:text-[2rem] min-[1024px]:hidden">
              {skill.title}
            </h3>
          </motion.div>
        );
      })}
    </motion.article>
  );
};

export default SkillSection;
