import React from "react";
import { StyleSheet, Text, View } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { HEADER_ICON_SIZE } from "../constants/HeaderConstants";
import { HeaderProps } from "../types/HeaderProps";

const Header: React.FC<HeaderProps> = ({ title }) => (
  <View style={styles.headerContainer}>
    {/*  */}
    <View style={styles.cartContainer}>
      <View style={styles.cartIcon} />
    </View>
    {/*  */}
    <Text style={styles.headerText}>{title}</Text>
    {/*  */}
    <View style={styles.cartContainer}>
      <FontAwesome name="shopping-cart" size={HEADER_ICON_SIZE} color="#fff" />
    </View>
  </View>
);

export default Header;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: "row",
    paddingTop: 50,
    backgroundColor: "#1e88e5",
    justifyContent: "space-between",
    paddingBottom: 12,
  },
  cartContainer: {
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  cartIcon: {
    width: HEADER_ICON_SIZE,
  },
  headerText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "500",
  },
});
