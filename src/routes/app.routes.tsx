import React from "react";
import {
  MaterialIcons,
  MaterialCommunityIcons,
  Ionicons,
  Entypo,
  Feather,
} from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import Feed from "./Feed/feed.routes";

import { colors } from "../@styles/colors";

const Tab = createMaterialBottomTabNavigator();

export default function AppRoutes() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      activeColor={colors.yellow}
      inactiveColor={colors.fontColor}
      barStyle={{
        position: "absolute",
        backgroundColor: colors.bg,
        margin: 25,
        overflow: "hidden",
        borderRadius: 25,
        elevation: 1,
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
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <Entypo name="list" color={color} size={25} />
          ),
        }}
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
