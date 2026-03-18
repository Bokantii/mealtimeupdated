import { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const FavouriteContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

const FavouriteContextProvider = ({ children }) => {
  const [favoriteMealIds, setFavoriteMealIds] = useState([]);

  // Load persisted favorites on mount
  useEffect(() => {
    const loadFavorites = async () => {
      try {
        const stored = await AsyncStorage.getItem("favoriteMealIds");
        if (stored) setFavoriteMealIds(JSON.parse(stored));
      } catch (e) {
        console.error("Failed to load favorites", e);
      }
    };
    loadFavorites();
  }, []);

  // Persist whenever favorites change
  useEffect(() => {
    AsyncStorage.setItem("favoriteMealIds", JSON.stringify(favoriteMealIds));
  }, [favoriteMealIds]);

  const addFavorite = (id) => {
    setFavoriteMealIds((curr) => {
      console.log("addFavorite called with:", id);
    console.log("Current IDs before add:", curr);
    const newIds = curr.includes(id) ? curr : [...curr, id];
    console.log("New IDs after add:", newIds);
    return newIds;
  });
  };
  const removeFavorite = (id) => {
    setFavoriteMealIds((curr) => {
      console.log("removeFavorite called with:", id);
      console.log("Current IDs before remove:", curr);
      const newIds = curr.filter((mealId) => mealId !== id);
      console.log("New IDs after remove:", newIds);
      return newIds;
    });
  };

  return (
    <FavouriteContext.Provider value={{ ids: favoriteMealIds, addFavorite, removeFavorite }}>
      {children}
    </FavouriteContext.Provider>
  );
};

export default FavouriteContextProvider;