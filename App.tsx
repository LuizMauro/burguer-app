import "intl";
import "intl/locale-data/jsonp/pt-BR";
import { StatusBar } from "expo-status-bar";
import React from "react";

import { NavigationContainer } from "@react-navigation/native";

import { colors } from "./src/@styles/colors";

import Routes from "./src/routes";

export default function App() {
  return (
    <NavigationContainer>
      <Routes />
      <StatusBar style="light" backgroundColor={colors.bg} />
    </NavigationContainer>
  );
}
