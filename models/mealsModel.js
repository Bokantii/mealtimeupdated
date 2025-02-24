class Meal {
  constructor(
    id,
    title,
    imgUrl,
    duration,
    numOfServings,
    ingredientsId,
    ingredientQtyId,
    numberOfInstructions,
    cookware,
    instructions,
    isPro,
    mealCategory,
    description,
    tags,
    nutritionFacts,
    groceryListArr
  ) {
    console.log(`Creating Meal: ${title}`, { nutritionFacts, groceryListArr });
    
    this.id = id;
    this.title = title;
    this.imgUrl = imgUrl;
    this.duration = duration;
    this.numOfServings = numOfServings;
    this.ingredientsId = ingredientsId;
    this.ingredientQtyId = ingredientQtyId;
    this.numberOfInstructions = numberOfInstructions;
    this.cookware = cookware;
    this.instructions = instructions;
    this.isPro = isPro;
    this.mealCategory = mealCategory;
    this.description = description; // Short description for UI display
    this.tags = tags; // Array of tags for filtering
    this.nutritionFacts = nutritionFacts;
    this.groceryListArr = groceryListArr;
  }
}

export default Meal;