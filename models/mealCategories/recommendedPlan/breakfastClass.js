import Meal from "../../mealsModel";

export const RECOMMENDED_PLAN_BREAKFAST = [
  new Meal(
    "1",
    "French Toast with Berries",
    "https://media.istockphoto.com/id/1341998526/photo/french-toast-with-berries-and-honey.webp?a=1&b=1&s=612x612&w=0&k=20&c=fyoC3eMOWmolMRzU5ovgjWoAKJk9TEkLbeFjabVgxRs=",
    20,
    2,
    ["bread", "eggs", "milk", "vanilla-extract", "mixed-berries", "butter", "maple-syrup"],
    ["4 slices", "2", "1/2 cup", "1 tsp", "1 cup", "As needed", "Optional"],
    5,
    ["frying-pan", "mixing-bowl"],
    [
      "Whisk eggs, milk, and vanilla extract in a mixing bowl until smooth.",
      "Dip each slice of bread into the egg mixture, ensuring both sides are well-coated.",
      "Heat a frying pan over medium heat and add butter.",
      "Cook each slice of bread until golden brown on both sides.",
      "Serve warm, topped with mixed berries and a drizzle of maple syrup if desired."
    ],
    false,
    "Breakfast",
    "Delicious French toast topped with berries.",
    ["Sweet", "Quick", "Comfort Food"],
    {
      calories: 420,
      protein: 12,
      carbs: 60,
      fat: 14,
      fiber: 5,
      sugar: 25
    },
    [
      "Thick-sliced bread",
      "Large eggs",
      "Whole milk",
      "Pure vanilla extract",
      "Mixed berries",
      "Unsalted butter",
      "Maple syrup (Optional)",
      "Ground cinnamon (Optional)",
      "Powdered sugar (Optional)",
      "Whipped cream (Optional)",
      "Fresh mint (Optional)"
    ]
  ),
  new Meal(
    "2",
    "Chia Pudding",
    "https://media.istockphoto.com/id/928780566/photo/chia-pudding-parfait-with-banana.webp?a=1&b=1&s=612x612&w=0&k=20&c=RCjR8XtUPhBJ9fbgRrajDiWqAhe6FNq5rpt9tYY-Z3E=",
    10,
    1,
    ["chia-seeds", "milk", "honey", "vanilla-extract", "toppings"],
    ["1/4 cup", "1 cup", "1 tbsp", "1/2 tsp", "As desired"],
    5,
    ["jar", "spoon"],
    [
      "Combine chia seeds, milk, honey, and vanilla extract in a jar.",
      "Stir thoroughly to prevent clumping.",
      "Let the mixture sit for 5 minutes, then stir again.",
      "Refrigerate for at least 2 hours or overnight until thickened.",
      "Top with your favorite fruits, nuts, or granola before serving."
    ],
    true,
    "Breakfast",
    "A healthy and nutritious chia pudding.",
    ["Healthy", "Quick", "Make-Ahead"],
    {
      calories: 280,
      protein: 10,
      carbs: 38,
      fat: 14,
      fiber: 11,
      sugar: 12
    },
    [
      "Chia seeds",
      "Almond milk or regular milk",
      "Honey",
      "Pure vanilla extract",
      "Fresh berries (Optional)",
      "Sliced banana (Optional)",
      "Granola (Optional)",
      "Chopped nuts (Optional)",
      "Coconut flakes (Optional)",
      "Mason jar for storage"
    ]
  ),
  new Meal(
    "3",
    "Breakfast Quesadilla",
    "https://media.istockphoto.com/id/1172292791/photo/cheesy-breakfast-quesadilla-with-sausage-scrambled-eggs-and-peppers.webp?a=1&b=1&s=612x612&w=0&k=20&c=wO-I-kXp4EJu3Kja2HzlMbU2F9ZCY9WU3hC0_tjG2ig=",
    15,
    2,
    ["tortillas", "eggs", "cheese", "sausage", "bell-peppers", "butter"],
    ["2", "2", "1/4 cup", "1/4 cup", "1/4 cup", "1 tbsp"],
    5,
    ["frying-pan", "spatula"],
    [
      "Scramble the eggs in a pan and set aside.",
      "Heat a tortilla in a frying pan with butter over medium heat.",
      "On one half of the tortilla, layer scrambled eggs, cheese, sausage, and diced bell peppers.",
      "Fold the tortilla in half and cook until the cheese melts and the tortilla is golden brown.",
      "Cut into wedges and serve warm."
    ],
    false,
    "Breakfast",
    "A cheesy and protein-packed breakfast quesadilla.",
    ["Savory", "Quick", "Comfort Food"],
    {
      calories: 480,
      protein: 28,
      carbs: 42,
      fat: 24,
      fiber: 4,
      sugar: 5
    },
    [
      "Large flour tortillas",
      "Large eggs",
      "Shredded cheddar cheese",
      "Breakfast sausage",
      "Bell peppers",
      "Butter",
      "Salt",
      "Black pepper",
      "Hot sauce (Optional)",
      "Avocado (Optional)",
      "Sour cream (Optional)",
      "Salsa (Optional)"
    ]
  ),
  new Meal(
    "4",
    "Mushroom and Spinach Frittata",
    "https://media.istockphoto.com/id/1998889794/photo/brunch-egg-frittata-with-spinach-roasted-red-peppers-mushrooms-in-cast-iron-horizontal-top.webp?a=1&b=1&s=612x612&w=0&k=20&c=L98as6hYUqqgD-Iv-8OZ5HAcr3VTS2c9uqh9UuRYwMA=",
    30,
    4,
    ["eggs", "milk", "mushrooms", "spinach", "cheese", "salt", "pepper", "olive-oil"],
    ["6", "1/2 cup", "1 cup", "1 cup", "1/2 cup", "To taste", "To taste", "1 tbsp"],
    7,
    ["oven-safe-skillet", "oven"],
    [
      "Preheat oven to 375°F (190°C).",
      "Whisk eggs, milk, salt, and pepper in a bowl until combined.",
      "Heat olive oil in an oven-safe skillet and sauté mushrooms until softened.",
      "Add spinach and cook until wilted.",
      "Pour the egg mixture over the vegetables and sprinkle cheese on top.",
      "Transfer the skillet to the oven and bake for 20-25 minutes or until set.",
      "Slice and serve warm."
    ],
    false,
    "Breakfast",
    "A fluffy and savory frittata loaded with veggies.",
    ["Savory", "Healthy", "Vegetarian"],
    {
      calories: 220,
      protein: 18,
      carbs: 6,
      fat: 14,
      fiber: 2,
      sugar: 3
    },
    [
      "Large eggs",
      "Whole milk",
      "Button mushrooms",
      "Fresh spinach",
      "Shredded cheese",
      "Salt",
      "Black pepper",
      "Olive oil",
      "Fresh herbs (Optional)",
      "Cherry tomatoes (Optional)",
      "Onion (Optional)",
      "Greek yogurt for serving (Optional)"
    ]
  ),
  new Meal(
    "5",
    "Peanut Butter and Banana Toast",
    "https://media.istockphoto.com/id/1439830482/photo/healthy-open-sandwich-with-peanut-butter.webp?a=1&b=1&s=612x612&w=0&k=20&c=UF3Mueb4a2fq0H5teIprBx28oS3XXrAOmc0ci0h7NC4=",
    5,
    1,
    ["bread", "peanut-butter", "banana", "honey"],
    ["2 slices", "2 tbsp", "1", "Optional"],
    4,
    ["toaster", "knife"],
    [
      "Toast the bread slices until golden.",
      "Spread peanut butter evenly over each slice.",
      "Top with sliced bananas and drizzle with honey if desired.",
      "Serve immediately."
    ],
    false,
    "Breakfast",
    "A quick and filling breakfast option.",
    ["Quick", "Sweet", "Healthy"],
    {
      calories: 340,
      protein: 14,
      carbs: 46,
      fat: 16,
      fiber: 6,
      sugar: 19
    },
    [
      "Whole grain bread",
      "Natural peanut butter",
      "Ripe banana",
      "Honey (Optional)",
      "Cinnamon (Optional)",
      "Chia seeds (Optional)",
      "Hemp seeds (Optional)",
      "Coconut flakes (Optional)"
    ]
  )
];