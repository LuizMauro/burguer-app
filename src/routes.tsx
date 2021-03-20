/* eslint-disable no-nested-ternary */
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import AppRoutes from "./routes/app.routes";

const { Navigator, Screen } = createStackNavigator();

export default function Routes() {
  return (
    <Navigator>
      <Screen
        name="AppRoutes"
        component={AppRoutes}
        options={{ headerShown: false }}
      />
    </Navigator>
  );
}
