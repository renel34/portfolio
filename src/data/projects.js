const projects = [
  {
    id: 1,
    title: "Blog Website",
    description:
      "Developed a full-stack blog platform supporting CRUD operations with RESTful routing and server-side rendering. Structured application using Express middleware and modular route handling.",
    stack: ["HTML", "CSS", "JavaScript", "Node.js", "Express"],
    image: "/assets/images/Blog Website.png",
    liveUrl: import.meta.env.VITE_BLOG_URL,
    githubUrl: "https://github.com/renel34/Blog-Website",
    status: "live",
  },
  {
    id: 2,
    title: "Book Notes Website",
    description:
      "Built a full-stack book tracking application with PostgreSQL persistence, RESTful routing, and structured Express architecture. Implemented CRUD operations and SQL-based sorting for efficient data retrieval.",
    stack: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "PostgreSQL"],
    image: "/assets/images/Book Notes Website.png",
    liveUrl: import.meta.env.VITE_BOOKNOTES_URL,
    githubUrl: "https://github.com/renel34/BookNotes",
    status: "live",
  },
  {
    id: 3,
    title: "Personal Weather Website",
    description:
      "Integrated IP geolocation and OpenWeatherMap APIs to dynamically fetch and render current weather and 5-day forecasts. Implemented asynchronous API calls and error handling for robust data retrieval.",
    stack: [
      "HTML",
      "CSS",
      "JavaScript",
      "Node.js",
      "Express",
      "IPAPI",
      "OpenWeatherMap",
    ],
    image: "/assets/images/Weather App.png",
    liveUrl: import.meta.env.VITE_WEATHER_URL,
    githubUrl: "https://github.com/renel34/LocalWeather.git",
    status: "live",
  },
  {
    id: 4,
    title: "Remote Plant Watering System",
    description:
      "IoT web application allowing users to remotely monitor a plant via live camera feed, detect soil humidity, and activate a peristaltic pump to water it. Built on Raspberry Pi 5 with Python GPIO control and a React frontend.",
    stack: [
      "React",
      "Node.js",
      "Express",
      "Python",
      "PostgreSQL",
      "Raspberry Pi 5",
      "GPIO",
    ],
    image: "/assets/images/Plant Watering App.png",
    liveUrl: null,
    githubUrl: "#",
    status: "inprogress",
  },
];

export default projects;
