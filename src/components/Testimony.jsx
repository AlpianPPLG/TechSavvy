import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const testimonies = [
  {
    name: "Daniella Doe",
    role: "Mobile Dev",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum aliquid quo eum quae quos illo earum ipsa doloribus nostrum minus libero.",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    rating: 5,
  },
  {
    name: "Jane Doe",
    role: "Marketing",
    message:
      "Lorem ipsum dolor laboriosam deleniti aperiam ab veniam sint non cumque quis tempore cupiditate.",
    image: "https://randomuser.me/api/portraits/women/14.jpg",
    rating: 4,
  },
  {
    name: "Yanick Doe",
    role: "Developer",
    message:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti aperiam ab veniam sint non cumque quis tempore cupiditate.",
    image: "https://randomuser.me/api/portraits/women/18.jpg",
    rating: 5,
  },
  {
    name: "Jane Doe",
    role: "Mobile Dev",
    message:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti aperiam ab veniam sint non cumque quis tempore cupiditate.",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    rating: 4,
  },
  {
    name: "Andy Doe",
    role: "Manager",
    message:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti aperiam ab veniam sint non cumque quis tempore cupiditate.",
    image: "https://randomuser.me/api/portraits/women/62.jpg",
    rating: 5,
  },
  {
    name: "Yanndy Doe",
    role: "Mobile Dev",
    message:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti aperiam ab veniam sint non cumque quis tempore cupiditate.",
    image: "https://randomuser.me/api/portraits/women/19.jpg",
    rating: 3,
  },
];

export default function Testimony() {
  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(testimonies.length / itemsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const currentTestimonies = testimonies.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <div
      className="text-gray-600 bg-white dark:text-gray-300 pt-8 dark:bg-gray-900"
      id="reviews"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
            What Our Users Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentTestimonies.map((testimony, index) => (
            <div
              key={index}
              className="p-6 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none"
            >
              <div className="flex gap-4">
                <img
                  className="w-16 h-16 rounded-full"
                  src={testimony.image}
                  alt={testimony.name}
                  loading="lazy"
                />
                <div>
                  <h6 className="text-lg font-medium text-gray-700 dark:text-white">
                    {testimony.name}
                  </h6>
                  <p className="text-sm text-gray-500 dark:text-gray-300">
                    {testimony.role}
                  </p>
                  <div className="flex mt-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span
                        key={i}
                        className={`${
                          i < testimony.rating
                            ? "text-yellow-400"
                            : "text-gray-300"
                        } text-lg`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="mt-6">{testimony.message}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8 space-x-4">
          <button
            className={`px-4 py-2 rounded-lg ${
              currentPage === 0
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-gray-300 dark:hover:bg-gray-700"
            }`}
            onClick={handlePrev}
            disabled={currentPage === 0}
          >
            <FaArrowLeft
              className="text-gray-500 dark:text-gray-300"
              size={20}
            />
          </button>
          <button
            className={`px-4 py-2 rounded-lg ${
              currentPage === totalPages - 1
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-gray-300 dark:hover:bg-gray-700"
            }`}
            onClick={handleNext}
            disabled={currentPage === totalPages - 1}
          >
            <FaArrowRight
              className="text-gray-500 dark:text-gray-300"
              size={20}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
