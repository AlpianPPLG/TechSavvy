import { useState } from "react";
import PropTypes from "prop-types";

const pricingPlans = [
  {
    name: "Basic",
    monthlyPrice: 19,
    yearlyPrice: 199, // Diskon untuk tahunan
    features: ["1 User", "Basic Support", "Access to all features"],
    popular: false,
    rating: 3,
  },
  {
    name: "Pro",
    monthlyPrice: 39,
    yearlyPrice: 399,
    features: [
      "5 Users",
      "Priority Support",
      "Access to all features",
      "Custom Integrations",
    ],
    popular: true,
    rating: 4.5,
  },
  {
    name: "Enterprise",
    monthlyPrice: 99,
    yearlyPrice: 999,
    features: [
      "Unlimited Users",
      "24/7 Support",
      "Access to all features",
      "Custom Solutions",
    ],
    popular: false,
    rating: 5,
  },
];

const StarRating = ({ rating }) => {
  const stars = Array.from({ length: 5 }, (_, index) => (
    <svg
      key={index}
      className={`w-5 h-5 ${
        index < rating ? "text-yellow-500" : "text-gray-300"
      }`}
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M10 15l-5.878 3.09 1.121-6.576L1 6.545l6.618-.962L10 0l2.382 5.583L19 6.545l-4.243 4.965 1.121 6.576z" />
    </svg>
  ));
  return <div className="flex">{stars}</div>;
};

StarRating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Pricing Plans
        </h2>
        <div className="flex justify-center mb-8">
          <button
            className={`px-4 py-2 rounded-l-md ${
              !isYearly
                ? "bg-purple-600 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
            onClick={() => setIsYearly(false)}
          >
            Monthly
          </button>
          <button
            className={`px-4 py-2 rounded-r-md ${
              isYearly
                ? "bg-purple-600 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
            onClick={() => setIsYearly(true)}
          >
            Yearly
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 ${
                plan.popular ? "border-4 border-purple-600" : ""
              }`}
            >
              {plan.popular && (
                <span className="absolute top-2 right-2 bg-purple-600 text-white text-xs font-semibold px-2 py-1 rounded">
                  Popular
                </span>
              )}
              <h3 className="text-lg font-semibold text-gray-800">
                {plan.name}
              </h3>
              <p className="text-2xl font-bold text-purple-600 my-4">
                {isYearly
                  ? `$${plan.yearlyPrice}/year`
                  : `$${plan.monthlyPrice}/month`}
              </p>
              <StarRating rating={plan.rating} />
              <ul className="mb-6 mt-4">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center mb-2">
                    <svg
                      className="w-5 h-5 text-purple-600 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors duration-200">
                Choose Plan
              </button>
              <div className="absolute top-0 left-0 w-full h-full bg-white opacity-0 hover:opacity-75 transition-opacity duration-200 flex items-center justify-center">
                <span className="text-gray-800 font-semibold">Learn More</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
