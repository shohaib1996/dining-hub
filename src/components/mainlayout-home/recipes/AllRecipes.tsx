"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AllProducts } from "@/types";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useState } from "react";

// Importing icons
import { EggFried, Sandwich, Wine, UtensilsCrossed } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const AllRecipesPage = ({ recipes }: { recipes: AllProducts[] }) => {
  const [selectedMealType, setSelectedMealType] = useState<string>("all");

  // Filter recipes based on selected meal type
  const filteredRecipes =
    selectedMealType === "all"
      ? recipes
      : recipes.filter(
          (recipe) => recipe.mealType.toLowerCase() === selectedMealType
        );

  return (
    <div className="px-4 py-20 bg-color">
      <div className="max-w-6xl mx-auto">
        <div className="relative h-[150px] sm:h-[100px] md:h-[150px] lg:h-[150px] overflow-hidden mt-[-55px] my-10 max-w-4xl mx-auto">
          <Image
            src="https://static.vecteezy.com/system/resources/previews/021/664/762/non_2x/ribbon-banner-icon-ribbon-transparent-free-png.png"
            alt="Chef with food"
            height={1500}
            width={1500}
            className="w-full h-full object-cover"
          />

          {/* Overlay Content */}
          <div className="absolute inset-0 flex flex-col sm:flex-row items-center justify-center sm:p-6 md:p-8">
            <Image
              src="https://www.pngmart.com/files/16/Hotel-Chef-Cook-Vector-Transparent-PNG.png"
              alt="Menu Cartoon"
              height={1500}
              width={1500}
              className="w-20 h-20 sm:w-24 sm:h-24 md:w-33 md:h-30 object-cover mb-4 sm:mb-0 sm:mr-6"
            />

            {/* Text Content */}
            <div className="text-black text-center sm:text-left  sm:max-w-[500px] md:max-w-[600px] sm:-ml-9">
              <h2 className="text-1xl sm:text-3xl md:text-2xl font-semibold ml-32 mt-4">
                Meals By Category
              </h2>
              <p className="text-sm sm:text-base font-medium opacity-90 overflow-hidden line-clamp-2 mt-2">
                Appetizers are small, flavorful dishes served before the main
                course to stimulate the appetite. Common examples include
                bruschetta, stuffed mushrooms, and shrimp cocktail.
              </p>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="mb-8 text-center flex flex-wrap justify-center gap-4 md:gap-2">
          <Button
            onClick={() => setSelectedMealType("all")}
            className={`px-4 py-2 font-semibold flex items-center space-x-2 rounded-md transition duration-200 ${
              selectedMealType === "all"
                ? "bg-green-500 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-green-500 hover:text-white"
            }`}
          >
            <UtensilsCrossed className="w-5 h-5" />
            <span>All</span>
          </Button>
          <Button
            onClick={() => setSelectedMealType("breakfast")}
            className={`px-4 py-2 font-semibold flex items-center space-x-2 rounded-md transition duration-200 ${
              selectedMealType === "breakfast"
                ? "bg-green-500 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-green-500 hover:text-white"
            }`}
          >
            <EggFried className="w-5 h-5" />
            <span>Breakfast</span>
          </Button>
          <Button
            onClick={() => setSelectedMealType("lunch")}
            className={`px-4 py-2 font-semibold flex items-center space-x-2 rounded-md transition duration-200 ${
              selectedMealType === "lunch"
                ? "bg-green-500 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-green-500 hover:text-white"
            }`}
          >
            <Sandwich className="w-5 h-5" />
            <span>Lunch</span>
          </Button>
          <Button
            onClick={() => setSelectedMealType("dinner")}
            className={`px-4 py-2 font-semibold flex items-center space-x-2 rounded-md transition duration-200 ${
              selectedMealType === "dinner"
                ? "bg-green-500 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-green-500 hover:text-white"
            }`}
          >
            <Wine className="w-5 h-5" />
            <span>Dinner</span>
          </Button>
        </div>

        {/* Recipe Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {filteredRecipes.length > 0 ? (
            filteredRecipes.map((recipe) => (
              <Card
                key={recipe._id}
                className="mx-auto bg-white shadow-lg rounded-lg overflow-hidden border-gray-300 hover:border-gray-500 transition-all duration-300 w-[350px]"
              >
                <CardContent className="px-4 py-4">
                  <Image
                    src={recipe.mealImage}
                    alt={recipe.mealTitle}
                    height={500}
                    width={500}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />

                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <CardTitle className="w-[270px] text-ellipsis whitespace-nowrap font-semibold text-gray-800 overflow-hidden">
                        {recipe.mealTitle}
                      </CardTitle>
                    </div>
                  </div>

                  {/* Rating and Meal Type */}
                  <div className="flex items-center justify-between mt-2 mb-4">
                    <div className="flex items-center text-yellow-500">
                      <div className="text-gray-600 flex items-center">
                        <span className="mr-2">Rating:</span>
                        <Rating
                          style={{ maxWidth: 60 }}
                          value={recipe.rating}
                          readOnly
                          halfFillMode="svg"
                        />
                      </div>
                    </div>
                    <CardDescription className="text-sm text-gray-600">
                      {recipe.mealType}
                    </CardDescription>
                  </div>

                  <div className="flex justify-between items-center mt-4">
                    <Button className="bg-green-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-green-600 transition-all duration-300">
                      View Details
                    </Button>
                    <p className="text-gray-600 font-bold">
                      ${recipe.price.toFixed(2)}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <p className="text-center text-xl text-gray-600">
              No recipes available for this meal type
            </p>
          )}
        </div>

        <div className="flex justify-center mt-10">
          <Button className="bg-yellow-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition-all duration-300">
            Show All Meals
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AllRecipesPage;
