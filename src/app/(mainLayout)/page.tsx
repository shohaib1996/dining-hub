import HomePage from "@/components/mainlayout-home/home/HomePage";
import AllRecipesPage from "@/components/mainlayout-home/recipes/AllRecipes";
import React from "react";
import { getAllRecipes } from "../api/recipe-api/recipe";
import ServiceOfferPage from "@/components/mainlayout-home/our-service-offer/ServiceOffer";
import MembershipPage from "@/components/mainlayout-home/membership-plan/Membership";

const Home = async () => {
  const res = await getAllRecipes();
  const recipes = Array.isArray(res) ? res : [];

  // Slice the array to get the first 6 recipes
  const slicedRecipes = recipes.slice(0, 6);

  return (
    <div>
      <HomePage />
      <ServiceOfferPage />
      <AllRecipesPage recipes={slicedRecipes} />
      <MembershipPage />
    </div>
  );
};

export default Home;
