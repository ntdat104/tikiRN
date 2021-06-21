import React from "react";
import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import { SvgXml } from "react-native-svg";
import Header from "../components/Header";
import { ICONS } from "../constants/icons";
import { ProfileItemProps } from "../types/ProfileItemProps";

const ProfileItem: React.FC<ProfileItemProps> = ({ icon, name }) => {
  const renderIcon = (icon: string) => {
    switch (icon) {
      case "list":
        return (
          <SvgXml xml={ICONS.LIST} width={26} height={26} fill="#1e1e1e" />
        );
      case "shopping-cart":
        return (
          <SvgXml
            xml={ICONS.SHOPPINGCART}
            width={26}
            height={26}
            fill="#1e1e1e"
          />
        );
      case "eye":
        return <SvgXml xml={ICONS.EYE} width={26} height={26} fill="#1e1e1e" />;
      case "heart":
        return (
          <SvgXml xml={ICONS.HEART} width={26} height={26} fill="#1e1e1e" />
        );
      case "bookmark":
        return (
          <SvgXml xml={ICONS.BOOKMARK} width={26} height={26} fill="#1e1e1e" />
        );
      case "star":
        return (
          <SvgXml xml={ICONS.STAR} width={26} height={26} fill="#1e1e1e" />
        );
      case "help":
        return (
          <SvgXml xml={ICONS.HELP} width={26} height={26} fill="#1e1e1e" />
        );
    }
  };

  return (
    <View style={styles.itemContainer}>
      {renderIcon(icon)}
      <Text style={[styles.itemText, { marginLeft: icon ? 20 : 0 }]}>
        {name}
      </Text>
      <SvgXml xml={ICONS.ANGLE} width={26} height={26} fill="#1e88e5" />
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
            <SvgXml xml={ICONS.PERSON} width={26} height={26} fill="#fff" />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.welcomeText}>Chào mừng bạn đến với Tiki</Text>
            <Text style={styles.authText}>Đăng nhập/Đăng ký</Text>
          </View>
          <SvgXml xml={ICONS.ANGLE} width={26} height={26} fill="#1e88e5" />
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
