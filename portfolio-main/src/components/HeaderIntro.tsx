import React, { Suspense, lazy, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Button from "./Button";
import { headerIntroData } from "../assets/lib/data";
import { useSectionInView } from "../assets/lib/hooks";
import { useActiveSectionContext } from "../context/active-section-context";
import { useTheme } from "../context/theme-context";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const CodeAnimation3D = lazy(() => import("./CodeAnimation3D"));

// Hacker characters for scramble effect
const hackerChars = "!@#$%^&*()_+-=[]{}|;:,.<>?/~`0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

const HeaderIntro: React.FC = () => {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const { theme } = useTheme();
  
  const originalName = headerIntroData.name;
  const [displayName, setDisplayName] = useState<string[]>(originalName.split('').map(() => hackerChars[Math.floor(Math.random() * hackerChars.length)]));
  const [revealedCount, setRevealedCount] = useState(0);
  const [isHacking, setIsHacking] = useState(true);

  // Hacker decryption animation effect
  useEffect(() => {
    if (!isHacking) return;
    
    const interval = setInterval(() => {
      setDisplayName(() => {
        return originalName.split('').map((char, index) => {
          if (index < revealedCount) {
            return char; // Already revealed
          }
          // Keep spaces as spaces
          if (char === ' ') return ' ';
          // Random hacker character
          return hackerChars[Math.floor(Math.random() * hackerChars.length)];
        });
      });
    }, 50);

    return () => clearInterval(interval);
  }, [revealedCount, isHacking, originalName]);

  // Gradually reveal characters from left to right (starting with R in Rohan)
  useEffect(() => {
    // Need to reveal all characters including the last one
    if (revealedCount > originalName.length) {
      setIsHacking(false);
      setDisplayName(originalName.split('')); // Ensure final state is correct
      // Restart the animation every 8 seconds
      const restartTimeout = setTimeout(() => {
        setRevealedCount(0);
        setIsHacking(true);
      }, 8000);
      return () => clearTimeout(restartTimeout);
    }

    const revealTimeout = setTimeout(() => {
      setRevealedCount(prev => prev + 1);
    }, 150);

    return () => clearTimeout(revealTimeout);
  }, [revealedCount, originalName.length]);

  return (
    <section
      className="relative flex flex-row justify-between items-center min-h-screen px-16 max-lg:flex-col max-lg:justify-center max-lg:gap-6 max-lg:px-4 py-20 pl-32 max-lg:pl-4"
      ref={ref}
      id="home"
    >
      {/* Left side - Text content */}
      <div className="flex flex-col gap-12 items-start w-2/3 max-lg:w-full max-lg:items-center max-lg:text-center z-10 pl-8 max-lg:pl-0 py-8">
        <div className="text-left max-lg:text-center">
          <motion.h1 
            className="text-7xl max-lg:text-5xl font-bold mb-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {headerIntroData.title.en}
          </motion.h1>
          <motion.div
            className="inline-block perspective-1000"
            initial={{ opacity: 0, scale: 0.5, rotateX: -90 }}
            animate={{ 
              opacity: 1, 
              scale: [0.5, 1.05, 1], 
              rotateX: 0,
            }}
            transition={{ 
              duration: 1.2, 
              ease: [0.6, 0.05, 0.01, 0.9],
              delay: 0.3
            }}
          >
            <motion.h1
              className="text-9xl max-lg:text-7xl font-black bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                backgroundSize: "200% auto",
              }}
            >
              <motion.span
                className="inline-block"
                animate={{
                  rotateY: [0, 10, -10, 0],
                  rotateZ: [0, 2, -2, 0],
                  scale: [1, 1.05, 0.98, 1],
                  y: [0, -5, 5, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  times: [0, 0.33, 0.66, 1],
                }}
                style={{
                  transformStyle: "preserve-3d",
                  textShadow: !isHacking ? "0 0 20px rgba(34, 197, 94, 0.6), 0 0 40px rgba(34, 197, 94, 0.4)" : "0 0 20px rgba(168, 85, 247, 0.4), 0 0 40px rgba(59, 130, 246, 0.3)",
                }}
              >
                {displayName.map((char, index) => (
                  <motion.span
                    key={index}
                    className={`inline-block font-mono ${!isHacking ? 'text-green-400' : index < revealedCount ? 'text-green-400' : 'text-green-500'}`}
                    animate={{
                      y: isHacking ? [0, -3, 0] : [0, -8, 0],
                      opacity: isHacking && index >= revealedCount ? [0.5, 1, 0.5] : 1,
                      textShadow: !isHacking 
                        ? "0 0 20px #22c55e, 0 0 40px #16a34a"
                        : isHacking && index >= revealedCount 
                          ? ["0 0 10px #22c55e", "0 0 20px #22c55e", "0 0 10px #22c55e"]
                          : "0 0 15px #22c55e",
                    }}
                    transition={{
                      duration: isHacking ? 0.1 : 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: isHacking ? 0 : index * 0.1,
                    }}
                    style={{
                      display: "inline-block",
                      transformOrigin: "center",
                    }}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}
              </motion.span>
            </motion.h1>
          </motion.div>
        </div>
        <motion.h2 
          className="text-6xl max-lg:text-4xl font-semibold text-left max-lg:text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {headerIntroData.subtitle}
        </motion.h2>
        <motion.p 
          className="text-3xl max-lg:text-xl text-left max-lg:text-center max-lg:w-full w-4/5 leading-relaxed font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          {headerIntroData.description.en}
        </motion.p>

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
        
        <div className="social-icons flex gap-8 max-lg:justify-center">
          <motion.a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, y: -3 }}
            whileTap={{ scale: 0.9 }}
            className={`text-5xl transition-colors duration-300 ${theme === "dark" ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-900"}`}
          >
            <FiGithub />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, y: -3 }}
            whileTap={{ scale: 0.9 }}
            className={`text-5xl transition-colors duration-300 ${theme === "dark" ? "text-gray-400 hover:text-blue-400" : "text-gray-600 hover:text-blue-600"}`}
          >
            <FiLinkedin />
          </motion.a>
          <motion.a
            href="mailto:your@email.com"
            whileHover={{ scale: 1.2, y: -3 }}
            whileTap={{ scale: 0.9 }}
            className={`text-5xl transition-colors duration-300 ${theme === "dark" ? "text-gray-400 hover:text-red-400" : "text-gray-600 hover:text-red-600"}`}
          >
            <FiMail />
          </motion.a>
        </div>
      </div>

      {/* Right side - 3D Animation */}
      <div className="w-1/3 h-[600px] max-lg:w-full max-lg:h-[400px] max-lg:mt-8 z-10 pr-8 max-lg:pr-0">
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
