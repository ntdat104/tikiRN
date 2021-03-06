import React from "react";
import { FlatList, StatusBar, StyleSheet, Text, View } from "react-native";
import { SvgXml } from "react-native-svg";
import Header from "../components/Header";
import { ICONS } from "../constants/icons";
import { Item, NotificationItemProps } from "../types/NotificationItemProps";

const NotificationItem: React.FC<NotificationItemProps> = ({ item }) => (
  <View style={styles.itemContainer}>
    <View style={styles.itemTopContainer}>
      <View
        style={[
          styles.itemTypeContainer,
          {
            backgroundColor: item.type === 1 ? "#fc820a" : "#dc3988",
          },
        ]}
      >
        {item.type === 1 ? (
          <SvgXml xml={ICONS.SALE} width={22} height={22} fill="#fff" />
        ) : (
          <SvgXml xml={ICONS.RESTORE} width={22} height={22} fill="#fff" />
        )}
      </View>
      <View style={styles.itemTopTextContainer}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemDate}>{item.date}</Text>
      </View>
    </View>
    <View>
      <Text style={styles.itemDetail}>{item.detail}</Text>
    </View>
  </View>
);

const Notification: React.FC = () => {
  return (
    <View style={styles.screenContainer}>
      <StatusBar barStyle="light-content" />
      <Header title="Thông báo" />
      <View style={styles.bodyContainer}>
        <View>
          <View style={styles.buttonActiveContainer}>
            <View style={styles.activeMark} />
            <View style={styles.activeIcon}>
              <SvgXml xml={ICONS.HOME} width={22} height={22} fill="#949494" />
            </View>
          </View>
          <View style={styles.buttonInactiveContainer}>
            <SvgXml xml={ICONS.RESTORE} width={22} height={22} fill="#949494" />
          </View>
          <View style={styles.buttonInactiveContainer}>
            <SvgXml xml={ICONS.SALE} width={22} height={22} fill="#949494" />
          </View>
        </View>
        <View style={styles.listContainer}>
          <FlatList
            data={[
              {
                id: 1,
                type: 1,
                name: "Anker Giảm Khủng 40% Duy Nhất Hôm Nay 13/11",
                date: "13/11/2018",
                detail:
                  "Anker Giảm Khủng 40% Duy Nhất Hôm Nay 13/11 - Số Lượng Có Hạn",
              },
              {
                id: 2,
                type: 2,
                name: "GỢI Ý QUÀ TẶNG 20.10",
                date: "02/11/2018",
                detail:
                  "NHẬP MÃ UUDAIT11 GIẢM 50K CHO ĐƠN HÀNG 700K. Áp dụng cho sản phẩm ngành Điện Gia Dụng. XEM NGAY!",
              },
              {
                id: 3,
                type: 1,
                name: "Anker Giảm Khủng 40% Duy Nhất Hôm Nay 13/11",
                date: "13/11/2018",
                detail:
                  "Anker Giảm Khủng 40% Duy Nhất Hôm Nay 13/11 - Số Lượng Có Hạn",
              },
              {
                id: 4,
                type: 2,
                name: "GỢI Ý QUÀ TẶNG 20.10",
                date: "02/11/2018",
                detail:
                  "NHẬP MÃ UUDAIT11 GIẢM 50K CHO ĐƠN HÀNG 700K. Áp dụng cho sản phẩm ngành Điện Gia Dụng. XEM NGAY!",
              },
              {
                id: 5,
                type: 1,
                name: "Anker Giảm Khủng 40% Duy Nhất Hôm Nay 13/11",
                date: "13/11/2018",
                detail:
                  "Anker Giảm Khủng 40% Duy Nhất Hôm Nay 13/11 - Số Lượng Có Hạn",
              },
              {
                id: 6,
                type: 2,
                name: "GỢI Ý QUÀ TẶNG 20.10",
                date: "02/11/2018",
                detail:
                  "NHẬP MÃ UUDAIT11 GIẢM 50K CHO ĐƠN HÀNG 700K. Áp dụng cho sản phẩm ngành Điện Gia Dụng. XEM NGAY!",
              },
            ]}
            keyExtractor={(item: Item) => item.id.toString()}
            renderItem={({ item }: NotificationItemProps) => (
              <NotificationItem item={item} />
            )}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  bodyContainer: {
    flex: 1,
    backgroundColor: "#ededed",
    flexDirection: "row",
  },
  buttonActiveContainer: {
    backgroundColor: "#fff",
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#e5e5e5",
  },
  buttonInactiveContainer: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#e5e5e5",
  },
  activeMark: {
    backgroundColor: "#1e88e5",
    width: 4,
  },
  activeIcon: {
    padding: 12,
    // trick
    marginLeft: -4,
  },
  //
  listContainer: {
    flex: 1,
    borderLeftWidth: 1,
    borderLeftColor: "#e5e5e5",
  },
  //
  itemContainer: {
    backgroundColor: "#fff",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderBottomColor: "#ededed",
    borderBottomWidth: 1,
  },
  itemTopContainer: {
    flexDirection: "row",
  },
  itemTypeContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  itemTopTextContainer: {
    marginRight: 40,
    marginLeft: 4,
  },
  itemName: {
    color: "#000",
    fontWeight: "500",
  },
  itemDate: {
    color: "#787878",
    fontSize: 12,
    marginTop: 8,
  },
  itemDetail: {
    color: "#787878",
    // fontSize: 12,
    marginTop: 12,
  },
});

export default Notification;
