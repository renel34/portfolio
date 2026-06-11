const stack = [
  {
    category: "Front-End",
    items: [
      { name: "HTML5", icon: "/assets/icons/html5-original.svg" },
      { name: "CSS3", icon: "/assets/icons/css3-original.svg" },
      { name: "JavaScript", icon: "/assets/icons/javascript-original.svg" },
      { name: "React", icon: "/assets/icons/react-original.svg" },
      { name: "Tailwind V4", icon: "/assets/icons/tailwind-original.svg" },
    ],
  },
  {
    category: "Back-End",
    items: [
      { name: "Node.js", icon: "/assets/icons/nodejs-original-wordmark.svg" },
      { name: "Express", icon: "/assets/icons/express-original.svg" },
      { name: "Python", icon: "/assets/icons/python-original.svg" },
      { name: "REST APIs", icon: null },
    ],
  },
  {
    category: "Data & Auth",
    items: [
      { name: "PostgreSQL", icon: "/assets/icons/postgresql-original.svg" },
      { name: "OAuth", icon: "/assets/icons/oauth-original.svg" },
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
