import { useState } from "react";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";

const blogPosts = [
  {
    id: 1,
    title: "The Future of Web Development: Trends to Watch in 2024",
    excerpt:
      "Explore the cutting-edge technologies and methodologies shaping the future of web development.",
    author: "Jane Doe",
    date: "May 15, 2024",
    category: "Web Development",
    image: "/img/image1.jpg",
    featured: true,
  },
  {
    id: 2,
    title:
      "Mastering React Hooks: Advanced Techniques for Efficient State Management",
    excerpt:
      "Dive deep into React Hooks and learn how to optimize your application's performance.",
    author: "John Smith",
    date: "April 22, 2024",
    category: "React",
    image: "/img/image2.jpg",
    featured: false,
  },
  {
    id: 3,
    title: "The Power of Tailwind CSS: Building Responsive Designs with Ease",
    excerpt:
      "Discover how Tailwind CSS can streamline your development process and create stunning UIs.",
    author: "Emily Johnson",
    date: "March 10, 2024",
    category: "CSS",
    image: "/img/image3.jpg",
    featured: false,
  },
  {
    id: 4,
    title: "Optimizing Website Performance: A Comprehensive Guide",
    excerpt:
      "Learn essential techniques to boost your website's speed and improve user experience.",
    author: "Michael Brown",
    date: "February 5, 2024",
    category: "Performance",
    image: "/img/image4.jpg",
    featured: false,
  },
  {
    id: 5,
    title: "The Rise of JAMstack: Revolutionizing Web Development",
    excerpt:
      "Explore how JAMstack architecture is changing the landscape of modern web development.",
    author: "Sarah Lee",
    date: "January 20, 2024",
    category: "Web Development",
    image: "/img/image5.jpg",
    featured: false,
  },
  {
    id: 6,
    title:
      "Accessibility in Web Design: Creating Inclusive Digital Experiences",
    excerpt:
      "Learn best practices for designing and developing websites that are accessible to all users.",
    author: "David Wilson",
    date: "December 5, 2023",
    category: "UX/UI",
    image: "/img/image6.jpg",
    featured: false,
  },
];

const BlogCard = ({ post }) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5 }}
    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
  >
    <img
      src={post.image}
      alt={post.title}
      className="w-full h-48 object-cover"
    />
    <div className="p-6">
      <span className="text-xs font-semibold text-purple-600 uppercase tracking-wider">
        {post.category}
      </span>
      <h3 className="mt-2 text-xl font-semibold leading-tight mb-2">
        {post.title}
      </h3>
      <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-500">{post.date}</span>
        <span className="text-sm font-medium text-gray-700">{post.author}</span>
      </div>
      <motion.a
        href="#"
        className="mt-4 inline-block text-purple-600 font-semibold hover:text-purple-800 transition-colors duration-200"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Read More
      </motion.a>
    </div>
  </motion.div>
);

BlogCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    featured: PropTypes.bool.isRequired,
  }).isRequired,
};

const FeaturedPost = ({ post }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-purple-100 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
  >
    <div className="md:flex">
      <div className="md:flex-shrink-0">
        <img
          src={post.image}
          alt={post.title}
          className="h-48 w-full object-cover md:w-48"
        />
      </div>
      <div className="p-8">
        <span className="block mt-1 text-lg leading-tight font-semibold text-purple-600 hover:underline">
          Featured Post
        </span>
        <h2 className="mt-2 text-2xl font-semibold text-gray-900">
          {post.title}
        </h2>
        <p className="mt-2 text-gray-600">{post.excerpt}</p>
        <div className="mt-4 flex items-center">
          <div className="text-sm font-medium text-gray-900">{post.author}</div>
          <div className="ml-2 text-sm text-gray-500">{post.date}</div>
        </div>
        <motion.a
          href="#"
          className="mt-4 inline-block text-purple-600 font-semibold hover:text-purple-800 transition-colors duration-200"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Read Full Article
        </motion.a>
      </div>
    </div>
  </motion.div>
);

FeaturedPost.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    featured: PropTypes.bool.isRequired,
  }).isRequired,
};

export default function BlogSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;

  const categories = [
    "All",
    ...new Set(blogPosts.map((post) => post.category)),
  ];

  const filteredPosts = blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === "All" || post.category === selectedCategory)
  );

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const featuredPost = blogPosts.find((post) => post.featured);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Latest from Our Blog
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay up-to-date with the latest trends, tips, and insights in web
            development and design.
          </p>
        </motion.div>

        {featuredPost && <FeaturedPost post={featuredPost} />}

        <div className="my-8 flex flex-col md:flex-row justify-between items-center">
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <input
              type="text"
              placeholder="Search posts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>
          <div className="w-full md:w-1/3">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>

        <AnimatePresence>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {currentPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </AnimatePresence>

        {filteredPosts.length > postsPerPage && (
          <div className="mt-12 flex justify-center">
            {Array.from(
              { length: Math.ceil(filteredPosts.length / postsPerPage) },
              (_, i) => (
                <motion.button
                  key={i}
                  onClick={() => paginate(i + 1)}
                  className={`mx-1 px-4 py-2 rounded-md ${
                    currentPage === i + 1
                      ? "bg-purple-600 text-white"
                      : "bg-white text-purple-600"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {i + 1}
                </motion.button>
              )
            )}
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <motion.a
            href="#"
            className="inline-block bg-purple-600 text-white font-semibold py-3 px-8 rounded-full hover:bg-purple-700 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Posts
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
