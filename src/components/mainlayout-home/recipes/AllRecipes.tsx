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
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="relative h-[150px] sm:h-[100px] md:h-[150px] lg:h-[150px] overflow-hidden rounded-lg shadow-lg max-w-5xl mx-auto mt-[-50px] my-10">
        <Image
          src="https://th.bing.com/th/id/R.9765cb6ec0ebe651a795edef4fe07846?rik=Yp2lbBAvV6fD3g&pid=ImgRaw&r=0"
          alt="Chef with food"
          height={1400}
          width={1200}
          className="w-full h-full object-cover"
          priority
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col sm:flex-row items-center justify-center p-4 sm:p-6 md:p-8">
          {/* Image */}
          <Image
            src="https://www.pngmart.com/files/16/Hotel-Chef-Cook-Vector-Transparent-PNG.png"
            alt="Menu Cartoon"
            height={1500}
            width={1500}
            className="w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 object-cover mb-4 sm:mb-0 sm:mr-6"
          />

          {/* Text Content */}
          <div className="text-white text-center sm:text-left max-w-[400px] sm:max-w-[500px] md:max-w-[600px] sm:ml-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 font-montserrat">
              Meals By Category
            </h2>
            <p className="text-sm sm:text-base font-medium opacity-90">
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
          className={`px-4 py-2 mx-2 font-semibold flex items-center space-x-2 ${
            selectedMealType === "all"
              ? "bg-green-500 text-white"
              : "bg-gray-200 text-gray-800"
          } rounded-md`}
        >
          <UtensilsCrossed className="w-5 h-5" />
          <span>All</span>
        </Button>
        <Button
          onClick={() => setSelectedMealType("breakfast")}
          className={`px-4 py-2 mx-2 font-semibold flex items-center space-x-2 ${
            selectedMealType === "breakfast"
              ? "bg-green-500 text-white"
              : "bg-gray-200 text-gray-800"
          } rounded-md`}
        >
          <EggFried className="w-5 h-5" />
          <span>Breakfast</span>
        </Button>
        <Button
          onClick={() => setSelectedMealType("lunch")}
          className={`px-4 py-2 mx-2 font-semibold flex items-center space-x-2 ${
            selectedMealType === "lunch"
              ? "bg-green-500 text-white"
              : "bg-gray-200 text-gray-800"
          } rounded-md`}
        >
          <Sandwich className="w-5 h-5" />
          <span>Lunch</span>
        </Button>
        <Button
          onClick={() => setSelectedMealType("dinner")}
          className={`px-4 py-2 mx-2 font-semibold flex items-center space-x-2 ${
            selectedMealType === "dinner"
              ? "bg-green-500 text-white"
              : "bg-gray-200 text-gray-800"
          } rounded-md`}
        >
          <Wine className="w-5 h-5" />
          <span>Dinner</span>
        </Button>
      </div>

      {/* Recipe Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe) => (
            <Card
              key={recipe._id}
              className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden border-2 border-gray-200 hover:border-gray-400 transition-all duration-300"
            >
              <CardContent className="px-4 py-4">
                <Image
                  src={recipe.mealImage}
                  alt={recipe.mealTitle}
                  height={1000}
                  width={1200}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />

                <div className="flex justify-between items-start mb-2">
                  <div>
                    <CardTitle className="text-xl font-semibold text-gray-800">
                      {recipe.mealTitle}
                    </CardTitle>
                  </div>
                </div>

                {/* Rating and Meal Type */}
                <div className="flex items-center justify-between mt-2 mb-4">
                  <div className="flex items-center text-yellow-500">
                    <p className="text-gray-600 flex items-center">
                      <span className="mr-2">Rating:</span>
                      <Rating
                        style={{ maxWidth: 60 }}
                        value={recipe.rating}
                        readOnly
                        halfFillMode="svg"
                      />
                    </p>
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
    </div>
  );
};

export default AllRecipesPage;
