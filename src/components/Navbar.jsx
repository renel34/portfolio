import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="sticky top-0 z-50">
      <nav className="bg-[#011257] border-b border-gray-500 px-6 py-4">
        <ul className="flex gap-4 list-none m-0 p-0">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-[#8495c5] no-underline transition-colors"
                  : "text-white no-underline hover:text-[#8495c5] transition-colors"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive
                  ? "text-[#8495c5] no-underline transition-colors"
                  : "text-white no-underline hover:text-[#8495c5] transition-colors"
              }
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/resume"
              className={({ isActive }) =>
                isActive
                  ? "text-[#8495c5] no-underline transition-colors"
                  : "text-white no-underline hover:text-[#8495c5] transition-colors"
              }
            >
              Resume
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-[#8495c5] no-underline transition-colors"
                  : "text-white no-underline hover:text-[#8495c5] transition-colors"
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
