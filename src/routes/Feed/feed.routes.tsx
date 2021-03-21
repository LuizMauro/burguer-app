import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import Header from "../../components/HeaderPage";

import Feed from "../../screens/Feed";
import DetailsProduct from "../../screens/DetailsProduct";

const { Navigator, Screen } = createStackNavigator();

export default function FeedRoutes() {
  return (
    <Navigator
      initialRouteName="Feed"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Feed" component={Feed} />
      <Screen
        name="DetailsProduct"
        options={{
          headerShown: true,
          header: () => <Header />,
        }}
        component={DetailsProduct}
      />
    </Navigator>
  );
}
