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
            className={`fixed bottom-6 left-0 right-0 mx-auto w-fit z-50 px-2 py-1.5 rounded-full
              ${theme === "dark" 
                ? "bg-black/80 border border-white/10" 
                : "bg-white/95 border border-black/5"
              }
              backdrop-blur-xl shadow-lg
            `}
          >
            <ul className="flex items-center gap-0.5 list-none m-0 p-0">
              {navLinks.map((link, index) => {
                const isActive = activeSection === link.en;
                const isHovered = hoveredLink === link.en;
                const Icon = link.icon;

                return (
                  <motion.li
                    key={index}
                    onHoverStart={() => setHoveredLink(link.en)}
                    onHoverEnd={() => setHoveredLink(null)}
                    className="relative list-none"
                  >
                    <NavLink
                      to={link.hash}
                      onClick={() => handleLinkClick(link.en)}
                      className={`relative flex items-center justify-center gap-2 px-3 py-1.5 rounded-full transition-all duration-200
                        ${isActive 
                          ? theme === "dark" 
                            ? "text-green-400" 
                            : "text-green-600"
                          : theme === "dark"
                            ? "text-gray-400 hover:text-white"
                            : "text-gray-500 hover:text-gray-900"
                        }
                      `}
                    >
                      {/* Active/Hover background */}
                      {(isActive || isHovered) && (
                        <motion.span
                          layoutId="navBg"
                          className={`absolute inset-0 rounded-full -z-10
                            ${isActive
                              ? theme === "dark"
                                ? "bg-green-500/15"
                                : "bg-green-500/10"
                              : theme === "dark"
                                ? "bg-white/5"
                                : "bg-black/5"
                            }
                          `}
                          initial={false}
                          transition={{
                            type: "spring",
                            stiffness: 350,
                            damping: 30
                          }}
                        />
                      )}

                      {/* Icon */}
                      <motion.span
                        animate={isActive ? { scale: [1, 1.15, 1] } : {}}
                        transition={{ duration: 0.3 }}
                        className="text-4xl"
                      >
                        <Icon strokeWidth={isActive ? 2.5 : 2} />
                      </motion.span>

                      {/* Text - shows on hover or active */}
                      <AnimatePresence>
                        {(isActive || isHovered) && (
                          <motion.span
                            initial={{ opacity: 0, width: 0 }}
                            animate={{ opacity: 1, width: "auto" }}
                            exit={{ opacity: 0, width: 0 }}
                            transition={{ duration: 0.2 }}
                            className="text-2xl font-medium whitespace-nowrap overflow-hidden"
                          >
                            {link.en}
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </NavLink>
                  </motion.li>
                );
              })}
            </ul>
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
