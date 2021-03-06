import React from "react";
import {
  MaterialIcons,
  MaterialCommunityIcons,
  Ionicons,
  Entypo,
  Feather,
} from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import Feed from "./Feed/feed.routes";

import { colors } from "../@styles/colors";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

export default function AppRoutes() {
  const getTabBarVisibility = (route: any) => {
    const routeName = getFocusedRouteNameFromRoute(route) || "";
    const hideOnScreens = ["DetailsProduct"];
    if (hideOnScreens.indexOf(routeName) > -1) return false;
    return true;
  };

  return (
    <Tab.Navigator
      initialRouteName="Feed"
      sceneContainerStyle={{
        borderTopColor: colors.bg,
        backgroundColor: colors.bg,
      }}
      tabBarOptions={{
        activeTintColor: colors.yellow,
        inactiveTintColor: colors.fontColor,
        style: {
          borderTopColor: colors.bg,
          position: "absolute",
          backgroundColor: colors.bg,
          margin: 0,
          overflow: "hidden",
          borderRadius: 25,
          elevation: 1,
        },
      }}
    >
      <Tab.Screen
        name="Message"
        component={Feed}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <Ionicons name="mail-outline" color={color} size={25} />
          ),
        }}
      />

      <Tab.Screen
        name="Favorites"
        component={Feed}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="favorite-outline" color={color} size={25} />
          ),
        }}
      />

      <Tab.Screen
        name="Feed"
        component={Feed}
        options={({ route }) => ({
          tabBarVisible: getTabBarVisibility(route),
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <Entypo name="list" color={color} size={25} />
          ),
        })}
      />

      <Tab.Screen
        name="Cart"
        component={Feed}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <Feather name="shopping-bag" color={color} size={25} />
          ),
        }}
      />

      <Tab.Screen
        name="Account"
        component={Feed}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="account-outline"
              color={color}
              size={25}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
