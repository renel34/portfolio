import htmlIcon from "../../assets/icons/html5-original.svg";
import cssIcon from "../../assets/icons/css3-original.svg";
import jsIcon from "../../assets/icons/javascript-original.svg";
import reactIcon from "../../assets/icons/react-original.svg";
import tailwindIcon from "../../assets/icons/tailwind-original.svg";
import nodeIcon from "../../assets/icons/nodejs-original-wordmark.svg";
import expressIcon from "../../assets/icons/express-original.svg";
import pythonIcon from "../../assets/icons/python-original.svg";
import postgresIcon from "../../assets/icons/postgresql-original.svg";
import oauthIcon from "../../assets/icons/oauth-original.svg";

const stack = [
  {
    category: "Front-End",
    items: [
      { name: "HTML5", icon: htmlIcon },
      { name: "CSS3", icon: cssIcon },
      { name: "JavaScript", icon: jsIcon },
      { name: "React", icon: reactIcon },
      { name: "Tailwind V4", icon: tailwindIcon },
    ],
  },
  {
    category: "Back-End",
    items: [
      { name: "Node.js", icon: nodeIcon },
      { name: "Express", icon: expressIcon },
      { name: "Python", icon: pythonIcon },
      { name: "REST APIs", icon: null },
    ],
  },
  {
    category: "Data & Auth",
    items: [
      { name: "PostgreSQL", icon: postgresIcon },
      { name: "OAuth", icon: oauthIcon },
      { name: "Authentication", icon: null },
      { name: "Encryption & Hashing", icon: null },
    ],
  },
];

function TechStack() {
  return (
    <section className="py-8 px-4 bg-gray-50">
      <h2 className="text-[#011257] font-bold text-[clamp(28px,3vw,36px)] max-w-270 mx-auto mb-4 px-4">
        Tech Stack
      </h2>
      <div className="flex flex-wrap justify-center gap-8 max-w-212.5 mx-auto px-4">
        {stack.map((group) => (
          <div key={group.category} className="w-45">
            <h3 className="text-[#011257] text-xl font-bold mt-0 mb-2">
              {group.category}
            </h3>
            <ul className="list-none p-0 m-0 space-y-2">
              {group.items.map((item) => (
                <li
                  key={item.name}
                  className="flex items-center gap-2 text-base text-gray-800"
                >
                  {item.icon && (
                    <img src={item.icon} className="w-5 h-5" alt={item.name} />
                  )}
                  <span>{item.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TechStack;
