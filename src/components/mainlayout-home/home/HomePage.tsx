import { ChefHat, ClipboardList, Wheat } from "lucide-react";
import Image from "next/image";

const HomePage = () => {
  return (
    <div className="py-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1 space-y-6 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-green-400">
            Discover & Enjoy Mouthwatering Recipes for Every Occasion
          </h2>

          <p className="text-lg text-gray-600">
            A simple and tasty dish that you can make in minutes!
          </p>

          {/* Icons */}
          <div className="flex justify-center md:justify-start gap-6">
            {/* Wheat Icon with a circular background and yellow color */}
            <div className="p-3 bg-yellow-300 rounded-full">
              <Wheat size={28} className="text-yellow-800" />
            </div>

            {/* ChefHat Icon with a square background and blue color */}
            <div className="p-3 bg-blue-300 rounded-lg">
              <ChefHat size={28} className="text-blue-800" />
            </div>

            {/* ClipboardList Icon with an oval background and green color */}
            <div className="p-3 bg-green-300 rounded-xl">
              <ClipboardList size={28} className="text-green-800" />
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="flex-1 w-full">
          <Image
            src="https://www.pngplay.com/wp-content/uploads/1/Male-Chef-Free-Commercial-Use-PNG-Image.png"
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
