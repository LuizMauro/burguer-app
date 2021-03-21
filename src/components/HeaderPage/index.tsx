import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, View, StyleSheet } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { colors } from "../../@styles/colors";

export default function Header() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <BorderlessButton onPress={navigation.goBack}>
        <MaterialCommunityIcons
          name="chevron-left"
          color={colors.yellow}
          size={40}
        />
      </BorderlessButton>

      <View />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 25,
    backgroundColor: colors.bg,
    borderBottomWidth: 1,
    borderColor: colors.bg,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
