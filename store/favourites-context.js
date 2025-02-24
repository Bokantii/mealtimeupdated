import { createContext, useState } from "react";

export const FavouriteContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

const FavouriteContextProvider = ({ children }) => {
  const [favoriteMealIds, setFavoriteMealIds] = useState([]);
  const addFavorite = (id) => {
    setFavoriteMealIds((currFavMealIds) => {
      if (!currFavMealIds.includes(id)) {
        console.log(`Adding favorite: ${id}`);
        return [...currFavMealIds, id];
      }
      console.log(`Duplicate ID ignored: ${id}`);
      return currFavMealIds;
    });
  };
  
  const removeFavorite = (id) => {
    setFavoriteMealIds((currFavMealIds) =>
      currFavMealIds.filter((mealId) => mealId !== id) // Remove the ID
    );
  };
  const value = {
    ids: favoriteMealIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };

  return (
    <FavouriteContext.Provider value={value}>
      {children}
    </FavouriteContext.Provider>
  );
};

export default FavouriteContextProvider;
