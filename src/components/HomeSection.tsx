import React from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import {
  ITEM_IMAGE_1,
  ITEM_IMAGE_2,
  ITEM_IMAGE_3,
  ITEM_IMAGE_4,
  SECTION_BANNER,
} from "../constants/ImageList";
import { ProductItemProps } from "../types/ProductItemProps";

const { width } = Dimensions.get("window");

const ProductItem: React.FC<ProductItemProps> = ({ image, name, price }) => (
  <View style={styles.itemContainer}>
    <Image source={image} style={styles.itemImage} />
    <Text style={styles.itemName} numberOfLines={2}>
      {name}
    </Text>
    <Text style={styles.itemPrice}>{price}</Text>
  </View>
);

const HomeSection: React.FC = () => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>Điện thoại - Máy tính bảng</Text>
      <Image source={SECTION_BANNER} style={styles.sectionImage} />
      <ScrollView horizontal={true}>
        <View style={styles.filterContainer}>
          {[
            "Tất cả",
            "Điện thoại SmartPhone",
            "Máy tính bảng",
            "Điện thoại",
          ].map((e, index) => (
            <View
              key={index.toString()}
              style={
                index === 0
                  ? styles.filterActiveButtonContainer
                  : styles.filterInactiveButtonContainer
              }
            >
              <Text
                style={
                  index === 0
                    ? styles.filterActiveText
                    : styles.filterInactiveText
                }
              >
                {e}
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>
      <ScrollView horizontal={true}>
        <View style={styles.listItemContainer}>
          {[
            { image1: ITEM_IMAGE_1, image2: ITEM_IMAGE_2 },
            { image1: ITEM_IMAGE_2, image2: ITEM_IMAGE_3 },
            { image1: ITEM_IMAGE_4, image2: ITEM_IMAGE_1 },
            { image1: ITEM_IMAGE_1, image2: ITEM_IMAGE_2 },
          ].map((item, index) => (
            <View key={index.toString()}>
              <ProductItem
                name="Điện thoại Vsmart Bee (Smart Bee)"
                image={item.image1}
                price="699.000đ"
              />
              <ProductItem
                name="Điện thoại Vsmart Joy 2 Vsmart Joy 2"
                image={item.image2}
                price="699.000đ"
              />
            </View>
          ))}
        </View>
      </ScrollView>
      <View style={styles.seeMoreContainer}>
        <Text style={styles.seeMoreText}>XEM THÊM 636 SẢN PHẨM {">"}</Text>
      </View>
    </View>
  );
};

export default HomeSection;

const styles = StyleSheet.create({
  sectionContainer: {
    backgroundColor: "#fff",
    paddingHorizontal: 12,
  },
  sectionTitle: {
    fontWeight: "700",
    fontSize: 16,
    color: "#2f2f2f",
    marginVertical: 12,
  },
  sectionImage: {
    width: width - 24,
    height: 130,
    borderRadius: 4,
  },
  filterContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  filterActiveButtonContainer: {
    backgroundColor: "#242424",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
    marginRight: 10,
  },
  filterInactiveButtonContainer: {
    backgroundColor: "#fff",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
    borderColor: "#5a5a5a",
    borderWidth: 1,
    marginRight: 10,
  },
  filterActiveText: {
    color: "#fff",
  },
  filterInactiveText: {
    color: "#5a5a5a",
  },
  listItemContainer: {
    flexDirection: "row",
  },
  itemContainer: {
    width: 100,
    marginRight: 12,
    marginTop: 10,
  },
  itemImage: {
    width: 100,
    height: 120,
  },
  itemName: {
    fontSize: 14,
    color: "#484848",
    marginVertical: 4,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: "500",
    color: "#2a2a2a",
  },
  seeMoreContainer: {
    marginTop: 10,
    padding: 12,
    borderTopWidth: 0.6,
    borderTopColor: "#ededed",
    alignItems: "center",
  },
  seeMoreText: {
    color: "#0e45b4",
  },
});
