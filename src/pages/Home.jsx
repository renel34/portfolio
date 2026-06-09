import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import Hero from "../components/Hero.jsx";
import FeaturedProjects from "../components/FeaturedProjects.jsx";
import TechStack from "../components/TechStack.jsx";
import AboutMe from "../components/AboutMe.jsx";

function Home() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Navbar />
      <main className="grow">
        <Hero />
        <FeaturedProjects />
        <TechStack />
        <AboutMe />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
