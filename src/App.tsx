import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import "react-native-gesture-handler";
import { SvgXml } from "react-native-svg";
import { ICONS } from "./constants/icons";
import Home from "./screens/Home";
import Notification from "./screens/Notification";
import Profile from "./screens/Profile";

const Tab = createBottomTabNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: "#157cdb",
          inactiveTintColor: "#262626",
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: "Trang chủ",
            tabBarIcon: ({ color }) => (
              <SvgXml xml={ICONS.HOME} width={26} height={26} fill={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Notification"
          component={Notification}
          options={{
            tabBarLabel: "Thông báo",
            tabBarIcon: ({ color }) => (
              <SvgXml
                xml={ICONS.NOTIFICATIONS}
                width={26}
                height={26}
                fill={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: "Cá nhân",
            tabBarIcon: ({ color }) => (
              <SvgXml xml={ICONS.PERSON} width={26} height={26} fill={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
