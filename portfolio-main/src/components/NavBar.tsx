import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "../assets/lib/data";
import ScrollToAnchor from "./Listener";
import { useActiveSectionContext } from "../context/active-section-context";
import { useTheme } from "../context/theme-context";

const NavBar: React.FC = () => {
  const { theme } = useTheme();
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Hide navbar on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navVariants = {
    hidden: { 
      y: 100, 
      opacity: 0,
    },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      }
    },
    exit: { 
      y: 100, 
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const linkVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: { scale: 0.95 }
  };

  const glowVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { 
      opacity: 1, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8,
      transition: { duration: 0.2 }
    }
  };

  const handleLinkClick = (linkName: string) => {
    setActiveSection(linkName);
    setTimeOfLastClick(Date.now());
    if (linkName === "Home") {
      document.body.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <React.Fragment>
      <ScrollToAnchor />
      <AnimatePresence>
        {isVisible && (
          <motion.nav
            variants={navVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={`fixed bottom-8 left-0 right-0 mx-auto w-fit z-50 px-6 py-4 rounded-3xl
              ${theme === "dark" 
                ? "bg-black/60 border border-white/10" 
                : "bg-white/80 border border-black/5"
              }
              backdrop-blur-xl shadow-2xl shadow-black/20
            `}
          >
            {/* Animated background glow */}
            <motion.div
              className="absolute inset-0 rounded-3xl opacity-50 -z-10"
              style={{
                background: theme === "dark" 
                  ? "radial-gradient(circle at 50% 50%, rgba(96, 165, 250, 0.15), transparent 70%)"
                  : "radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.1), transparent 70%)"
              }}
              animate={{
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            <ul className="flex items-center gap-2 sm:gap-4">
              {navLinks.map((link, index) => {
                const isActive = activeSection === link.en;
                const isHovered = hoveredLink === link.en;
                const Icon = link.icon;

                return (
                  <motion.li
                    key={index}
                    variants={linkVariants}
                    initial="initial"
                    whileHover="hover"
                    whileTap="tap"
                    onHoverStart={() => setHoveredLink(link.en)}
                    onHoverEnd={() => setHoveredLink(null)}
                    className="relative"
                  >
                    <NavLink
                      to={link.hash}
                      onClick={() => handleLinkClick(link.en)}
                      className={`relative flex items-center gap-3 px-5 py-4 rounded-2xl transition-colors duration-300
                        ${isActive 
                          ? theme === "dark" 
                            ? "text-blue-400" 
                            : "text-blue-600"
                          : theme === "dark"
                            ? "text-gray-400 hover:text-white"
                            : "text-gray-600 hover:text-gray-900"
                        }
                      `}
                    >
                      {/* Active/Hover background pill */}
                      <AnimatePresence>
                        {(isActive || isHovered) && (
                          <motion.span
                            layoutId="navPill"
                            variants={glowVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            className={`absolute inset-0 rounded-2xl -z-10
                              ${isActive
                                ? theme === "dark"
                                  ? "bg-blue-500/20 border border-blue-500/30"
                                  : "bg-blue-500/10 border border-blue-500/20"
                                : theme === "dark"
                                  ? "bg-white/5"
                                  : "bg-black/5"
                              }
                            `}
                          />
                        )}
                      </AnimatePresence>

                      {/* Icon with animation */}
                      <motion.span
                        animate={{
                          rotate: isActive ? [0, -10, 10, 0] : 0,
                        }}
                        transition={{
                          duration: 0.5,
                          ease: "easeInOut"
                        }}
                        className="text-4xl sm:text-5xl"
                      >
                        <Icon />
                      </motion.span>

                      {/* Text - hidden on mobile, visible on larger screens */}
                      <motion.span
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ 
                          opacity: isActive || isHovered ? 1 : 0,
                          width: isActive || isHovered ? "auto" : 0
                        }}
                        transition={{ duration: 0.2 }}
                        className="text-xl font-semibold whitespace-nowrap overflow-hidden hidden sm:block"
                      >
                        {link.en}
                      </motion.span>

                      {/* Active indicator dot */}
                      {isActive && (
                        <motion.span
                          layoutId="activeDot"
                          className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full
                            ${theme === "dark" ? "bg-blue-400" : "bg-blue-600"}
                          `}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{
                            type: "spring",
                            stiffness: 500,
                            damping: 30
                          }}
                        />
                      )}
                    </NavLink>
                  </motion.li>
                );
              })}
            </ul>

            {/* Subtle shine effect */}
            <motion.div
              className="absolute top-0 left-0 right-0 h-px rounded-full opacity-50"
              style={{
                background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)"
              }}
            />
          </motion.nav>
        )}
      </AnimatePresence>
    </React.Fragment>
  );
};

interface CustomNavLinkProps {
  link: string;
  children: React.ReactNode;
  linkEn?: string;
}

export default NavBar;
