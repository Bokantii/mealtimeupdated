import Meal from "../../mealsModel";

export const RECENTLY_CREATED_DESSERTS = [
  new Meal(
    "1",
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
    "2",
    "Strawberry Shortcake",
    "https://media.istockphoto.com/id/1307762217/photo/japanese-strawberry-shortcake.webp?a=1&b=1&s=612x612&w=0&k=20&c=YbLr_-BiVDfs5udAmHMhJlkrHIrjDIAN4fAyXdi5S0s=",
    30,
    4,
    ["strawberries", "sugar", "flour", "butter", "whipped-cream"],
    ["1 lb", "1/2 cup", "2 cups", "1/4 cup", "1 cup"],
    5,
    ["mixing-bowl", "baking-sheet", "oven"],
    [
      "Preheat the oven to 350°F (175°C).",
      "Prepare biscuits using flour, sugar, and butter.",
      "Bake biscuits for 15 minutes or until golden brown.",
      "Slice strawberries and mix with sugar to macerate.",
      "Assemble by layering biscuits, strawberries, and whipped cream."
    ],
    false,
    "Dessert",
    "Fluffy biscuits topped with fresh strawberries and whipped cream.",
    ["Fruit", "Sweet", "Layered"],
    {
      calories: 380,
      protein: 4,
      carbs: 48,
      fat: 18,
      fiber: 3,
      sugar: 28
    },
    [
      "Fresh strawberries",
      "All-purpose flour",
      "Granulated sugar",
      "Unsalted butter",
      "Heavy cream",
      "Baking powder",
      "Salt",
      "Vanilla extract",
      "Powdered sugar (Optional)",
      "Fresh mint leaves (Optional)",
      "Mixed berries (Optional)",
      "Orange zest (Optional)"
    ]
  ),
  new Meal(
    "3",
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
  )
];