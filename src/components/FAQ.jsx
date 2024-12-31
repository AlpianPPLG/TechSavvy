import { useState, useEffect } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "How do I submit a testimony?",
    answer:
      "To submit a testimony, go to the 'Contact Us' section and fill out the testimony form. Once submitted, our team will review it before publishing.",
    category: "Submission",
  },
  {
    question: "Can I update my testimony after submission?",
    answer:
      "Yes, you can request updates by contacting our support team via email or the support page.",
    category: "Submission",
  },
  {
    question: "How are testimonies reviewed?",
    answer:
      "All testimonies are manually reviewed by our team to ensure they adhere to our guidelines and provide valuable feedback.",
    category: "Review Process",
  },
  {
    question: "Can I remove my testimony?",
    answer:
      "Absolutely. You can request the removal of your testimony by reaching out to our support team.",
    category: "Submission",
  },
  {
    question: "What kind of testimonies are accepted?",
    answer:
      "We accept honest and constructive feedback about our services, ensuring it aligns with our community standards.",
    category: "Submission",
  },
  {
    question: "How can I contact support?",
    answer:
      "You can contact our support team via the 'Contact Us' page or by sending an email to support@example.com.",
    category: "Support",
  },
];

export default function FAQTestimony() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [faqStatus, setFaqStatus] = useState({});

  useEffect(() => {
    const storedStatus = localStorage.getItem("faqStatus");
    if (storedStatus) {
      setFaqStatus(JSON.parse(storedStatus));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("faqStatus", JSON.stringify(faqStatus));
  }, [faqStatus]);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
    setFaqStatus((prevStatus) => ({
      ...prevStatus,
      [index]: activeIndex !== index,
    }));
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center text-3xl font-bold text-gray-800 dark:text-white md:text-4xl mb-6">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12">
          Find answers to common questions about submitting and managing your
          testimony.
        </p>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm bg-white dark:bg-gray-800 ${
                faqStatus[index] ? "bg-gray-100 dark:bg-gray-700" : ""
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    toggleFAQ(index);
                  }
                }}
                className="w-full flex items-center justify-between p-4 focus:outline-none"
                aria-expanded={activeIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <h3 className="text-lg font-medium text-gray-800 dark:text-white">
                  {faq.question}
                </h3>
                <div className="text-gray-500 dark:text-gray-400">
                  {activeIndex === index ? (
                    <FaChevronUp className="w-5 h-5" />
                  ) : (
                    <FaChevronDown className="w-5 h-5" />
                  )}
                </div>
              </button>
              <div
                id={`faq-answer-${index}`}
                className={`transition-all duration-300 ease-in-out ${
                  activeIndex === index ? "max-h-40" : "max-h-0 overflow-hidden"
                }`}
              >
                {activeIndex === index && (
                  <div className="px-4 pb-4 text-gray-600 dark:text-gray-300">
                    {faq.answer}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
