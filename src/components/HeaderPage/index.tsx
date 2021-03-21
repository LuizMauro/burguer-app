import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, View, StyleSheet } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { colors } from "../../@styles/colors";

interface IProps {
  ButtonLeft: React.ReactNode | null;
}

export default function Header({ ButtonLeft }: IProps) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <BorderlessButton onPress={navigation.goBack}>
        <MaterialCommunityIcons
          name="chevron-left"
          color={colors.fontColor}
          size={40}
        />
      </BorderlessButton>

      {ButtonLeft}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingTop: 50,
    backgroundColor: colors.bg,
    borderColor: colors.bg,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
