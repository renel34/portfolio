function ProjectCard({ project }) {
  return (
    <article className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row">
      <img
        src={project.image}
        alt={project.title}
        className="w-full md:w-70 h-50 object-cover"
      />
      <div className="p-6 flex flex-col justify-between grow">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h2 className="text-xl font-bold text-[#011257]">
              {project.title}
            </h2>
            {project.status === "inprogress" && (
              <span className="px-2 py-1 bg-green-50 text-green-700 text-xs rounded-md border border-green-200">
                In Progress
              </span>
            )}
          </div>
          <p className="text-base text-gray-600 leading-relaxed mb-4">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 bg-blue-50 text-[#2563eb] text-xs rounded-md border border-blue-100"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="flex gap-3">
          {project.status === "live" ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 bg-[#2563eb] border border-gray-200 text-white rounded-md text-sm font-medium hover:bg-[#183992] transition-colors no-underline"
            >
              Live Demo
            </a>
          ) : (
            <span className="px-4 py-2 bg-gray-300 text-gray-500 rounded-md text-sm font-medium cursor-not-allowed">
              Coming Soon
            </span>
          )}
          {project.githubUrl !== "#" ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 border border-[#183992] text-[#2563eb] rounded-md text-sm font-medium hover:bg-[#2563eb] hover:text-white transition-colors no-underline"
            >
              GitHub
            </a>
          ) : (
            <span className="px-4 py-2 border border-gray-300 text-gray-400 rounded-md text-sm font-medium cursor-not-allowed">
              GitHub
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
