import React, { Suspense, lazy } from "react";
import Button from "./Button";
import { headerIntroData } from "../assets/lib/data";
import { useSectionInView } from "../assets/lib/hooks";
import { useActiveSectionContext } from "../context/active-section-context";
import { useTheme } from "../context/theme-context";
import { BsMouse } from "react-icons/bs";

const CodeAnimation3D = lazy(() => import("./CodeAnimation3D"));

const HeaderIntro: React.FC = () => {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const { theme } = useTheme();

  return (
    <section
      className="relative flex flex-row justify-between items-center min-h-screen px-16 max-lg:flex-col max-lg:justify-center max-lg:gap-6 max-lg:px-4 py-20"
      ref={ref}
      id="home"
    >
      {/* Left side - Text content */}
      <div className="flex flex-col gap-6 items-start w-1/2 max-lg:w-full max-lg:items-center max-lg:text-center z-10">
        <h1 className="text-left max-lg:text-center">
          {headerIntroData.title.en}
          <span className="wave text-7xl">&#128075;&#127997;</span>
        </h1>
        <h2 className="text-left max-lg:text-center">{headerIntroData.subtitle}</h2>
        <p className="text-left max-lg:text-center max-lg:w-full w-4/5">
          {headerIntroData.description.en}
        </p>

        <div className="button-container flex items-start justify-start gap-10 mb-8 max-lg:flex-col max-lg:items-center max-lg:justify-center">
          {headerIntroData.buttons.map((button, index) => (
            <Button
              key={index}
              label={button.label.en}
              iconSVG={button.icon}
              link={`#${button.name.toLocaleLowerCase()}`}
              buttoncolor={button.color}
              onClick={() => {
                setActiveSection(button.name);
                setTimeOfLastClick(Date.now());
              }}
            />
          ))}
        </div>
        
        <div className="scroll-down-container animate-bounce flex gap-6 max-lg:hidden">
          <BsMouse className="text-[2.6rem]" />
        </div>
      </div>

      {/* Right side - 3D Animation */}
      <div className="w-1/2 h-[600px] max-lg:w-full max-lg:h-[400px] max-lg:mt-8 z-10">
        <Suspense fallback={
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-16 h-16 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
          </div>
        }>
          <CodeAnimation3D />
        </Suspense>
      </div>
    </section>
  );
};

export default HeaderIntro;
