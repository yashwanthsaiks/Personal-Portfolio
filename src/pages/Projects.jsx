import { Github, ExternalLink } from "lucide-react";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import Project1 from "../assets/projects_img/Project1.png";
import project2 from "../assets/projects_img/Food-menu.png";
import project3 from "../assets/projects_img/Expense-tracker.png";
import project4 from "../assets/projects_img/portfolio-preview.png";

const projects = [
  {
    title: "Advingosys",
    description:
      "Designing and developing a critical web application using Java Full Stack technologies (Spring Boot, React, MySQL). Integrating AI-based bots to manage real-time user interactions using Natural Language Processing (NLP), facilitating intelligent automation of request/response workflows.",
    image: Project1,
    github: "https://github.com/yashwanthsaiks/Advingosys",
    live: "",
    tags: [
      "Spring Boot",
      "React",
      "MySQL",
      "NLP",
      "Java",
      "AWS",
    ],
  },
  {
    title: "ServeSmart",
    description:
      "Developed a mobile application to display restaurant menus using QR code scanning. Integrated a QR code scanner to provide instant access to digital menus. Implemented Expo for rapid development and cross-platform compatibility.",
    image: project2,
    github: "https://github.com/yashwanthsaiks/MealMenu-ReactNative",
    live: "",
    tags: [
      "React Native",
      "Expo",
      "JavaScript",
      "QR Scanner",
      "Cross-Platform",
    ],
  },
  {
    title: "ExpenseIQ",
    description:
      "Developed a cross-platform mobile application for tracking daily expenses and managing budgets. Implemented Redux for efficient state management, ensuring seamless data flow and performance. Designed an intuitive UI/UX for easy expense categorization and visualization.",
    image: project3,
    github: "https://github.com/yashwanthsaiks/ExpenseIQ",
    live: "",
    tags: [
      "React Native",
      "Redux",
      "JavaScript",
      "UI/UX Design",
      "State Management",
    ],
  },
  {
    title: "Student Portfolio",
    description:
      "A highly interactive and visually stunning personal portfolio built with React and Tailwind CSS. Features dynamic page routing, glassmorphic UI components, smooth scroll transitions via Framer Motion, and a clean, responsive layout optimized for mobile and desktop screens.",
    image: project4,
    github: "https://github.com/yashwanthsaiks/Personal-portfolio",
    live: "",
    tags: [
      "React",
      "Three.js",
      "Framer Motion",
      "CSS",
      "GLTF",
      "Git",
      "Vercel",
      "Responsive Design",
      "Tailwind CSS",
      "GSAP"
    ],
  },
];


const Projects = () => {
  return (
    <div className="min-h-screen pt-20 px-4 max-w-6xl mx-auto pb-20">
      <ScrollAnimation>
        <h2 className="text-4xl font-bold mb-12 gradient-text">
          Featured Projects
        </h2>
      </ScrollAnimation>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ScrollAnimation key={project.title}>
            <div className="bg-gray-800/50 rounded-lg overflow-hidden backdrop-blur-sm h-full flex flex-col">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-sm bg-purple-500/20 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live</span>
                  </a>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
};

export default Projects;
