function Hero() {
  return (
    <section className="bg-[url('assets/images/cobalt-textured-background.jpg')] bg-cover bg-center bg-no-repeat py-[clamp(64px,10vw,96px)] px-[clamp(16px,5vw,84px)]">
      <div className="max-w-155">
        <h1 className="font-bold text-[clamp(48px,5vw,64px)] leading-tight mb-2 text-white">
          René Laplante
        </h1>
        <h2 className="font-bold text-[clamp(24px,3vw,32px)] leading-relaxed text-white mt-1 mb-8">
          Full-Stack Web Developer
        </h2>
        <p className="text-[clamp(16px,2vw,20px)] text-white mb-8">
          I build full-stack web applications using JavaScript, Node.js,
          Express, and PostgreSQL. I design REST APIs, implement authentication,
          and develop responsive user interfaces.
        </p>
        <div className="flex gap-4 flex-wrap">
          <a
            href="https://github.com/renel34"
            className="group flex items-center gap-2 border border-white px-4 py-2 bg-[#2563eb] text-white rounded-md font-medium hover:bg-[#183992] transition-colors no-underline"
          >
            <img
              className="w-5 h-5 brightness-0 invert"
              src={githubIcon}
              alt="GitHub Icon"
              src="/assets/icons/github.svg" className="w-5 h-5 group-hover:invert" alt="GitHub"
            />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
