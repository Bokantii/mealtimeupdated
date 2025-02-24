import { FlatList, View, Text, Pressable, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const FlatListView = ({
  title,
  data,
  renderItem,
  keyExtractor,
  horizontal,
  screenName,
  navScreen,
  searchQuery,
}) => {
  const navigation = useNavigation();
  function seeAll(navScreenName) {
    if (screenName) {
      navigation.navigate(navScreenName, {
        screen: screenName,
      });
    }
  }
  const filteredMeal =
    searchQuery.trim().length > 0
      ? data.filter((meal) =>
          meal.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : data;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        {screenName && navScreen && (
          <Pressable onPress={() => seeAll(navScreen)}>
            <Text style={styles.seeAll}>See All</Text>
          </Pressable>
        )}
      </View>
      {/* FlatList Section */}
      {filteredMeal.length > 0 ? (
        <FlatList
          data={filteredMeal}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          horizontal={horizontal}
        />
      ) : (
        <Text style={{ textAlign: "center", color: "gray", marginTop: 10 }}>
          No meals found.
        </Text>
      )}
    </View>
  );
};

export default FlatListView;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  seeAll: {
    fontSize: 14,
    color: "#f58700",
    textDecorationLine: "underline",
  },
  list: {
    paddingHorizontal: 10,
  },
  emptyMessage: {
    textAlign: "center",
    color: "gray",
    marginTop: 10,
    fontSize: 16,
  },
});
