//api to get all recipes
// export const getAllRecipes = async () => {
//   const response = await fetch("https://dorm-dine-hub-server.vercel.app/meals");
//   return response.json();
// };

export const getAllRecipes = async () => {
  const response = await fetch("https://dorm-dine-hub-server.vercel.app/meals");

  // Log the response to inspect it
  const data = await response.json();
  console.log("API Response:", data); // Log the response data

  return data; // Return the data
};
