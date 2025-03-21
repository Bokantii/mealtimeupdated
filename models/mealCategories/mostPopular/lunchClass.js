import Meal from "../../mealsModel";

export const MOST_POPULAR_LUNCH = [
  new Meal(
    "1",
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
      "Heat a pan over medium heat and cook the chicken until fully cooked through (about 8 minutes). Slice into strips.",
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
      sugar: 3,
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
      "Toothpicks",
    ]
  ),
  new Meal(
    "2",
    "Caesar Salad",
    "https://media.istockphoto.com/id/991861846/photo/homemade-cesar-salad-with-chicken-lettuce-and-parmesan.webp?a=1&b=1&s=612x612&w=0&k=20&c=lGzBXd30zY4RMPpD9JGG8XL8ii_2e2g2xzJqC71uzoY=",
    15,
    2,
    ["lettuce", "parmesan", "croutons", "caesar-dressing"],
    ["2 cups", "30g", "1/2 cup", "3 tbsp"],
    3,
    ["bowl", "knife"],
    [
      "Wash the lettuce thoroughly and chop into bite-sized pieces (about 5 minutes).",
      "Place the lettuce in a large bowl.",
      "Drizzle Caesar dressing over the lettuce and toss gently to coat evenly.",
      "Add the croutons and freshly grated Parmesan cheese on top.",
      "Toss everything together just before serving to maintain crunchiness.",
      "Serve immediately as a fresh and crisp salad."
    ],
    false,
    "Lunch",
    "Crisp lettuce with creamy Caesar dressing and croutons.",
    ["Salad", "Quick", "Healthy"],
    {
      calories: 280,
      protein: 10,
      carbs: 14,
      fat: 22,
      fiber: 3,
      sugar: 2,
    },
    [
      "Romaine lettuce",
      "Parmesan cheese",
      "Seasoned croutons",
      "Caesar dressing",
      "Black pepper",
      "Optional: Grilled chicken",
      "Optional: Anchovies",
    ]
  ),
  new Meal(
    "3",
    "Turkey Avocado Wrap",
    "https://media.istockphoto.com/id/1347706240/photo/homemade-healthy-turkey-spinach-wraps.webp?a=1&b=1&s=612x612&w=0&k=20&c=9QC9ypnkvKUJJk3NvYI5d0qLRH0fEfeWZ_ukYENJue4=",
    10,
    1,
    ["tortilla", "turkey", "avocado", "lettuce"],
    ["1", "100g", "1/2", "1 leaf"],
    3,
    ["knife", "board"],
    [
      "Lay a tortilla flat on a clean surface.",
      "Mash the avocado with a fork and spread evenly over the tortilla.",
      "Layer turkey slices on top of the avocado spread.",
      "Wash and pat dry the lettuce, then place it over the turkey slices.",
      "Tightly roll the tortilla into a wrap, ensuring it stays firm (about 5 minutes total preparation time).",
      "Slice in half diagonally and serve fresh."
    ],
    false,
    "Lunch",
    "Healthy wrap with turkey and creamy avocado.",
    ["Quick", "Healthy", "Low-carb"],
    {
      calories: 420,
      protein: 28,
      carbs: 35,
      fat: 22,
      fiber: 8,
      sugar: 2,
    },
    [
      "Large flour tortilla",
      "Sliced turkey breast",
      "Ripe avocado",
      "Fresh lettuce",
      "Salt",
      "Black pepper",
      "Optional: Tomato",
      "Optional: Red onion",
    ]
  ),
  new Meal(
    "4",
    "Grilled Chicken Salad",
    "https://media.istockphoto.com/id/1576364641/photo/grilled-chicken-cobb-salad.webp?a=1&b=1&s=612x612&w=0&k=20&c=vjyZNW2ni2-ANxMBywHDUcXH6hVWIZb2Natnu0O8sIc=",
    25,
    2,
    ["chicken", "lettuce", "tomatoes", "cucumber", "vinaigrette"],
    ["200g", "2 cups", "1", "1/2", "3 tbsp"],
    3,
    ["grill-pan", "knife", "bowl"],
    [
      "Season the chicken with salt, pepper, and a bit of olive oil.",
      "Heat a grill pan over medium heat and grill the chicken for 5-7 minutes per side until fully cooked.",
      "Remove from heat and let rest before slicing into strips.",
      "Wash and chop the lettuce, tomatoes, and cucumber into bite-sized pieces (about 5 minutes).",
      "Combine the chopped vegetables in a large bowl.",
      "Top with the grilled chicken slices.",
      "Drizzle vinaigrette over the salad and toss gently before serving."
    ],
    false,
    "Lunch",
    "Fresh salad topped with grilled chicken.",
    ["Healthy", "Protein", "Gluten-Free"],
    {
      calories: 320,
      protein: 35,
      carbs: 12,
      fat: 18,
      fiber: 4,
      sugar: 5,
    },
    [
      "Chicken breast",
      "Mixed salad greens",
      "Fresh tomatoes",
      "Cucumber",
      "Vinaigrette dressing",
      "Olive oil",
      "Salt",
      "Black pepper",
      "Optional: Red onion",
      "Optional: Bell peppers",
    ]
  ),
  new Meal(
    "5",
    "BLT Sandwich",
    "https://media.istockphoto.com/id/1263695727/photo/toasted-blt-sandwich.webp?a=1&b=1&s=612x612&w=0&k=20&c=rW97kJQLzUCBqgvYh6XmP-RCVY5JAIRLVEgiiK4Q6fY=",
    10,
    1,
    ["bread", "bacon", "lettuce", "tomato", "mayonnaise"],
    ["2 slices", "3 strips", "1 leaf", "1 slice", "1 tbsp"],
    3,
    ["pan", "knife"],
    [
      "Heat a pan over medium heat and cook the bacon strips until crispy (about 5-6 minutes).",
      "Remove the bacon and place it on a paper towel to drain excess grease.",
      "Toast the bread slices lightly until golden brown.",
      "Spread mayonnaise evenly over one side of each slice of bread.",
      "Layer crispy bacon, lettuce, and sliced tomato on one slice of bread.",
      "Place the second slice of bread on top to close the sandwich.",
      "Slice in half and serve immediately."
    ],
    false,
    "Lunch",
    "A classic BLT sandwich with crispy bacon.",
    ["Quick", "Comfort Food", "Classic"],
    {
      calories: 450,
      protein: 18,
      carbs: 35,
      fat: 28,
      fiber: 2,
      sugar: 4,
    },
    [
      "Sandwich bread",
      "Bacon strips",
      "Fresh lettuce",
      "Ripe tomato",
      "Mayonnaise",
      "Salt",
      "Black pepper",
      "Paper towels",
    ]
  ),
  new Meal(
    "6",
    "Caprese Panini",
    "https://media.istockphoto.com/id/930271208/photo/healthy-grilled-basil-mozzarella-caprese-panini.webp?a=1&b=1&s=612x612&w=0&k=20&c=VmKDUc-VfoSghQcIiuG5CT2GIsEcwqKvg5SFMPHv4zQ=",
    15,
    2,
    ["bread", "mozzarella", "tomato", "basil", "olive-oil"],
    ["2 slices", "100g", "1", "2 leaves", "1 tbsp"],
    3,
    ["panini-press", "knife"],
    [
      "Slice the mozzarella and tomato into even slices.",
      "Layer mozzarella, tomato, and fresh basil leaves between the bread slices.",
      "Brush the outer sides of the bread with olive oil.",
      "Preheat the panini press or grill to medium heat.",
      "Place the sandwich in the press and grill until the bread is crispy and the mozzarella is melted (about 5-7 minutes).",
      "Slice in half and serve warm."
    ],
    true,
    "Lunch",
    "Melty mozzarella and fresh basil in a crispy panini.",
    ["Italian", "Vegetarian", "Quick"],
    {
      calories: 480,
      protein: 22,
      carbs: 42,
      fat: 26,
      fiber: 3,
      sugar: 4
    },
    [
      "Italian bread",
      "Fresh mozzarella",
      "Ripe tomatoes",
      "Fresh basil leaves",
      "Extra virgin olive oil",
      "Salt",
      "Black pepper",
      "Optional: Balsamic glaze",
    ]
  )
];