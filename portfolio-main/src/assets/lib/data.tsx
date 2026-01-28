import AWSicon from "../../assets/icons/aws.png";
import reacticon from "../../assets/icons/reacticon.svg";
import mongodbicon from "../../assets/icons/mongoicon.svg";
import pythonicon from "../../assets/icons/pythonicon.webp";
import websocketicon from "../../assets/icons/websocketsicon.png";
import redisicon from "../../assets/icons/redisicon.webp";
import webrtcicon from "../../assets/icons/webrtcicon.png";
import restapiicon from "../../assets/icons/restapiicon.png";
import caricon from "../../assets/icons/car-icon.svg";
import travelicon from "../../assets/icons/travel-icon.svg";
import hardwareicon from "../../assets/icons/hardware-icon.svg";
import { FiGithub, FiLink, FiLinkedin, FiMail, FiHome, FiCode, FiFolder, FiBriefcase, FiSend } from "react-icons/fi";
import { 
  SiReact, 
  SiNodedotjs, 
  SiNextdotjs, 
  SiTypescript, 
  SiSocketdotio,
  SiTailwindcss, 
  SiDocker, 
  SiCss3, 
  SiHtml5,
  SiMysql,
  SiMongodb,
  SiRedis,
  SiJavascript,
  SiCplusplus,
  SiPython,
  SiFastapi,
  SiFlask,
  SiTensorflow,
  SiScikitlearn,
  SiGithub,
  SiGit,
  SiJupyter,
  SiOpenai,
  SiVercel,
  SiLinux
} from "react-icons/si";
import Imprint from "../../components/Imprint";
import Privacy from "../../components/Privacy";

export const headerIntroData = {
  title: {
    en: "Hey, I'm ",
  },
  name: "Rohan Gupta",
  subtitle: "AI Developer",
  description: {
    en: "Passionate about building intelligent systems that solve real-world problems. I specialize in developing AI/ML applications, from neural networks to production-ready machine learning pipelines that scale.",
  },
  buttons: [
    {
      name: "Contact",
      label: {
        en: "Contact me",
      },
      icon: FiMail,
      color: "main-btn",
    },
    {
      name: "Resume",
      label: {
        en: "Resume",
      },
      icon: FiLink,
      color: "main-btn",
      link: "/resume.pdf",
    },
  ],
} as const;

// Placeholder images - replace with your actual screenshot imports
// import codesightScreenshot from "../../assets/img/codesight-screenshot.png";
// import solarScreenshot from "../../assets/img/solar-screenshot.png";
// import vcallScreenshot from "../../assets/img/vcall-screenshot.png";
// import imagecaptionScreenshot from "../../assets/img/imagecaption-screenshot.png";

export const projectsData = [
  {
    title: "CodeSight AI",
    description_EN:
      "Built an AI-powered GitHub repository code reviewer using LangChain, LangGraph, and FastAPI to analyze 100+ source files per repository and generate automated improvement suggestions. Integrated MCP tools for direct repository access and intelligent code inspection across 1,000+ lines of code. Implemented Redis caching to optimize repeated analysis workflows and reduce response latency by 60%. Designed agent orchestration pipeline coordinating 5+ specialized agents for modular code analysis.",
    technologies: [
      { name: "LangGraph", icon: pythonicon },
      { name: "FastAPI", icon: pythonicon },
      { name: "Redis", icon: redisicon },
      { name: "PostgreSQL", icon: mongodbicon },
      { name: "React", icon: reacticon },
    ],
    image: "", // TODO: Replace with codesightScreenshot
    githuburl: "#", // TODO: Replace with actual GitHub URL
    githubicon: FiGithub,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#7C3AED",
    },
  },
  {
    title: "Solar Power Prediction",
    description_EN:
      "Performed comprehensive Exploratory Data Analysis (EDA) on a 120,000+ record solar power dataset. Engineered predictive models using Linear Regression, Decision Trees, and Random Forests, achieving an R-squared score of 0.92. Optimized feature selection and hyperparameters, reducing prediction error by 15%.",
    technologies: [
      { name: "Pandas", icon: pythonicon },
      { name: "Matplotlib", icon: pythonicon },
      { name: "Scikit-learn", icon: pythonicon },
      { name: "Python", icon: pythonicon },
    ],
    image: "", // TODO: Replace with solarScreenshot
    githuburl: "#", // TODO: Replace with actual GitHub URL
    githubicon: FiGithub,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#F59E0B",
    },
  },
  {
    title: "V-Call",
    description_EN:
      "Developed a multi-user video calling platform using Agora SDK and WebRTC with 99.99% uptime. Integrated real-time speech-to-speech translation, live captions, and language translation using Azure Speech Services, achieving 90% accuracy across 100+ languages. Implemented a real-time chat system with WebSockets, supporting automatic message translation.",
    technologies: [
      { name: "Django", icon: pythonicon },
      { name: "REST API", icon: restapiicon },
      { name: "Azure", icon: AWSicon },
      { name: "WebSockets", icon: websocketicon },
      { name: "WebRTC", icon: webrtcicon },
    ],
    image: "", // TODO: Replace with vcallScreenshot
    githuburl: "#", // TODO: Replace with actual GitHub URL
    githubicon: FiGithub,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#10B981",
    },
  },
  {
    title: "Image Caption Generator",
    description_EN:
      "Developed an Image Caption Generator using deep learning that automatically generates descriptive natural-language captions from input images, bridging computer vision and NLP. Implemented CNN-based feature extraction using a pretrained model and integrated a sequence model (LSTM) to decode visual features into accurate text captions. Enhanced model performance by incorporating an attention mechanism to focus the decoder on relevant image features during caption generation. Built an interactive Streamlit web application to allow users to upload images and receive generated captions in real time.",
    technologies: [
      { name: "Python", icon: pythonicon },
      { name: "TensorFlow", icon: pythonicon },
      { name: "Keras", icon: pythonicon },
      { name: "Streamlit", icon: pythonicon },
    ],
    image: "", // TODO: Replace with imagecaptionScreenshot
    githuburl: "#", // TODO: Replace with actual GitHub URL
    githubicon: FiGithub,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#EC4899",
    },
  },
] as const;

export const liveTickerData = {
  content: {
    en: "More Projects on Github",
  },
} as const;

export const skillsData = [
  {
    skillsTitle: "Skills",
    skills: [
      {
        title: "React",
        hash: "#React",
        icon: SiReact,
        color: "#61DAFB",
      },
      {
        title: "Node.js",
        hash: "#Node.js",
        icon: SiNodedotjs,
        color: "#339933",
      },
      {
        title: "Next.js",
        hash: "#Next.js",
        icon: SiNextdotjs,
        color: ["#000000", "#FFFFFF"],
      },
      {
        title: "Vercel",
        hash: "#Vercel",
        icon: SiVercel,
        color: ["#000000", "#FFFFFF"],
      },
      {
        title: "Linux",
        hash: "#Linux",
        icon: SiLinux,
        color: "#FCC624",
      },
      {
        title: "TypeScript",
        hash: "#TypeScript",
        icon: SiTypescript,
        color: "#007ACC",
      },
      {
        title: "Python",
        hash: "#Python",
        icon: SiPython,
        color: "#3776AB",
      },
      {
        title: "LangChain",
        hash: "#LangChain",
        icon: SiOpenai,
        color: ["#000000", "#FFFFFF"],
      },
      {
        title: "FastAPI",
        hash: "#FastAPI",
        icon: SiFastapi,
        color: "#009688",
      },
      {
        title: "Flask",
        hash: "#Flask",
        icon: SiFlask,
        color: ["#000000", "#FFFFFF"],
      },
      {
        title: "TensorFlow",
        hash: "#TensorFlow",
        icon: SiTensorflow,
        color: "#FF6F00",
      },
      {
        title: "Scikit-learn",
        hash: "#ScikitLearn",
        icon: SiScikitlearn,
        color: "#F7931E",
      },
      {
        title: "Web Sockets",
        hash: "#WebSockets",
        icon: SiSocketdotio,
        color: "#F1662A",
      },
      {
        title: "Tailwind",
        hash: "#Tailwind",
        icon: SiTailwindcss,
        color: "#38B2AC",
      },
      {
        title: "Docker",
        hash: "#Docker",
        icon: SiDocker,
        color: "#2496ED",
      },
      {
        title: "Git",
        hash: "#Git",
        icon: SiGit,
        color: "#F05032",
      },
      {
        title: "GitHub",
        hash: "#GitHub",
        icon: SiGithub,
        color: ["#000000", "#FFFFFF"],
      },
      {
        title: "Jupyter",
        hash: "#Jupyter",
        icon: SiJupyter,
        color: "#F37626",
      },
      {
        title: "MongoDB",
        hash: "#MongoDB",
        icon: SiMongodb,
        color: "#449C45",
      },
      {
        title: "MySQL",
        hash: "#MySQL",
        icon: SiMysql,
        color: "#4479A1",
      },
      {
        title: "Redis",
        hash: "#Redis",
        icon: SiRedis,
        color: "#D82C20",
      },
      {
        title: "JavaScript",
        hash: "#JavaScript",
        icon: SiJavascript,
        color: "#F7DF1E",
      },
      {
        title: "C++",
        hash: "#C++",
        icon: SiCplusplus,
        color: "#00599C",
      },
      {
        title: "HTML",
        hash: "#HTML",
        icon: SiHtml5,
        color: "#E34F26",
      },
      {
        title: "CSS",
        hash: "#CSS",
        icon: SiCss3,
        color: "#1572B6",
      },
    ],
  },
] as const;

export const navLinks = [
  { en: "Home", hash: "#home", icon: FiHome },
  { en: "Skills", hash: "#skills", icon: FiCode },
  { en: "Projects", hash: "#projects", icon: FiFolder },
  { en: "Experience", hash: "#experience", icon: FiBriefcase },
  { en: "Contact", hash: "#contact", icon: FiSend },
] as const;

export const FooterLinks = [
  { en: "Imprint", hash: "#imprint", data: <Imprint /> },
  { en: "Privacy", hash: "#privacy", data: <Privacy /> },
] as const;

export const sideBarRightMail = {
  link: "mailto:rohan26gupta2005@gmail.com",
  text: "rohan26gupta2005@gmail.com",
} as const;

export const sideBarLeftSocials = [
  {
    link: "https://www.linkedin.com/in/rohan-gupta-457a72207/",
    icon: FiLinkedin,
    altimgname: "linkedin",
  },
  {
    link: "https://github.com/Rohannnn26",
    icon: FiGithub,
    altimgname: "github",
  },
  {
    link: "mailto:rohan26gupta2005@gmail.com",
    icon: FiMail,
    altimgname: "mail",
  },
] as const;

export const quotesData = [
  {
    en: `"Every bug is a step towards mastery, and every fix is a leap towards innovation."`,
  },
  {
    en: `"An editor is like a canvas, and code is the paint. Create your masterpiece."`,
  },
] as const;

export const experienceData = {
  title_EN: "Experience",
  description_EN: "Showcasing my journey through impactful roles",
  paragraphs_EN: [
    {
      title: "Dhondi.ai - Full Stack Developer Intern",
      description: "",
      icon: hardwareicon,
    },
    {
      title: "On the Fast Lane of Life",
      description:
        "Besides coding, I like to be on the fast lane - in the truest sense of the word. Cars are my passion, and I enjoy being on unknown roads with powerful machines.",
      icon: caricon,
    },
    {
      title: "The Joy of Discovery as a Life Motto",
      description:
        "My journey as a web developer is only a part of my life path. I live by the motto that the adventure only begins when you leave the familiar behind. Discovering new places and cultures is my form of creative inspiration.",
      icon: travelicon,
    },
  ],
};

export const contactData = {
  title: {
    en: "Contact",
  },
  description: {
    en: "Write me a message and I will get back to you.",
  },
  inputfields: [
    {
      name: "name",
      placeholder: {
        en: "Your Name",
      },
      type: "text",
      validation: {
        en: "Please fill in your name",
      },
      pattern: "{2}",
    },
    {
      name: "email",
      placeholder: {
        en: "Your E-Mail",
      },
      type: "email",
      validation: {
        en: "Please fill in your email",
      },
      pattern: "[@]{4}",
    },
    {
      name: "subject",
      placeholder: {
        en: "Your Subject",
      },
      type: "text",
      validation: {
        en: "Please fill in your subject",
      },
      pattern: "{10}",
    },
  ],
  textarea: {
    placeholder: {
      en: "Your Message",
    },
    name: "message",
    rows: 10,
    validation: {
      en: "Please fill in your message",
    },
    pattern: "{10}",
  },
  button: {
    value: {
      en: "Send",
    },
  },
  icon: FiMail,
  iconcolor: "#FFFFFF",
  colors: {
    main: "main-btn",
    second: "secondary-btn",
    icon: "white",
  },
  privacyOptIn: {
    checkbox: {
      en: "I agree that Sunpreet may use my personal data (name and e-mail address) to contact me.",
    },
    description: {
      en: "By submitting this request, you acknowledge that you have read the Private Policy",
    },
  },
} as const;

export const toastMessages = {
  loadingProject: {
    en: "The live demo will open shortly. Starting servers...",
  },
  successEmailSent: {
    en: "Thank you for your email. I will get back to you as soon as possible",
  },
  failedEmailSent: {
    en: "Unfortunately the sending of your email did not work. Please try again later",
  },
  failedValidationName: {
    en: "Please fill in your name",
  },
} as const;

export const buttonLabels = {
  language: {
    en: "EN",
  },
} as const;

export const directionStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginRight: "4rem",
  },
  "outer-left-to-inner-right": {
    marginLeft: "4rem",
    transform: "scaleX(-1)",
  },
  "inner-right-to-middle": {
    width: "100%",
    transform: "scaleY(1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  "inner-left-to-middle": {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  "middle-to-inner-right": {
    width: "100%",
    transform: "scale(1,-1)",
  },
  "middle-to-inner-left": {
    width: "100%",
    transform: "scale(-1,-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  middle: {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};

export const heightStyles: Record<string, { heights: [string, string] }> = {
  small: {
    heights: ["25rem", "15rem"],
  },
  middle: {
    heights: ["35rem", "25rem"],
  },
  large: {
    heights: ["45rem", "35rem"],
  },
  extraLarge: {
    heights: ["55rem", "45rem"],
  },
};

export const spaceStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginTop: "-6rem",
    width: "100%",
  },
  "outer-left-to-inner-right": {
    marginTop: "-6rem",
    width: "100%",
  },
  "inner-right-to-middle": {
    marginTop: "-20rem",
    width: "50%",
    zIndex: "-10",
  },
  "inner-left-to-middle": {
    marginTop: "-10rem",
    width: "50%",
    zIndex: "-10",
  },
  "middle-to-inner-right": {
    width: "75%",
  },
  "middle-to-inner-left": {
    marginTop: "-2.5rem",
    width: "50%",
  },
  middle: {
    marginTop: "-2.5rem",
    width: "0%",
    display: "none",
  },
};

export const widthStyles: Record<string, { widths: [string, string] }> = {
  "outer-right-to-inner-left": {
    widths: ["74.45%", "74.45%"],
  },
  "outer-left-to-inner-right": {
    widths: ["75%", "75%"],
  },
  "inner-right-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "inner-left-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "middle-to-inner-right": {
    widths: ["33.4%", "50.03%"],
  },
  "middle-to-inner-left": {
    widths: ["50.1%", "49%"],
  },
  middle: {
    widths: ["0%", "0%"],
  },
};
