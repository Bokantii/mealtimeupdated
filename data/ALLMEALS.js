import { MOST_POPULAR_BREAKFAST } from "../models/mealCategories/mostPopular/breakfastClass";
import { MOST_POPULAR_LUNCH } from "../models/mealCategories/mostPopular/lunchClass";
import { MOST_POPULAR_DINNER } from "../models/mealCategories/mostPopular/dinnerClass";
import { MOST_POPULAR_DESSERTS } from "../models/mealCategories/mostPopular/dessertClass";
import { MOST_POPULAR_SNACKS } from "../models/mealCategories/mostPopular/snackClass";
import { RECENTLY_CREATED_BREAKFAST } from "../models/mealCategories/recentlyCreated/breakfastClass";
import { RECENTLY_CREATED_LUNCH } from "../models/mealCategories/recentlyCreated/lunchClass";
import { RECENTLY_CREATED_SNACKS } from "../models/mealCategories/recentlyCreated/snackClass";
import { RECENTLY_CREATED_DESSERTS } from "../models/mealCategories/recentlyCreated/dessertClass";
import { RECENTLY_CREATED_DINNER } from "../models/mealCategories/recentlyCreated/dinnerClass";
import { RECOMMENDED_PLAN_BREAKFAST } from "../models/mealCategories/recommendedPlan/breakfastClass";
import { RECOMMENDED_DINNER } from "../models/mealCategories/recommendedPlan/dinnerClass";
import { RECOMMENDED_DESSERTS } from "../models/mealCategories/recommendedPlan/dessertClass";
import { RECOMMENDED_SNACKS } from "../models/mealCategories/recommendedPlan/snackClass";
import { LUNCH_OPTIONS } from "../models/mealCategories/recommendedPlan/lunchClass";


export const ALL_MEALS = [
  ...MOST_POPULAR_BREAKFAST.map((meal) => ({ ...meal, id: `breakfast-${meal.id}` })),
  ...MOST_POPULAR_DESSERTS.map((meal) => ({ ...meal, id: `dessert-${meal.id}` })),
  ...MOST_POPULAR_DINNER.map((meal) => ({ ...meal, id: `dinner-${meal.id}` })),
  ...MOST_POPULAR_LUNCH.map((meal) => ({ ...meal, id: `lunch-${meal.id}` })),
  ...MOST_POPULAR_SNACKS.map((meal) => ({ ...meal, id: `snack-${meal.id}` })),
  ...RECENTLY_CREATED_BREAKFAST.map((meal) => ({ ...meal, id: `rc-breakfast-${meal.id}` })),
  ...RECENTLY_CREATED_DESSERTS.map((meal) => ({ ...meal, id: `rc-dessert-${meal.id}` })),
  ...RECENTLY_CREATED_DINNER.map((meal) => ({ ...meal, id: `rc-dinner-${meal.id}` })),
  ...RECENTLY_CREATED_LUNCH.map((meal) => ({ ...meal, id: `rc-lunch-${meal.id}` })),
  ...RECENTLY_CREATED_SNACKS.map((meal) => ({ ...meal, id: `rc-snack-${meal.id}` })),
  ...RECOMMENDED_PLAN_BREAKFAST.map((meal) => ({ ...meal, id: `rec-breakfast-${meal.id}` })),
  ...RECOMMENDED_DESSERTS.map((meal) => ({ ...meal, id: `rec-dessert-${meal.id}` })),
  ...RECOMMENDED_DINNER.map((meal) => ({ ...meal, id: `rec-dinner-${meal.id}` })),
  ...LUNCH_OPTIONS.map((meal) => ({ ...meal, id: `lunch-options-${meal.id}` })),
  ...RECOMMENDED_SNACKS.map((meal) => ({ ...meal, id: `rec-snack-${meal.id}` })),
];
