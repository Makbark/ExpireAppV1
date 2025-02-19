class FoodFetcher {
  constructor() {}
}

async function fetchSRLegacyNutrients(foodName) {
  const apiKey = "ymuCc4xqKpNsZrt2IiQHwFUbYQyipv05qD53QsX3"; // Replace with your actual API key

  try {
    // Step 1: Search for food

    const fdcId = await searchFoodByName(foodName, apiKey);
    if (!fdcId) return;

    // Step 2: Fetch food details
    const detailsData = await fetchFoodDetails(fdcId, apiKey);

    // Step 3: Extract nutrients
    const nutrients = extractSpecificNutrients(detailsData);

    return nutrients;

    //console.log(nutrients);
    //console.log("Extracted Nutrients:", nutrients);
  } catch (error) {
    console.error("Error fetching food data:", error);
  }
}

async function searchFoodByName(foodName, apiKey) {
  const searchUrl = `https://api.nal.usda.gov/fdc/v1/foods/search?query=${encodeURIComponent(
    foodName
  )}&dataType=Foundation&api_key=${apiKey}`;

  const response = await fetch(searchUrl);

  // Log response status and raw text

  const responseText = await response.text();

  if (!response.ok) {
    console.error("API request failed with status:", response.status);
    throw new Error("API request failed");
  }

  const data = JSON.parse(responseText);

  if (data.foods && data.foods.length > 0) {
    const food = data.foods[0]; // Get the first result
    console.log(`Found Food: ${food.description}, FDC ID: ${food.fdcId}`);
    return food.fdcId;
  } else {
    console.log("No SR Legacy foods found for the given name.");
    return null;
  }
}

async function fetchFoodDetails(fdcId, apiKey) {
  const detailsUrl = `https://api.nal.usda.gov/fdc/v1/food/${fdcId}?format=abridged&api_key=${apiKey}`;
  const response = await fetch(detailsUrl);
  const data = await response.json();
  //console.log("Full Food Details:", data);
  return data;
}

function extractSpecificNutrients(detailsData) {
  const requiredNutrients = [
    "Energy (Atwater General Factors)",
    "Protein",
    "Carbohydrate, by difference",
    "Total lipid (fat)",
    "Sodium, Na",
  ];

  // Filter to include only the required nutrients
  const specificNutrients = detailsData.foodNutrients.filter((nutrient) =>
    requiredNutrients.includes(nutrient.name)
  );

  /* Log the specific nutrients
  specificNutrients.forEach((nutrient) => {
    console.log(`${nutrient.name}: ${nutrient.amount} ${nutrient.unitName}`);
  });*/

  //convert to dictionary
  const nutrientsDictionary = {};
  specificNutrients.forEach((nutrient) => {
    //console.log(`${nutrient.name}: ${nutrient.amount} ${nutrient.unitName}`);
    nutrientsDictionary[nutrient.name] = {
      value: nutrient.amount,
      unit: nutrient.unitName,
    };
  });

  return nutrientsDictionary;
}

export { FoodFetcher, fetchSRLegacyNutrients };
