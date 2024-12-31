import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import VideoModal from "/src/assets/VideoModal";

export default function Hero() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);

  useEffect(() => {
    const validateEmail = (email) => {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    };

    if (email) {
      setIsEmailValid(validateEmail(email));
    } else {
      setIsEmailValid(true);
    }
  }, [email]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEmailValid && email) {
      console.log("Email submitted:", email);
      // Here you would typically send the email to your server
      setEmail("");
    }
  };

  const companies = [
    {
      name: "Microsoft",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    },
    {
      name: "Amazon",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Amazon_icon.svg",
    },
    {
      name: "Facebook",
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png",
    },
    {
      name: "LinkedIn",
      logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Beautiful React Templates{" "}
              <span className="text-purple-600">for you.</span>
            </h1>

            <p className="text-gray-600 text-lg max-w-xl">
              Our templates are easy to setup, understand and customize. Fully
              modular components with a variety of pages and components.
            </p>

            {/* Email Input Section */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4 max-w-md">
                <input
                  type="email"
                  placeholder="Your E-mail Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`flex-1 px-6 py-3 rounded-full border ${
                    isEmailValid
                      ? "border-gray-300 focus:border-purple-500"
                      : "border-red-500"
                  } focus:outline-none transition-colors duration-200`}
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors duration-200 whitespace-nowrap"
                  type="submit"
                >
                  Get Started
                </motion.button>
              </div>
              {!isEmailValid && (
                <p className="text-red-500 text-sm">
                  Please enter a valid email address.
                </p>
              )}
            </form>

            {/* Trusted Customers Section */}
            <div className="space-y-4">
              <p className="text-sm text-gray-500 font-medium tracking-wider">
                OUR TRUSTED CUSTOMERS
              </p>
              <div className="flex flex-wrap gap-8 items-center">
                {companies.map((company) => (
                  <motion.img
                    key={company.name}
                    src={company.logo}
                    alt={company.name}
                    className="h-8 opacity-50 hover:opacity-75 transition-opacity"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  />
                ))}
              </div>
            </div>

            {/* Watch Demo Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsVideoModalOpen(true)}
              className="mt-8 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                  clipRule="evenodd"
                />
              </svg>
              Watch Demo
            </motion.button>
          </motion.div>

          {/* Right Column - Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:block"
          >
            <img
              src="/src/assets/sapiens.svg"
              alt="Person working"
              className="w-full h-auto max-w-lg mx-auto"
            />
          </motion.div>
        </div>
      </div>

      {/* Video Modal */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />
    </div>
  );
}
