import { useState, useEffect } from "react";

export default function Navbar({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex justify-between bg-white p-6 py-7 text-md sticky top-0 z-10">
        <div>Danwiic</div>

        <div className="flex justify-around gap-8 text-md transition-all duration-700 ease-in-out">
          <NavbarItem />
          <div></div>
        </div>
        <button className="cursor-pointer">Lightmode</button>
      </div>
      {children}
    </>
  );
}

function NavbarItem() {
  const sections = ["Home", "Services", "Skills", "Contact"];
  const [activeLink, setActiveLink] = useState<string>("home"); // Track active section

  // Function to handle link click and scroll to section
  const handleLinkClick = (id: string) => {
    setActiveLink(id);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Scroll event listener to update active link dynamically
  useEffect(() => {
    const handleScroll = () => {
      const sectionOffsets = sections.map((id) => {
        const section = document.getElementById(id.toLowerCase());
        return section ? section.offsetTop : 0;
      });

      const scrollPosition = window.scrollY;

      // Find the section that is currently in view
      for (let i = 0; i < sectionOffsets.length - 20; i++) {
        if (
          scrollPosition >= sectionOffsets[i] &&
          (!sectionOffsets[i + 1] || scrollPosition < sectionOffsets[i + 1])
        ) {
          setActiveLink(sections[i].toLowerCase());
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ul className="flex gap-6">
      {sections.map((item, i) => {
        return (
          <li key={i}>
            <a
              href={`#${item.toLowerCase()}`}
              className={`hover:text-pink-800 before:rounded-xl px-4 py-7 relative before:absolute before:left-0 before:bottom-2 before:h-1 before:w-0 before:bg-pink-800 hover:before:w-full before:transition-all before:duration-500 ease-in-out ${
                activeLink === item.toLowerCase()
                  ? "text-pink-800 before:w-full"
                  : ""
              }`}
              onClick={(e) => {
                e.preventDefault(); // Prevent default anchor behavior
                handleLinkClick(item.toLowerCase());
              }}
            >
              {item}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
