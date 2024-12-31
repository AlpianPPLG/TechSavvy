import { useState } from "react";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate sending email via mailto
    const mailtoLink = `mailto:nova07pplg@gmail.com?subject=Contact from ${formData.name}&body=${formData.message}`;

    window.location.href = mailtoLink;

    // Show success notification
    toast.success("Message sent successfully!");

    // Clear form fields
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <ToastContainer />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions? We’re here to help! Fill out the form below and
            we’ll get back to you shortly.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row md:space-x-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 mb-8 md:mb-0"
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="name">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-lg w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-lg w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="border border-gray-300 rounded-lg w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full bg-purple-600 text-white font-semibold py-3 rounded-lg hover:bg-purple-700 transition-colors duration-300"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1"
          >
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
              <p className="text-gray-600 mb-2">
                📍 Address: 123 Main Street, Anytown, USA
              </p>
              <p className="text-gray-600 mb-2">📞 Phone: (123) 456-7890</p>
              <p className="text-gray-600 mb-2">✉️ Email: info@example.com</p>
              <div className="mt-6">
                <h4 className="text-lg font-semibold">Follow Us</h4>
                <div className="flex space-x-4 mt-2">
                  <a
                    href="#"
                    className="text-purple-600 hover:text-purple-800 transition duration-300"
                  >
                    Facebook
                  </a>
                  <a
                    href="#"
                    className="text-purple-600 hover:text-purple-800 transition duration-300"
                  >
                    Twitter
                  </a>
                  <a
                    href="#"
                    className="text-purple-600 hover:text-purple-800 transition duration-300"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
