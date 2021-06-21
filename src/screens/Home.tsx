import React from "react";
import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import SearchSVG from "../assets/icons/search.svg";
import ShoppingCartSVG from "../assets/icons/shopping-cart.svg";
import HomeSection from "../components/HomeSection";

const Home: React.FC = () => {
  return (
    <View style={styles.screenContainer}>
      <StatusBar barStyle="light-content" />
      <View style={styles.headerContainer}>
        <View style={styles.inputContainer}>
          <SearchSVG width={24} height={24} fill="#969696" />
          <Text style={styles.inputText}>Bạn tìm gì hôm nay?</Text>
        </View>
        <View style={styles.cartContainer}>
          <ShoppingCartSVG width={24} height={24} fill="#fff" />
        </View>
      </View>
      <View style={styles.bodyContainer}>
        <ScrollView>
          <HomeSection />
          <HomeSection />
          <HomeSection />
          <HomeSection />
          <HomeSection />
          <HomeSection />
          <HomeSection />
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: "row",
    paddingTop: 50,
    paddingBottom: 4,
    backgroundColor: "#1e88e5",
  },
  inputContainer: {
    backgroundColor: "#fff",
    flexDirection: "row",
    flex: 1,
    marginLeft: 10,
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 2,
  },
  inputText: {
    color: "#969696",
    fontSize: 14,
    marginLeft: 8,
    fontWeight: "500",
  },
  cartContainer: {
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  bodyContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default Home;
