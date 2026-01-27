import React, { useRef } from "react";
import { experienceData } from "../assets/lib/data";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { GDSC, MotilaOswal } from "./Work";
import "react-vertical-timeline-component/style.min.css";
import { motion, useScroll, useTransform } from "framer-motion";
import { useSectionInView } from "../assets/lib/hooks";

const Experience: React.FC = () => {
  const { ref } = useSectionInView("Experience");
  const animationReference = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: animationReference,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  const bulletVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, duration: 0.4 }
    })
  };

  return (
    <React.Fragment>
      <section className="relative mt-16 min-h-screen py-32" id="experience" ref={ref}>
        <div className="title-container flex flex-col gap-6 justify-center items-center p-32 w-1/2 max-lg:w-full max-lg:p-16 max-lg:items-start">
          <motion.div
            ref={animationReference}
            style={{
              scale: scaleProgess,
              opacity: opacityProgess,
              textAlign: "left",
            }}
          >
            <p className="text-[--black] mb-6">
              <span className="text-turquoise">&lt;</span>
              {experienceData.title_EN}
              <span className="text-turquoise">/&gt;</span>
            </p>

            <h2 className="text-[--black] text-center max-lg:text-left break-words">
              {experienceData.description_EN}
            </h2>
          </motion.div>
        </div>
        
        <style>{`
          .vertical-timeline-element-content {
            transition: all 0.3s ease !important;
          }
          .vertical-timeline-element-content:hover {
            transform: scale(1.03) !important;
            box-shadow: 0 35px 70px -15px rgba(0, 0, 0, 0.6), 0 0 50px rgba(20, 184, 166, 0.25) !important;
          }
          .vertical-timeline::before {
            width: 4px !important;
          }
        `}</style>

        <VerticalTimeline animate={true} lineColor="#14b8a6">
          {/* Motilal Oswal */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ 
              background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)", 
              color: "#e2e8f0",
              borderRadius: "2rem",
              padding: "3.5rem",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 30px rgba(20, 184, 166, 0.15)",
              border: "2px solid rgba(20, 184, 166, 0.3)",
              minHeight: "400px",
            }}
            contentArrowStyle={{ borderRight: "10px solid #14b8a6" }}
            date="Jun 2025 – Aug 2025"
            dateClassName="work-date !text-2xl !font-bold"
            iconStyle={{
              background: "#fff",
              color: "#14b8a6",
              cursor: "pointer",
              boxShadow: "0 0 25px rgba(20, 184, 166, 0.6)",
              width: "60px",
              height: "60px",
            }}
            icon={<MotilaOswal />}
            iconOnClick={() => {
              window.location.href = "https://www.motilaloswal.com/";
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <h3 className="!text-3xl !font-bold text-white !m-0">
                  AI/ML Intern
                </h3>
                <motion.span 
                  className="px-4 py-2 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full text-sm font-semibold text-white"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, type: "spring" }}
                >
                  Recent
                </motion.span>
              </div>
              <h4 className="!text-xl !font-medium text-teal-400 mb-8 !mt-0">
                Motilal Oswal Financial Services • Mumbai, India
              </h4>
              <ul className="space-y-5 mt-6">
                {[
                  "Built a customer support chatbot using LangChain, LangGraph and FastAPI for automated query support.",
                  "Designed a multi-agent orchestration system with 10+ tool-based agents enabling intelligent API invocation and parallel task execution.",
                  "Implemented a Graph-RAG pipeline for real-time market research, improving response accuracy by 35%.",
                  "Integrated Redis for caching to reduce latency and ChromaDB as a vector database for semantic memory."
                ].map((item, i) => (
                  <motion.li 
                    key={i}
                    className="flex items-start gap-4 text-gray-300 text-lg leading-relaxed"
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={bulletVariants}
                  >
                    <span className="text-teal-400 mt-1 text-xl">▹</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
              <motion.div 
                className="flex flex-wrap gap-3 mt-8"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                {["LangChain", "LangGraph", "FastAPI", "Redis", "ChromaDB", "Graph-RAG"].map((tech) => (
                  <span key={tech} className="px-4 py-2 bg-teal-500/10 border border-teal-500/30 rounded-full text-base text-teal-300 font-medium">
                    {tech}
                  </span>
                ))}
              </motion.div>
            </motion.div>
          </VerticalTimelineElement>

          {/* GDG */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ 
              background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)", 
              color: "#e2e8f0",
              borderRadius: "2rem",
              padding: "3.5rem",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 30px rgba(59, 130, 246, 0.15)",
              border: "2px solid rgba(59, 130, 246, 0.3)",
              minHeight: "350px",
            }}
            contentArrowStyle={{ borderRight: "10px solid #3b82f6" }}
            date="Sep 2024 – Present"
            dateClassName="work-date !text-2xl !font-bold"
            iconStyle={{
              background: "#fff",
              color: "#3b82f6",
              cursor: "pointer",
              boxShadow: "0 0 25px rgba(59, 130, 246, 0.6)",
              width: "60px",
              height: "60px",
            }}
            icon={<GDSC />}
            iconOnClick={() => {
              window.location.href = "https://gdg-jiit.com/";
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <h3 className="!text-3xl !font-bold text-white !m-0">
                  AI/ML Lead
                </h3>
                <motion.span 
                  className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-semibold text-white"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, type: "spring" }}
                >
                  Current
                </motion.span>
              </div>
              <h4 className="!text-xl !font-medium text-blue-400 mb-8 !mt-0">
                Google Developer Groups • Noida, India
              </h4>
              <ul className="space-y-5 mt-6">
                {[
                  "Played an important role in organizing BITBOX 5.0, a national-level hackathon by GDG-JIIT, managing website development, event operations, and participant logistics for 200+ competing teams.",
                  "Led an AI/ML workshop for 200+ students, teaching fundamentals of machine learning and hands-on implementation."
                ].map((item, i) => (
                  <motion.li 
                    key={i}
                    className="flex items-start gap-4 text-gray-300 text-lg leading-relaxed"
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={bulletVariants}
                  >
                    <span className="text-blue-400 mt-1 text-xl">▹</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
              <motion.div 
                className="flex flex-wrap gap-3 mt-8"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                {["Leadership", "Event Management", "AI/ML", "Workshop", "Hackathon"].map((tech) => (
                  <span key={tech} className="px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-base text-blue-300 font-medium">
                    {tech}
                  </span>
                ))}
              </motion.div>
            </motion.div>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </section>
    </React.Fragment>
  );
};

export default Experience;
