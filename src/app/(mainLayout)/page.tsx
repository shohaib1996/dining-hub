import HomePage from "@/components/mainlayout-home/home/HomePage";
import AllRecipesPage from "@/components/mainlayout-home/recipes/AllRecipes";
import React from "react";
import { getAllRecipes } from "../api/recipe-api/recipe";
import ServiceOfferPage from "@/components/mainlayout-home/our-service-offer/ServiceOffer";

const Home = async () => {
  const res = await getAllRecipes();
  const recipes = Array.isArray(res) ? res : [];
  return (
    <div>
      <HomePage />
      <ServiceOfferPage />
      <AllRecipesPage recipes={recipes} />
    </div>
  );
};

export default Home;
