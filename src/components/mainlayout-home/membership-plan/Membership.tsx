import { CheckCircle, XCircle, Home, Star, Crown, Shield } from "lucide-react"; // Importing lucide icons

const MembershipPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h2 className="text-3xl font-extrabold text-center mb-12 text-gray-900">
        Choose Your Membership Plan
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Basic Membership */}
        <div className="flex flex-col items-center text-center bg-gradient-to-b from-green-100 via-green-200 to-green-300 shadow-lg rounded-xl p-8 border-2 border-transparent hover:border-green-500 transition-all duration-300 transform hover:scale-105">
          <div className="mb-6">
            <p className="text-3xl font-bold text-green-700">$9.99 / month</p>
            <Home className="text-6xl text-green-700" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Basic Plan
          </h3>
          <p className="text-gray-600 mb-6">
            Perfect for beginners looking to explore simple recipes.
          </p>
          <ul className="text-left text-gray-600 mb-6 space-y-3">
            <li className="flex items-center">
              <CheckCircle className="text-green-600 mr-2" /> Access to 100+
              recipes
            </li>
            <li className="flex items-center">
              <CheckCircle className="text-green-600 mr-2" /> Basic meal plans
            </li>
            <li className="flex items-center">
              <CheckCircle className="text-green-600 mr-2" /> Weekly newsletters
            </li>
            <li className="flex items-center">
              <XCircle className="text-red-600 mr-2" /> Advanced meal plans
            </li>
            <li className="flex items-center">
              <XCircle className="text-red-600 mr-2" /> Access to premium
              content
            </li>
          </ul>
          <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105">
            Sign Up
          </button>
        </div>

        {/* Standard Membership */}
        <div className="flex flex-col items-center text-center bg-gradient-to-b from-blue-100 via-blue-200 to-blue-300 shadow-lg rounded-xl p-8 border-2 border-transparent hover:border-blue-500 transition-all duration-300 transform hover:scale-105">
          <div className="mb-6">
            <p className="text-3xl font-bold text-blue-700">$19.99 / month</p>
            <Shield className="text-6xl text-blue-700" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Standard Plan
          </h3>
          <p className="text-gray-600 mb-6">
            Ideal for home cooks who want to explore more recipes and features.
          </p>
          <ul className="text-left text-gray-600 mb-6 space-y-3">
            <li className="flex items-center">
              <CheckCircle className="text-green-600 mr-2" /> Access to 500+
              recipes
            </li>
            <li className="flex items-center">
              <CheckCircle className="text-green-600 mr-2" /> Advanced meal
              plans
            </li>
            <li className="flex items-center">
              <CheckCircle className="text-green-600 mr-2" /> Access to premium
              content
            </li>
            <li className="flex items-center">
              <XCircle className="text-red-600 mr-2" /> 1-on-1 cooking
              consultations
            </li>
          </ul>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
            Sign Up
          </button>
        </div>

        {/* Premium Membership */}
        <div className="flex flex-col items-center text-center bg-gradient-to-b from-purple-100 via-purple-200 to-purple-300 shadow-lg rounded-xl p-8 border-2 border-transparent hover:border-purple-500 transition-all duration-300 transform hover:scale-105">
          <div className="mb-6">
            <p className="text-3xl font-bold text-purple-700">$29.99 / month</p>
            <Star className="text-6xl text-purple-700" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Premium Plan
          </h3>
          <p className="text-gray-600 mb-6">
            For passionate cooks who want exclusive content and advanced
            features.
          </p>
          <ul className="text-left text-gray-600 mb-6 space-y-3">
            <li className="flex items-center">
              <CheckCircle className="text-green-600 mr-2" /> Access to 1000+
              recipes
            </li>
            <li className="flex items-center">
              <CheckCircle className="text-green-600 mr-2" /> Custom meal plans
            </li>
            <li className="flex items-center">
              <CheckCircle className="text-green-600 mr-2" /> Exclusive webinars
              and Q&A
            </li>
            <li className="flex items-center">
              <CheckCircle className="text-green-600 mr-2" /> 1-on-1 cooking
              consultations
            </li>
          </ul>
          <button className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all duration-300 transform hover:scale-105">
            Sign Up
          </button>
        </div>

        {/* VIP Membership */}
        <div className="flex flex-col items-center text-center bg-gradient-to-b from-red-100 via-red-200 to-red-300 shadow-lg rounded-xl p-8 border-2 border-transparent hover:border-red-500 transition-all duration-300 transform hover:scale-105">
          <div className="mb-6">
            <p className="text-3xl font-bold text-red-700">$49.99 / month</p>
            <Crown className="text-6xl text-red-700" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">VIP Plan</h3>
          <p className="text-gray-600 mb-6">
            The ultimate experience with exclusive features and personalized
            services.
          </p>
          <ul className="text-left text-gray-600 mb-6 space-y-3">
            <li className="flex items-center">
              <CheckCircle className="text-green-600 mr-2" /> Access to all
              recipes
            </li>
            <li className="flex items-center">
              <CheckCircle className="text-green-600 mr-2" /> VIP-only recipes
            </li>
            <li className="flex items-center">
              <CheckCircle className="text-green-600 mr-2" /> Personalized meal
              plans
            </li>
            <li className="flex items-center">
              <CheckCircle className="text-green-600 mr-2" /> Priority customer
              support
            </li>
            <li className="flex items-center">
              <CheckCircle className="text-green-600 mr-2" /> Free event tickets
            </li>
          </ul>
          <button className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all duration-300 transform hover:scale-105">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default MembershipPage;
