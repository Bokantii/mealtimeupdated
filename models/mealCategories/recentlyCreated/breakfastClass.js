import Meal from "../../mealsModel";

export const RECENTLY_CREATED_BREAKFAST = [
  new Meal(
    "1",
    "Classic Popcorn",
    "https://media.istockphoto.com/id/2068529080/photo/popcorn.webp?a=1&b=1&s=612x612&w=0&k=20&c=9DP_pDK62cJxJ9XoaBgewFX_u1exI3dSkUQ4NVlo6Yk=",
    5,
    2,
    ["popcorn-kernels", "butter", "salt"],
    ["1/2 cup", "2 tbsp", "1 tsp"],
    3,
    ["stovetop", "pot", "spoon"],
    [
      "Heat the butter in a large pot over medium heat until melted.",
      "Add the popcorn kernels and cover the pot with a lid. Shake the pot occasionally to prevent burning.",
      "Once the popping slows, remove from heat and season with salt. Serve immediately."
    ],
    false,
    "Snacks",
    "Freshly popped corn with a hint of butter.",
    ["Quick", "Gluten-Free", "Comfort Food"],
    {
      calories: 220,
      protein: 3,
      fat: 16,
      carbs: 16,
      fiber: 3,
      sugar: 0
    },
    [
      "Popcorn kernels",
      "Unsalted butter",
      "Salt",
      "Black pepper (Optional)",
      "Grated parmesan (Optional)",
      "Nutritional yeast (Optional)"
    ]
  ),
  new Meal(
    "2",
    "Apple Crumble",
    "https://media.istockphoto.com/id/175227596/photo/close-up-of-apple-crisps-in-a-white-bowl-and-a-single-spoon.webp?a=1&b=1&s=612x612&w=0&k=20&c=-s1ZAAwvezOAOuCiXBr7lTCUnJtVxBSKzxUaQC4Uivk=",
    45,
    6,
    ["apples", "flour", "sugar", "butter", "cinnamon"],
    ["6 large", "1 cup", "3/4 cup", "1/2 cup", "1 tsp"],
    5,
    ["mixing-bowl", "baking-dish", "oven"],
    [
      "Preheat the oven to 375°F (190°C).",
      "Peel and slice apples, then mix with sugar and cinnamon.",
      "Prepare the crumble topping by mixing flour, sugar, and butter until crumbly.",
      "Place the apple mixture in a baking dish and top with the crumble.",
      "Bake for 35-40 minutes or until golden brown."
    ],
    false,
    "Dessert",
    "A warm and comforting dessert made with baked apples and a buttery topping.",
    ["Comfort Food", "Sweet", "Baked"],
    {
      calories: 320,
      protein: 3,
      carbs: 52,
      fat: 12,
      fiber: 4,
      sugar: 32
    },
    [
      "Granny Smith or Honeycrisp apples",
      "All-purpose flour",
      "Granulated sugar",
      "Brown sugar",
      "Unsalted butter",
      "Ground cinnamon",
      "Salt",
      "Vanilla ice cream (Optional)",
      "Caramel sauce (Optional)",
      "Ground nutmeg (Optional)",
      "Rolled oats (Optional)"
    ]
  ),
  new Meal(
    "3",
    "Blueberry Muffins",
    "https://media.istockphoto.com/id/478095157/photo/blueberry-muffins.webp?a=1&b=1&s=612x612&w=0&k=20&c=3M-6ofmD7BlqrZ3qDEV5_NYzGMG54BmMpMkNH8shA28=",
    30,
    12,
    [
      "all-purpose flour",
      "sugar",
      "baking powder",
      "salt",
      "butter",
      "eggs",
      "milk",
      "blueberries"
    ],
    ["2 cups", "1 cup", "2 tsp", "1/2 tsp", "1/2 cup", "2", "1/2 cup", "1 cup"],
    6,
    ["mixing-bowl", "oven", "muffin-tin"],
    [
      "Preheat oven to 375°F (190°C).",
      "Mix dry ingredients in a bowl.",
      "Combine wet ingredients in another bowl.",
      "Fold blueberries into the batter.",
      "Spoon batter into muffin tins.",
      "Bake for 20-25 minutes or until golden."
    ],
    false,
    "Breakfast",
    "Soft and fluffy blueberry muffins perfect for breakfast or a snack.",
    ["Baking", "Sweet", "Quick"],
    {
      calories: 220,
      protein: 4,
      carbs: 32,
      fat: 9,
      fiber: 2,
      sugar: 18
    },
    [
      "All-purpose flour",
      "Granulated sugar",
      "Baking powder",
      "Salt",
      "Unsalted butter",
      "Large eggs",
      "Whole milk",
      "Fresh blueberries",
      "Vanilla extract (Optional)",
      "Paper muffin liners"
    ]
  ),
  new Meal(
    "4",
    "Club Sandwich with Fries",
    "https://media.istockphoto.com/id/534333618/photo/club-sandwiches-with-french-fries-on-side.webp?a=1&b=1&s=612x612&w=0&k=20&c=qAsLOOz6hd0AwtiqjLh8XXOlGqClorxIHu53HWDA3zc=",
    20,
    2,
    ["bread", "chicken", "lettuce", "tomato", "fries"],
    ["4 slices", "200g", "2 leaves", "1", "200g"],
    4,
    ["knife", "pan", "fryer"],
    [
      "Toast the slices of bread in a toaster or pan until golden brown.",
      "Heat a pan over medium heat and cook the chicken until fully cooked through. Slice into strips.",
      "Wash and slice the tomato into thin rounds.",
      "Layer the sandwich by placing lettuce, sliced tomatoes, and chicken between the toasted bread slices.",
      "Secure the sandwich with toothpicks and cut into halves or quarters.",
      "Heat oil in a fryer or deep pan, and fry the potato fries until crispy and golden.",
      "Drain the fries on a paper towel to remove excess oil.",
      "Serve the club sandwich hot with crispy fries on the side."
    ],
    false,
    "Lunch",
    "A classic club sandwich served with crispy fries.",
    ["Comfort Food", "Quick", "Classic"],
    {
      calories: 650,
      protein: 35,
      carbs: 68,
      fat: 28,
      fiber: 4,
      sugar: 3
    },
    [
      "Sandwich bread",
      "Chicken breast",
      "Fresh lettuce",
      "Ripe tomato",
      "Potatoes for fries",
      "Mayonnaise",
      "Vegetable oil",
      "Salt",
      "Black pepper",
      "Bacon (Optional)",
      "Avocado (Optional)",
      "Toothpicks"
    ]
  ),
  new Meal(
    "5",
    "Grilled Lemon Herb Chicken with Vegetables",
    "https://media.istockphoto.com/id/157336239/photo/grilled-chicken-breast.webp?a=1&b=1&s=612x612&w=0&k=20&c=ITrCRJqnmfU2Ks6PtLluBHl2hHt4MxN6OLfLylVs5AA=",
    40,
    4,
    ["chicken-breast", "lemon", "herbs", "vegetables"],
    ["500g", "1", "2 tbsp", "300g"],
    3,
    ["grill-pan", "knife", "cutting-board"],
    [
      "Pat the chicken breasts dry with paper towels.",
      "In a bowl, mix lemon juice, herbs, salt, and pepper to create the marinade.",
      "Coat the chicken with the marinade and let it sit for at least 20 minutes.",
      "Preheat a grill pan over medium heat for 5 minutes.",
      "Place the chicken on the grill and cook for 6-8 minutes per side.",
      "While the chicken cooks, wash and chop the vegetables into bite-sized pieces.",
      "Lightly coat the vegetables with olive oil and season with salt and pepper.",
      "Grill the vegetables for 3-5 minutes until slightly charred but still crisp.",
      "Remove the chicken from the grill and let it rest for 5 minutes before slicing.",
      "Serve hot with the grilled vegetables on the side."
    ],
    false,
    "Dinner",
    "Juicy chicken with fresh herbs and veggies.",
    ["Healthy", "Grilled", "Low-carb"],
    {
      calories: 320,
      protein: 38,
      carbs: 12,
      fat: 14,
      fiber: 4,
      sugar: 3
    },
    [
      "Chicken breast",
      "Fresh lemon",
      "Mixed herbs (rosemary, thyme, oregano)",
      "Mixed vegetables",
      "Olive oil",
      "Salt",
      "Black pepper",
      "Garlic powder (Optional)",
      "White wine (Optional)",
      "Fresh parsley (Optional)"
    ]
  ),
  new Meal(
    "6",
    "Panna Cotta",
    "https://media.istockphoto.com/id/1783548195/photo/macro-spoon-with-piece-of-panna-cotta-with-natural-vanilla-pod-mango-syrup-and-mint-selective.webp?a=1&b=1&s=612x612&w=0&k=20&c=maOq-UDeNWT2D8yET7DRx9q5r7knLHOD8lucOu3sGUQ=",
    20,
    4,
    ["heavy-cream", "sugar", "vanilla-extract", "gelatin", "fruit-topping"],
    ["2 cups", "1/3 cup", "1 tsp", "1 packet", "1/2 cup"],
    4,
    ["saucepan", "mixing-bowl", "refrigerator"],
    [
      "Heat heavy cream and sugar in a saucepan until sugar dissolves.",
      "Add vanilla extract and gelatin dissolved in water.",
      "Pour mixture into molds and refrigerate for at least 4 hours.",
      "Serve with your favorite fruit topping."
    ],
    true,
    "Dessert",
    "A creamy Italian dessert served with a fruit topping.",
    ["Elegant", "Creamy", "Chilled"],
    {
      calories: 290,
      protein: 3,
      carbs: 22,
      fat: 22,
      fiber: 0,
      sugar: 20
    },
    [
      "Heavy cream",
      "Granulated sugar",
      "Pure vanilla extract",
      "Unflavored gelatin powder",
      "Fresh berries",
      "Cold water",
      "Vanilla bean (Optional)",
      "Fresh mint leaves (Optional)",
      "Berry coulis (Optional)",
      "Chocolate shavings (Optional)",
      "Ramekins or dessert molds"
    ]
  ),
  new Meal(
    "7",
    "Veggie Sticks with Hummus",
    "https://media.istockphoto.com/id/1400924594/photo/plain-hummus-and-veggie-tray-with-pita.webp?a=1&b=1&s=612x612&w=0&k=20&c=XYte_HlF8Ik5H5JgC1Z9UT1fMngLeSDHfjucq0t5OO4=",
    10,
    2,
    ["carrots", "cucumbers", "hummus"],
    ["1 cup", "1 cup", "1/2 cup"],
    3,
    ["knife", "bowl"],
    [
      "Wash and peel the carrots and cucumbers. Slice them into sticks.",
      "Arrange the veggie sticks neatly on a plate.",
      "Serve with hummus in a small bowl for dipping."
    ],
    false,
    "Snacks",
    "Crunchy veggie sticks served with creamy hummus.",
    ["Healthy", "Vegan", "Quick"],
    {
      calories: 180,
      protein: 6,
      carbs: 20,
      fat: 10,
      fiber: 6,
      sugar: 4
    },
    [
      "Fresh carrots",
      "Cucumbers",
      "Store-bought or homemade hummus",
      "Bell peppers (Optional)",
      "Celery (Optional)",
      "Cherry tomatoes (Optional)",
      "Pita bread (Optional)"
    ]
  )
];