import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Feed from "../../screens/Feed";

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
    </Navigator>
  );
}
