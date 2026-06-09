import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

function Resume() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Navbar />
      <main className="grow max-w-215 mx-auto w-full px-6 py-12">
        <div className="bg-white border border-gray-200 rounded-lg p-10 shadow-md">
          {/* Resume Header */}
          <div className="flex justify-between items-start mb-6 flex-wrap gap-4">
            <div>
              <h1 className="text-3xl font-bold text-[#011257]">
                René Laplante
              </h1>
              <h3 className="text-lg text-gray-500 font-normal mt-1">
                Junior Web Developer
              </h3>
            </div>
            <div className="text-sm text-gray-600 text-right">
              <p>Cumming, GA</p>
              <p>lapinet51@gmail.com</p>
              <p>
                <a
                  href="https://github.com/renel34"
                  className="text-[#2563eb] hover:underline"
                >
                  github.com/renel34
                </a>
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 mb-8">
            <a
              href="/Rene_Laplante_resume.pdf"
              download
              className="px-5 py-2 bg-[#2563eb] text-white rounded-md font-medium hover:bg-[#183992] transition-colors cursor-pointer"
            >
              Download PDF
            </a>
          </div>

          <hr className="border-gray-200 mb-6" />

          {/* Summary */}
          <h2 className="text-xl font-bold text-[#011257] mb-3">Summary</h2>
          <p className="text-base text-gray-600 leading-relaxed mb-6">
            Junior Web Developer with a background in electronics and software
            development, building full-stack web applications using JavaScript,
            Node.js, Express, and PostgreSQL. Experienced designing REST APIs,
            implementing authentication, and developing responsive user
            interfaces. Committed to clean, maintainable code.
          </p>

          <hr className="border-gray-200 mb-6" />

          {/* Technical Skills */}
          <h2 className="text-xl font-bold text-[#011257] mb-3">
            Technical Skills
          </h2>
          <ul className="list-disc list-inside text-base text-gray-600 leading-relaxed space-y-1 mb-6">
            <li>Languages: JavaScript, Python, SQL</li>
            <li>Frontend: HTML5, CSS3, React, Tailwind v4</li>
            <li>Backend: Node.js, Express</li>
            <li>Databases: PostgreSQL</li>
            <li>Tools: Git, GitHub, VSCode, Nginx, PM2</li>
            <li>
              Concepts: REST APIs, OAuth, Authentication, Encryption & Hashing
            </li>
            <li>Hardware: Raspberry Pi 5, GPIO, Sensors, Camera Module</li>
          </ul>

          <hr className="border-gray-200 mb-6" />

          {/* Projects */}
          <h2 className="text-xl font-bold text-[#011257] mb-3">Projects</h2>
          <ul className="list-none p-0 space-y-4 mb-6">
            <li>
              <h4 className="text-base font-semibold text-gray-800">
                Blog Website —{" "}
                <span className="font-normal italic text-gray-500">
                  HTML, CSS, JavaScript, Node.js, Express
                </span>
              </h4>
              <ul className="list-disc list-inside text-base text-gray-600 leading-relaxed space-y-1 mt-1">
                <li>
                  Built a full-stack blog platform supporting CRUD operations
                  with RESTful routing and server-side rendering
                </li>
                <li>
                  Structured application using Express middleware and modular
                  route handling
                </li>
              </ul>
            </li>
            <li>
              <h4 className="text-base font-semibold text-gray-800">
                Book Notes Website —{" "}
                <span className="font-normal italic text-gray-500">
                  HTML, CSS, JavaScript, Node.js, Express, PostgreSQL
                </span>
              </h4>
              <ul className="list-disc list-inside text-base text-gray-600 leading-relaxed space-y-1 mt-1">
                <li>
                  Built a full-stack book tracking application with PostgreSQL
                  persistence and RESTful routing
                </li>
                <li>
                  Implemented SQL-based sorting to allow users to filter entries
                  by date read and rating
                </li>
                <li>
                  Designed relational database schema and managed data with full
                  CRUD operations
                </li>
              </ul>
            </li>
            <li>
              <h4 className="text-base font-semibold text-gray-800">
                Personal Weather Website —{" "}
                <span className="font-normal italic text-gray-500">
                  HTML, CSS, JavaScript, Node.js, Express, IPAPI, OpenWeatherMap
                  API
                </span>
              </h4>
              <ul className="list-disc list-inside text-base text-gray-600 leading-relaxed space-y-1 mt-1">
                <li>
                  Integrated IP geolocation and OpenWeatherMap APIs to
                  dynamically fetch current weather and 5-day forecasts
                </li>
                <li>
                  Implemented asynchronous API calls with error handling for
                  reliable data retrieval
                </li>
                <li>
                  Used EJS templating and partials for modular server-side
                  rendering
                </li>
              </ul>
            </li>
          </ul>

          <hr className="border-gray-200 mb-6" />

          {/* Freelance */}
          <h2 className="text-xl font-bold text-[#011257] mb-3">
            Freelance Work
          </h2>
          <ul className="list-none p-0 space-y-4 mb-6">
            <li>
              <h4 className="text-base font-semibold text-gray-800">
                DW Plumbing — Website Design & Development
              </h4>
              <ul className="list-disc list-inside text-base text-gray-600 leading-relaxed space-y-1 mt-1">
                <li>
                  Designed and developed a website for a local plumbing company
                  to improve their online presence
                </li>
                <li>
                  Built responsive UI and implemented a customer-facing
                  scheduling request form
                </li>
              </ul>
            </li>
          </ul>

          <hr className="border-gray-200 mb-6" />

          {/* Certifications */}
          <h2 className="text-xl font-bold text-[#011257] mb-3">
            Certifications
          </h2>
          <ul className="list-disc list-inside text-base text-gray-600 space-y-1">
            <li>Full-Stack Web Development — Udemy</li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Resume;
