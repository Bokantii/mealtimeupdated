import { MOST_POPULAR_BREAKFAST } from "../../../models/mealCategories/mostPopular/breakfastClass";
import { MOST_POPULAR_SNACKS } from "../../../models/mealCategories/mostPopular/snackClass";
import { MOST_POPULAR_DESSERTS } from "../../../models/mealCategories/mostPopular/dessertClass";
import { MOST_POPULAR_DINNER } from "../../../models/mealCategories/mostPopular/dinnerClass";
import { MOST_POPULAR_LUNCH } from "../../../models/mealCategories/mostPopular/lunchClass";
import { RECENTLY_CREATED_BREAKFAST } from "../../../models/mealCategories/recentlyCreated/breakfastClass";
import { RECENTLY_CREATED_LUNCH } from "../../../models/mealCategories/recentlyCreated/lunchClass";
import { RECENTLY_CREATED_DINNER } from "../../../models/mealCategories/recentlyCreated/dinnerClass";
import { RECENTLY_CREATED_DESSERT } from "../../../models/mealCategories/recentlyCreated/dessertClass";
import { RECENTLY_CREATED_SNACKS } from "../../../models/mealCategories/recentlyCreated/snackClass";
import { RECOMMENDED_PLAN_BREAKFAST } from "../../../models/mealCategories/recommendedPlan/breakfastClass";
import { RECOMMENDED_PLAN_LUNCH } from "../../../models/mealCategories/recommendedPlan/lunchClass";
import { RECOMMENDED_PLAN_DINNER } from "../../../models/mealCategories/recommendedPlan/dinnerClass";
import { RECOMMENDED_PLAN_DESSERT } from "../../../models/mealCategories/recommendedPlan/dessertClass";
import { RECOMMENDED_PLAN_SNACKS } from "../../../models/mealCategories/recommendedPlan/snackClass";

export const mealContainers = [
  {
    id: "breakfast-1",
    title: "Breakfast",
    data: MOST_POPULAR_BREAKFAST.slice(0, 1),
  },
  {
    id: "breakfast-2",
    title: "Lunch",
    data: MOST_POPULAR_BREAKFAST.slice(1, 2),
  },
  {
    id: "breakfast-3",
    title: "Dinner",
    data: MOST_POPULAR_BREAKFAST.slice(2, 3),
  },
];
