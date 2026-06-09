import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import projects from "../data/projects.js";

function Projects() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Navbar />
      <main className="grow max-w-270 mx-auto w-full px-6 py-12">
        <h1 className="text-[clamp(28px,3vw,36px)] font-bold text-[#011257] mb-2">
          Projects
        </h1>
        <p className="text-base text-gray-600 mb-10">
          A collection of full-stack projects I've built — each one
          demonstrating different aspects of my technical stack.
        </p>
        <div className="flex flex-col gap-10">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Projects;
