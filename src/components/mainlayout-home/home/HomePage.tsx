import { ChefHat, ClipboardList, Wheat } from "lucide-react";
import Image from "next/image";

const HomePage = () => {
  return (
    <div className="py-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        {/* Text Content */}
        <div className="flex-1 space-y-6 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-montserrat">
            Discover & Enjoy Mouthwatering Recipes for Every Occasion
          </h2>

          <p className="text-lg text-gray-600">
            A simple and tasty dish that you can make in minutes!
          </p>

          {/* Icons */}
          <div className="flex justify-center md:justify-start gap-6">
            <div className="p-3 bg-gray-100 rounded-lg">
              <Wheat size={28} className="text-gray-700" />
            </div>
            <div className="p-3 bg-gray-100 rounded-lg">
              <ChefHat size={28} className="text-gray-700" />
            </div>
            <div className="p-3 bg-gray-100 rounded-lg">
              <ClipboardList size={28} className="text-gray-700" />
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="flex-1 w-full">
          <Image
            src="https://img.freepik.com/premium-photo/photo-chef-g…corating-restaurant-food-kitchen_763111-37098.jpg"
            alt="chef image"
            width={600}
            height={400}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
