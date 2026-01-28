// @ts-nocheck
import React, { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { sideBarLeftSocials, FooterLinks } from "../assets/lib/data";
import { useTheme } from "../context/theme-context";

import Popup from "reactjs-popup";
import { VscChromeClose } from "react-icons/vsc";

interface SocialLink {
  link: string;
  icon: string | React.FC<{ className: string }>;
  strokeColor?: string;
  altimgname: string;
  iconcolor?: string;
}

const Footer: React.FC = () => {
  const { theme } = useTheme();

  return (
    <footer className="bg-darkblue flex flex-col justify-center items-center gap-6 p-10 max-lg:pb-48 relative z-[1]">
      <div className="socials flex gap-10 justify-center">
        {sideBarLeftSocials.map((social: SocialLink, index: number) => (
          <Link
            to={social.link}
            className="block"
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            aria-current={
              social.altimgname === "true"
                ? social.altimgname + " button"
                : social.altimgname + " button"
            }
          >
            {typeof social.icon === "function" ? (
              <social.icon className={`stroke-turquoise text-3xl hover:stroke-white transition-all`} />
            ) : (
              <img
                src={social.icon}
                alt={social.altimgname}
                style={{ stroke: social.iconcolor || "" }}
              />
            )}
          </Link>
        ))}
      </div>
      <div className="flex gap-10">
        {FooterLinks.map((link, index) => (
          <Popup
            trigger={
              <Link
                to="#"
                className="text-white text-2xl font-bold hover:text-turquoise"
              >
                {link.en}
              </Link>
            }
            modal
            key={index}
          >
            {(close: () => void) =>
              (
                <>
                  <div
                    className={`p-32 max-lg:p-16  rounded-3xl dark-shadow relative max-h-[80vh] overflow-y-auto ${
                      theme === "dark" ? "bg-darkblue" : "bg-white"
                    }`}
                  >
                    <button
                      className="fixed top-0 right-0 bg-turquoise p-4 z-10 rounded-2xl m-4 hover:bg-lightTur transition-all duration-500 dark-shadow text-white"
                      onClick={() => {
                        close();
                      }}
                    >
                      <VscChromeClose />
                    </button>
                    {link.data}
                  </div>
                </>
              ) as React.ReactNode
            }
          </Popup>
        ))}
      </div>
      <div className="text-white text-center">
        <p className="text-lg">Copyright © 2026 Rohan Gupta. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
