import { useState, useEffect } from "react";
import { ChevronDown } from "/src/assets/icons"; // You can use any icon library or SVG

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    {
      name: "About",
      href: "#",
      dropdown: [
        { name: "Our Story", href: "#" },
        { name: "Team", href: "#" },
        { name: "Careers", href: "#" },
      ],
    },
    {
      name: "Blog",
      href: "#",
      dropdown: [
        { name: "Latest Posts", href: "#" },
        { name: "Categories", href: "#" },
        { name: "Archives", href: "#" },
      ],
    },
    { name: "Pricing", href: "#" },
    { name: "Contact Us", href: "#" },
  ];

  return (
    <nav
      className={`bg-white w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? "shadow-md" : "border-b border-gray-200"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <div className="h-8 w-8 bg-purple-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-xl">T</span>
            </div>
            <span className="ml-2 text-xl font-semibold text-gray-800">
              Treact
            </span>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex items-center flex-1 max-w-xs ml-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-4 py-1 pl-10 text-sm border border-gray-300 rounded-full focus:outline-none focus:border-purple-500"
              />
              <svg
                className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={item.href}
                  className="text-gray-600 hover:text-gray-900 flex items-center group"
                >
                  {item.name}
                  {item.dropdown && (
                    <ChevronDown className="ml-1 h-4 w-4 group-hover:text-purple-600" />
                  )}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform" />
                </a>
                {item.dropdown && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 w-48 py-2 mt-1 bg-white rounded-lg shadow-lg border border-gray-100 transition-all duration-200">
                    {item.dropdown.map((subItem) => (
                      <a
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                      >
                        {subItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Login
            </a>
            <a
              href="#"
              className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 transition-all duration-200 transform hover:scale-105"
            >
              Sign Up
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none transition-colors duration-200"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden transition-all duration-300 ease-in-out`}
      >
        {/* Mobile Search */}
        <div className="p-4 border-b border-gray-200">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 pl-10 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
            />
            <svg
              className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
          {menuItems.map((item) => (
            <div key={item.name}>
              <a
                href={item.href}
                className="block px-3 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              >
                {item.name}
              </a>
              {item.dropdown && (
                <div className="pl-4">
                  {item.dropdown.map((subItem) => (
                    <a
                      key={subItem.name}
                      href={subItem.href}
                      className="block px-3 py-2 text-sm text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                    >
                      {subItem.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
          >
            Login
          </a>
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-white bg-purple-600 hover:bg-purple-700 transition-colors duration-200"
          >
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
}
