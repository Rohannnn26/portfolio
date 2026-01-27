import { Link } from "react-router-dom";
import { sideBarRightMail } from "../assets/lib/data";
import React from "react";

const SiteBarLeft: React.FC = () => {
  return (
    <div className="absolute flex items-center flex-col  bottom-0 right-0 mr-8  h-[50vh] max-lg:hidden ">
      <div className=" h-[65%] w-[4rem] flex items-center justify-center ">
        <Link
          to={sideBarRightMail.link}
          className=" mb-2 [writing-mode:vertical-lr] absolute top-[-50px] right-0  h-[50%] text-turquoise hover:text-[--lightTur] transition-all duration-200 "
        >
          {sideBarRightMail.text}
        </Link>
      </div>
      <div className="flex items-center justify-end flex-col h-[70%] ">
        <div className=" w-[0.25rem] h-[60%] bg-[--lightTur]"></div>
      </div>
    </div>
  );
};

export default SiteBarLeft;
