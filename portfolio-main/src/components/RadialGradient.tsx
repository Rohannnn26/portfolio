import React from "react";
import { useEffect, useState } from "react";
import { useTheme } from "../context/theme-context";

interface RadialGradientProps {
  scale: string;
  opacity: string;
  position?: string;
  overflow?: string;
}

const RadialGradient: React.FC<RadialGradientProps> = ({
  scale,
  opacity,
  position,
  overflow,
}) => {
  const [mouseXpercentage, setMouseXPercentage] = useState<number>(0);
  const [mouseYpercentage, setMouseYPercentage] = useState<number>(0);
  const { theme } = useTheme();

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const newMouseXPercentage = Math.round((event.clientX / windowWidth) * 100);
      const newMouseYPercentage = Math.round(
        (event.clientY / windowHeight) * 100
      );

      setMouseXPercentage(newMouseXPercentage);
      setMouseYPercentage(newMouseYPercentage);
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const radialGradientStyle: React.CSSProperties = {
    background: `radial-gradient(ellipse 30% 30% at ${mouseXpercentage}% ${mouseYpercentage}%, #3b82f6, ${
      theme === "light" ? "#ffff" : "#18181b"
    })`,
  };

  const isFixed = position?.includes('fixed');
  
  return (
    <React.Fragment>
      <div
        className={`radial-gradient-styling ${isFixed ? '' : 'absolute'} ${position} left-0 ${isFixed ? 'h-screen w-screen' : 'h-full w-full'} z-0 ${opacity} ${scale} ${overflow} pointer-events-none`}
        style={radialGradientStyle}
      ></div>
    </React.Fragment>
  );
};

export default RadialGradient;
