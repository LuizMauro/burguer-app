import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { AntDesign } from "@expo/vector-icons";

import Header from "../../components/HeaderPage";

import Feed from "../../screens/Feed";
import DetailsProduct from "../../screens/DetailsProduct";

import * as S from "../../screens/DetailsProduct/styles";
import { colors } from "../../@styles/colors";

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
          header: () => (
            <Header
              ButtonLeft={
                <S.ButtonShared>
                  <AntDesign
                    name="sharealt"
                    color={colors.fontColor}
                    size={25}
                  />
                </S.ButtonShared>
              }
            />
          ),
        }}
        component={DetailsProduct}
      />
    </Navigator>
  );
}
