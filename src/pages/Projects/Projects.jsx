import { ReactLenis } from "lenis/react";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef, useEffect } from "react";
import PropTypes from "prop-types";

// ================== PROJECT DATA ==================
const projects = [
  {
    title: "🤖 AI-Companion Chatbot (Emotional Chatbot)",
    description:
      "An empathetic AI chatbot that detects emotions and responds contextually using NLP and sentiment analysis.",
    src: "/projects/chatbot.png", // ✅ stored in public/projects/
    color: "#4ade80",
    githubLink: "https://github.com/SaRaVaNaN0504/uplifting-ai-companion",
    liveLink: "https://uplifting-ai-companion.onrender.com",
  },
  {
    title: "📑 PDF Summarizer & Chatbot",
    description:
      "Upload any PDF and interact with it via an intelligent chatbot that summarizes and answers queries contextually.",
    src: "/projects/pdfbot.png",
    color: "#60a5fa",
    githubLink: "https://github.com/SaRaVaNaN0504/IntelliDoc-AI-PDF-Analyzer",
    liveLink: "https://intellidoc-ai-pdf-analyzer-saravanan.streamlit.app/",
  },
  {
    title: "📅 Smart Timetable / Schedule Maker",
    description:
      "A smart tool for students that auto-generates optimized timetables and schedules for productivity.",
    src: "/projects/timetable.png",
    color: "#f472b6",
    githubLink: "https://github.com/SaRaVaNaN0504",
    liveLink: "https://geniusplanai-saravanan.streamlit.app/",
  },
  {
    title: "🎥 YouTube Multi-Lingual Transcription",
    description:
      "An AI tool that transcribes YouTube videos into multiple languages using Whisper AI & NLP pipelines.",
    src: "/projects/youtube.png",
    color: "#facc15",
    githubLink: "https://github.com/SaRaVaNaN0504",
    liveLink: "https://your-live-youtube-tool-link.com",
  },
  {
    title: "🌱 Leaf Disease Detection (CNN Model)",
    description:
      "A deep learning CNN model for detecting plant leaf diseases with high accuracy using image classification.",
    src: "/projects/leaf.png",
    color: "#34d399",
    githubLink: "https://github.com/SaRaVaNaN0504",
    liveLink: "https://your-research-paper-link.com",
  },
];

// ================== MAIN PROJECT COMPONENT ==================
export default function Projects() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  // Responsive scaling for smaller displays
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @media screen and (max-width: 1400px) {
        .project-card {
          scale: 0.9;
          margin-top: -4vh;
        }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <ReactLenis root>
      <main className="bg-black" ref={container}>
        {/* ---------- PROJECT SECTIONS ---------- */}
        <section className="text-white w-full bg-slate-950">
          {projects.map((project, i) => {
            const targetScale = 1 - (projects.length - i) * 0.05;
            return (
              <Card
                key={`p_${i}`}
                i={i}
                url={project.src}
                title={project.title}
                color={project.color}
                description={project.description}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
                githubLink={project.githubLink}
                liveLink={project.liveLink}
              />
            );
          })}
        </section>

        {/* ---------- SHOW ALL PROJECTS PANEL ---------- */}
        <div className="h-screen flex items-center justify-center bg-slate-900">
          <div className="text-center space-y-6 px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Want to see all my projects?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              I keep more projects, experiments and demos on my GitHub. Click below to view the full list and source code.
            </p>

            <a
              href="https://github.com/SaRaVaNaN0504"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-teal-400 text-white font-semibold hover:scale-105 transition-transform shadow-lg"
            >
              SHOW ALL PROJECTS
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>
        </div>
        {/* ----------------------------------------------- */}
      </main>
    </ReactLenis>
  );
}

// ================== PROJECT CARD COMPONENT ==================
function Card({
  i,
  title,
  description,
  url,
  color,
  progress,
  range,
  targetScale,
  githubLink,
  liveLink,
}) {
  const container = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0 project-container"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
          transform: `scale(var(--project-scale, 1))`,
          marginTop: "var(--project-margin, 0)",
        }}
        className="relative -top-[25%] h-auto w-[90%] md:w-[85%] lg:w-[75%] xl:w-[65%] origin-top project-card"
        whileHover={{
          y: -8,
          transition: { duration: 0.3 },
        }}
      >
        {/* Card Body */}
        <div className="w-full flex flex-col md:flex-row bg-zinc-900 rounded-2xl overflow-hidden shadow-xl">
          {/* Image Section */}
          <div className="w-full md:w-[55%] h-[250px] md:h-[400px] lg:h-[450px] relative overflow-hidden">
            <motion.img
              src={url}
              alt={title}
              className="w-full h-full object-cover"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            />
            <motion.div
              className="absolute inset-0"
              style={{ backgroundColor: color, mixBlendMode: "overlay" }}
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.3 }}
              transition={{ duration: 0.3 }}
            />
            <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs md:text-sm font-medium">
              Project {i + 1}
            </div>
          </div>

          {/* Description Section */}
          <div className="w-full md:w-[45%] p-6 md:p-8 lg:p-10 flex flex-col justify-between">
            <div>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 md:mb-4">
                {title}
              </h2>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                {description}
              </p>
            </div>

            <div className="mt-4">
              <div className="flex items-center gap-4">
                {/* GitHub Link */}
                <motion.a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                  whileHover={{ y: -3 }}
                >
                  <i className="fab fa-github text-xl" style={{ color }}></i>
                  <span className="text-sm font-medium" style={{ color }}>
                    Code
                  </span>
                </motion.a>

                {/* Live Demo Link */}
                <motion.a
                  href={liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                  whileHover={{ y: -3 }}
                >
                  <i
                    className="fas fa-external-link-alt text-xl"
                    style={{ color }}
                  ></i>
                  <span className="text-sm font-medium" style={{ color }}>
                    Live
                  </span>
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// ================== PROP VALIDATION ==================
Card.propTypes = {
  i: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  progress: PropTypes.object.isRequired,
  range: PropTypes.array.isRequired,
  targetScale: PropTypes.number.isRequired,
  githubLink: PropTypes.string.isRequired,
  liveLink: PropTypes.string.isRequired,
};
