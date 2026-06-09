import projects from "../data/projects.js";

const featuredIds = [3, 4, 2]; // BookNotes, Weather, Plant Watering

function FeaturedProjects() {
  const featured = featuredIds.map((id) => projects.find((p) => p.id === id));

  return (
    <section className="py-8 px-4">
      <h2 className="text-[clamp(28px,3vw,36px)] font-bold text-[#011257] max-w-270 mx-auto mb-4 px-4">
        Featured Projects
      </h2>
      <div className="flex flex-wrap gap-6 justify-center">
        {featured.map((project) => (
          <article
            key={project.id}
            className="flex flex-col flex-[0_1_320px] bg-white border border-gray-200 rounded-lg p-6 shadow-md"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-68 object-cover rounded mb-4"
            />
            <h3 className="text-[#011257] text-xl font-bold mb-2">
              {project.title}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed grow">
              {project.description}
            </p>
            <p className="text-sm text-gray-600 mt-2">
              Stack: {project.stack.join(", ")}
            </p>
            <div className="flex gap-3 mt-4 pt-4">
              {project.status === "live" ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 bg-[#2563eb] border border-gray-200 text-white rounded-md text-sm font-medium hover:bg-[#183992] transition-colors no-underline"
                >
                  Live Demo
                </a>
              ) : (
                <span className="px-3 py-1.5 bg-gray-300 text-gray-500 rounded-md text-sm font-medium cursor-not-allowed">
                  Coming Soon
                </span>
              )}
              {project.githubUrl !== "#" ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 border border-[#183992] text-[#2563eb] rounded-md text-sm font-medium hover:bg-[#2563eb] hover:text-white transition-colors no-underline"
                >
                  GitHub
                </a>
              ) : (
                <span className="px-3 py-1.5 border border-gray-300 text-gray-400 rounded-md text-sm font-medium cursor-not-allowed">
                  GitHub
                </span>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default FeaturedProjects;
