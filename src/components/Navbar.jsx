// import { useState, useRef } from "react";
// import { Link } from "react-router-dom";
// import { navItems } from "../data/navData";
// import NavDropdown from "./NavDropdown";

// /*************  ✨ Windsurf Command ⭐  *************/
// /**
//  * Navbar component for myntra
//  * 
//  * @returns {JSX.Element} A navbar component with links to different pages
//  * and a dropdown menu for each link
//  */
// /*******  5ecb9e7b-d9d2-4f1a-a91f-3717f63ed3c6  *******/
// function Navbar() {
//   const [activeNav, setActiveNav] = useState(null);
//   const closeTimer = useRef(null);

//   const handleMouseEnter = (label) => {
//     if (closeTimer.current) clearTimeout(closeTimer.current);
//     setActiveNav(label);
//   };

//   const handleMouseLeave = () => {
//     closeTimer.current = setTimeout(() => {
//       setActiveNav(null);
//     }, 100);
//   };

//   const activeNavData = navItems.find((n) => n.label === activeNav);

//   return (
//     <div className="w-[80%] md:w-[50%] flex flex-wrap justify-center text-[11px] md:text-[14px]">
//       {navItems.map((nav) => (
//         <div
//           key={nav.label}
//           className="px-[8px] md:px-[12px] cursor-pointer relative"
//           onMouseEnter={() => handleMouseEnter(nav.label)}
//           onMouseLeave={handleMouseLeave}
//         >
//           <Link
//             className={`font-bold transition-colors duration-150 ${
//               activeNav === nav.label ? `${nav.accent} border-b-2 pb-1` : "text-gray-800"
//             }`}
//             to={nav.to}
//           >
//             {nav.label}
//           </Link>
//         </div>
//       ))}

//       {/* Global Dropdown */}
//       {activeNav && activeNavData && (
//         <NavDropdown
//           categories={activeNavData.categories}
//           columns={activeNavData.columns}
//           accentColor={activeNavData.accent}
//           borderColor={activeNavData.border}
//           onMouseEnter={() => handleMouseEnter(activeNav)}
//           onMouseLeave={handleMouseLeave}
//         />
//       )}
//     </div>
//   );
// }

// export default Navbar;
















import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { navItems } from "../data/navData";
import NavDropdown from "./NavDropdown";

function Navbar() {
  const [activeNav, setActiveNav] = useState(null);
  const closeTimer = useRef(null);

  const handleMouseEnter = (label) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveNav(label);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => {
      setActiveNav(null);
    }, 100);
  };

  const activeNavData = navItems.find((n) => n.label === activeNav);

  return (
    <div className="w-[80%] md:w-[50%] flex flex-wrap justify-center text-[11px] md:text-[14px]">
      {navItems.map((nav) => (
        <div
          key={nav.label}
          className="px-[8px] md:px-[12px] cursor-pointer relative"
          onMouseEnter={() => handleMouseEnter(nav.label)}
          onMouseLeave={handleMouseLeave}
        >
          <Link
            className={`font-bold transition-colors duration-150 ${
              activeNav === nav.label ? `${nav.accent} border-b-2 pb-1` : "text-gray-800"
            }`}
            to={nav.to}
          >
            {nav.label}
          </Link>
        </div>
      ))}

      {activeNav && activeNavData && (
        <NavDropdown
          categories={activeNavData.categories}
          columns={activeNavData.columns}
          accentColor={activeNavData.accent}
          borderColor={activeNavData.border}
          onMouseEnter={() => handleMouseEnter(activeNav)}
          onMouseLeave={handleMouseLeave}
        />
      )}
    </div>
  );
}

export default Navbar;