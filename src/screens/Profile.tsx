import React from "react";
import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import AngleSVG from "../assets/icons/angle.svg";
import BookmarkSVG from "../assets/icons/bookmark.svg";
import EyeSVG from "../assets/icons/eye.svg";
import HeartSVG from "../assets/icons/heart.svg";
import HelpSVG from "../assets/icons/help.svg";
import ListSVG from "../assets/icons/list.svg";
import PersonSVG from "../assets/icons/person.svg";
import ShoppingCartSVG from "../assets/icons/shopping-cart.svg";
import StarSVG from "../assets/icons/star.svg";
import Header from "../components/Header";
import { ProfileItemProps } from "../types/ProfileItemProps";

const ProfileItem: React.FC<ProfileItemProps> = ({ icon, name }) => {
  const renderIcon = (icon: string) => {
    switch (icon) {
      case "list":
        return <ListSVG width={26} height={26} fill="#1e1e1e" />;
      case "shopping-cart":
        return <ShoppingCartSVG width={26} height={26} fill="#1e1e1e" />;
      case "eye":
        return <EyeSVG width={26} height={26} fill="#1e1e1e" />;
      case "heart":
        return <HeartSVG width={26} height={26} fill="#1e1e1e" />;
      case "bookmark":
        return <BookmarkSVG width={26} height={26} fill="#1e1e1e" />;
      case "star":
        return <StarSVG width={26} height={26} fill="#1e1e1e" />;
      case "help":
        return <HelpSVG width={26} height={26} fill="#1e1e1e" />;
    }
  };

  return (
    <View style={styles.itemContainer}>
      {renderIcon(icon)}
      <Text style={[styles.itemText, { marginLeft: icon ? 20 : 0 }]}>
        {name}
      </Text>
      <AngleSVG width={26} height={26} fill="#1e88e5" />
    </View>
  );
};

const Profile: React.FC = () => {
  return (
    <ScrollView style={styles.screenContainer}>
      <StatusBar barStyle="light-content" />
      <Header title="Cá nhân" />
      <View style={styles.bodyContainer}>
        <View style={styles.userContainer}>
          <View style={styles.avatarContainer}>
            <PersonSVG width={26} height={26} fill="#fff" />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.welcomeText}>Chào mừng bạn đến với Tiki</Text>
            <Text style={styles.authText}>Đăng nhập/Đăng ký</Text>
          </View>
          <AngleSVG width={26} height={26} fill="#1e88e5" />
        </View>
        <View style={styles.divider}></View>
        <ProfileItem icon="list" name="Quản lý đơn hàng" />
        <ProfileItem icon="shopping-cart" name="Sản phẩm đã mua" />
        <ProfileItem icon="eye" name="Sản phẩm đã xem" />
        <ProfileItem icon="heart" name="Sản phẩm yêu thích" />
        <ProfileItem icon="bookmark" name="Sản phẩm mua sau" />
        <ProfileItem icon="star" name="Sản phẩm đánh giá" />
        <View style={styles.divider}></View>
        <ProfileItem icon="" name="Ưu đãi cho chủ thẻ ngân hàng" />
        <ProfileItem icon="" name="Cài đặt" />
        <View style={styles.divider}></View>
        <ProfileItem icon="help" name="Hỗ trợ" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  bodyContainer: {
    flex: 1,
    backgroundColor: "#ededed",
  },
  //
  userContainer: {
    backgroundColor: "#fff",
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 22,
    alignItems: "center",
  },
  avatarContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1e88e5",
  },
  textContainer: {
    flex: 1,
    marginLeft: 20,
  },
  welcomeText: {
    color: "#828282",
  },
  authText: {
    color: "#1e88e5",
    fontSize: 18,
    fontWeight: "500",
  },
  //
  itemContainer: {
    backgroundColor: "#fff",
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: "center",
  },
  itemText: {
    flex: 1,
    color: "#1e1e1e",
  },
  //
  divider: {
    height: 10,
  },
});

export default Profile;
