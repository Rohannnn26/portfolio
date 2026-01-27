import htmlicon from "../../assets/icons/htmlicon.svg";
import mysqlicon from "../../assets/icons/mysqlicon.svg";
import postgresqlicon from "../../assets/icons/postgresqlicon.webp";
import dockericon from "../../assets/icons/dockericon.png";
import jiraicon from "../../assets/icons/jiraicon.svg";
import firebaseicon from "../../assets/icons/firebaseicon.png";
import flaskicon from "../../assets/icons/flaskicon.png";
import AWSicon from "../../assets/icons/aws.png";
import cssicon from "../../assets/icons/cssicon.svg";
import javascripticon from "../../assets/icons/javascripticon.svg";
import typescripticon from "../../assets/icons/typescripticon.svg";
import reacticon from "../../assets/icons/reacticon.svg";
import nextjsicon from "../../assets/icons/nextjsicon.svg";
import nodejsicon from "../../assets/icons/nodejsicon.svg";
import tailwindcssicon from "../../assets/icons/tailwindicon.svg";
import mongodbicon from "../../assets/icons/mongoicon.svg";
import cppicon from "../../assets/icons/cppicon.svg";
import pythonicon from "../../assets/icons/pythonicon.webp";
import websocketicon from "../../assets/icons/websocketsicon.png";
import redisicon from "../../assets/icons/redisicon.webp";
import solidityicon from "../../assets/icons/solidityicon.svg";
import webrtcicon from "../../assets/icons/webrtcicon.png";
import thusticon from "../../assets/icons/thusticon.jpeg";
import scoreicon from "../../assets/icons/score.png";
import linkfluenceicon from "../../assets/icons/linkfluenceicon.jpg";
import jalsamadhanicon from "../../assets/icons/jalsamadhanicon.jpg";
import restapiicon from "../../assets/icons/restapiicon.png";
import rendericon from "../../assets/icons/rendericon.svg";
import passporticon from "../../assets/icons/passportjs.png";
import jwticon from "../../assets/icons/jwticon.svg";
import reactnativeicon from "../../assets/icons/reactnativeicon.svg";
import streamdevicon from "../../assets/icons/streamdevicon.jpg";
import caricon from "../../assets/icons/car-icon.svg";
import travelicon from "../../assets/icons/travel-icon.svg";
import hardwareicon from "../../assets/icons/hardware-icon.svg";
import nextjsiconwhite from "../../assets/icons/nextjsiconwhite.svg";
import expressiconwhite from "../../assets/icons/expressiconwhite.svg";
import { GoHome, GoPerson, GoMail, GoStack, GoProject } from "react-icons/go";
import { FiGithub, FiLink, FiLinkedin, FiMail } from "react-icons/fi";
import Imprint from "../../components/Imprint";
import Privacy from "../../components/Privacy";

export const headerIntroData = {
  title: {
    en: "Hi, I'm Sunpreet Singh",
  },
  subtitle: "Software Engineer",
  description: {
    en: "I'm a pre-final year CSE student who loves building cool stuff and making things run faster. I enjoy solving tricky problems, automating workflows, and picking up new tech along the way. When I'm not coding, you’ll find me helping others, working on side projects, or just geeking out over something new.",
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
      name: "Projects",
      label: {
        en: "My Projects",
      },
      icon: FiGithub,
      color: "secondary-btn",
    },
  ],
} as const;

export const projectsData = [
  {
    title: "ScoreFlow - Code Assessment Platform",
    description_EN:
      "Scoreflow is a online code assessment platform built with MERN, Passport.js, Docker, and AWS, featuring automated code execution, plagiarism detection, proctoring, and analytics. It leverages Docker-based compiler images for isolated multi-language execution, Bull Queues for concurrency control, and Redis-backed Passport.js authentication with Google OAuth 2.0. Deployed with Nginx, GitHub Actions (CI/CD), and AWS, it ensures a scalable, secure, and efficient coding evaluation system.",
    technologies: [
      { name: "ReactJs", icon: reacticon },
      { name: "NodeJs", icon: nodejsicon },
      { name: "Docker", icon: dockericon },
      { name: "WebSockets", icon: websocketicon },
      { name: "AWS", icon: AWSicon },
      { name: "MongoDB", icon: mongodbicon },
      { name: "Express", icon: expressiconwhite },
      { name: "Redis", icon: redisicon },
      { name: "PassportJs", icon: passporticon },
    ],
    image: scoreicon,
    deploymenturl: "https://scoreflow.live/",
    githuburl: "https://github.com/sun-28/ScoreFlow",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#FFD5BD",
    },
  },
  {
    title: "Thust - Deployment App",
    description_EN:
      "Thust is a robust and scalable deployment service designed to streamline the process of deploying web applications. Leveraging Docker for containerization and AWS services (S3, ECR, ECS) for building and storing web applications, Thust ensures a seamless deployment experience. The backend leverages Redis and WebSokets for ensuring efficient PubSub.",
    technologies: [
      { name: "NodeJs", icon: nodejsicon },
      { name: "Docker", icon: dockericon },
      { name: "AWS", icon: AWSicon },
      { name: "Redis", icon: redisicon },
      { name: "WebSockets", icon: websocketicon },
      { name: "ReactJs", icon: reacticon },
      { name: "MongoDB", icon: mongodbicon },
      { name: "Express", icon: expressiconwhite },
      { name: "Render", icon: rendericon },
    ],
    image: thusticon,
    deploymenturl: "",
    githuburl: "https://github.com/sun-28/Thust-Deployment-App",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#FFD5BD",
    },
  },
  {
    title: "SteamDev",
    description_EN:
      "StreamDev is a platform for live coding tutorials, featuring live stream coding, real-time chat, and Web3 Ethereum donations. It allows developers to conduct interactive sessions, with AI and OCR models providing real-time code updates and explanations. StreamDev aims to create an engaging and interactive learning environment for developers and viewers.",
    technologies: [
      { name: "ReactJs", icon: reacticon },
      { name: "NodeJs", icon: nodejsicon },
      { name: "ExpressJs", icon: expressiconwhite },
      { name: "MongoDB", icon: mongodbicon },
      { name: "WebSockets", icon: websocketicon },
      { name: "WebRTC", icon: webrtcicon },
      { name: "Docker", icon: dockericon },
      { name: "Redis", icon: redisicon },
      { name: "Python", icon: pythonicon },
      { name: "Solidity", icon: solidityicon },
    ],
    image: streamdevicon,
    deploymenturl: "",
    githuburl: "https://github.com/sun-28/StreamDev",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#70B9BE",
    },
  },
  {
    title: "LinkFluence",
    description_EN:
      "Developed a platform connecting influencers, brands, and events, serving as a virtual manager for influencers, a marketing tool for brands, and a sponsorship tool for events, with a secure backend featuring RESTful APIs for various functionalities and integration of a Dockerized Python-based AI/ML model.",
    technologies: [
      { name: "ReactJs", icon: reacticon },
      { name: "NodeJs", icon: nodejsicon },
      { name: "ExpressJs", icon: expressiconwhite },
      { name: "MongoDB", icon: mongodbicon },
      { name: "JWT & Bcrypt", icon: jwticon },
      { name: "RESTful APIs", icon: restapiicon },
    ],
    image: linkfluenceicon,
    deploymenturl: "",
    githuburl: "https://github.com/sun-28/Linkfluence",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#E3964A",
    },
  },
  {
    title: "JalSamadhan",
    description_EN:
      "Jalsamadhan is an innovative mobile application designed to address the increasing threats of water-related disasters due to urbanization and environmental instability. The app integrates advanced technologies, crowd-sourced data, and community engagement to provide real-time insights like heat maps and streamlines disaster management processes.",
    technologies: [
      { name: "NodeJs", icon: nodejsicon },
      { name: "ExpressJs", icon: expressiconwhite },
      { name: "MongoDB", icon: mongodbicon },
      { name: "JWT & Bcrypt", icon: jwticon },
      { name: "RESTful APIs", icon: restapiicon },
      { name: "Flask", icon: flaskicon },
      { name: "Python", icon: pythonicon },
      { name: "FireBase", icon: firebaseicon },
      { name: "React Native", icon: reactnativeicon },
    ],
    image: jalsamadhanicon,
    deploymenturl: "",
    githuburl: "https://github.com/sun-28/JalSamadhan",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#E3964A",
    },
  },
] as const;

export const liveTickerData = {
  content: {
    en: "More Projects on Github",
  },
} as const;

export const skillsDataTech = [
  {
    skillsTitle: "Technologies",
    skills: [
      {
        title: "React",
        hash: "#React",
        icon: reacticon,
        color: "#61DAFB",
      },
      {
        title: "Node.js",
        hash: "#Node.js",
        icon: nodejsicon,
        color: "#339933",
      },
      {
        title: "Express",
        hash: "#Express",
        icon: [expressiconwhite, expressiconwhite],
        color: ["#000000", "#FFFFFF"],
      },
      {
        title: "Next.js",
        hash: "#Next.js",
        icon: [nextjsicon, nextjsiconwhite],
        color: ["#000000", "#FFFFFF"],
      },
      {
        title: "TypeScript",
        hash: "#TypeScript",
        icon: typescripticon,
        color: "#007ACC",
      },
      {
        title: "Web Sockets",
        hash: "#WebSockets",
        icon: websocketicon,
        color: "#F1662A",
      },
      {
        title: "Tailwind",
        hash: "#Tailwind",
        icon: tailwindcssicon,
        color: "#38B2AC",
      },
      {
        title: "AWS",
        hash: "#AWS",
        icon: AWSicon,
        color: "#edb928",
      },
      {
        title: "Docker",
        hash: "#DOcker",
        icon: dockericon,
        color: "#1572B6",
      },
      {
        title: "JIRA",
        hash: "#JIRA",
        icon: jiraicon,
        color: "#ffff",
      },
      {
        title: "CSS",
        color: "#1572B6",
        hash: "#CSS",
        icon: cssicon,
      },
      {
        title: "HTML",
        hash: "#html",
        icon: htmlicon,
        color: "#F1662A",
      },
    ],
  },
] as const;

export const skillsDataDB = [
  {
    skillsTitle: "Databases",
    skills: [
      {
        title: "MySql",
        hash: "#MySql",
        icon: mysqlicon,
        color: "#eb9a31",
      },
      {
        title: "MongoDB",
        hash: "#MongoDB",
        icon: mongodbicon,
        color: "#449C45",
      },
      {
        title: "Redis",
        hash: "#Redis",
        icon: redisicon,
        color: "#D82C20",
      },
    ],
  },
] as const;

export const skillsDataLang = [
  {
    skillsTitle: "Languages",
    skills: [
      {
        title: "JavaScript",
        hash: "#JavaScript",
        icon: javascripticon,
        color: "#F7DF1E",
      },
      {
        title: "C++",
        hash: "#C++",
        icon: cppicon,
        color: "#3178eb",
      },
      {
        title: "Python",
        hash: "#Python",
        icon: pythonicon,
        color: "#F7DF1E",
      },
    ],
  },
] as const;

export const navLinks = [
  { en: "Home", hash: "#home", icon: GoHome },
  { en: "Skills", hash: "#skills", icon: GoStack },
  { en: "Projects", hash: "#projects", icon: GoProject },
  { en: "Experience", hash: "#experience", icon: GoPerson },
  { en: "Contact", hash: "#contact", icon: GoMail },
] as const;

export const FooterLinks = [
  { en: "Imprint", hash: "#imprint", data: <Imprint /> },
  { en: "Privacy", hash: "#privacy", data: <Privacy /> },
] as const;

export const sideBarRightMail = {
  link: "mailto:sunpahwa28@gmail.com",
  text: "sunpahwa28@gmail.com",
} as const;

export const sideBarLeftSocials = [
  {
    link: "https://www.linkedin.com/in/sun28/",
    icon: FiLinkedin,
    altimgname: "linkedin",
  },
  {
    link: "https://github.com/sun-28",
    icon: FiGithub,
    altimgname: "github",
  },
  {
    link: "mailto:sunpahwa28@gmail.com",
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
