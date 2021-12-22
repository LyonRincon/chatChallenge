import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Switch } from "react-native-paper";

interface iSwitcher {
  value: boolean;
  onChange: () => void;
}

export default function Switcher({ value, onChange }: iSwitcher) {
  const styles = StyleSheet.create({
    switcher: {
      flexDirection: "row",
      height: 50,
      marginTop: 20,
    },
    emptyText: {
      marginTop: 5,
      color: "#B2B8BE",
      paddingLeft: 10,
      paddingRight: 20,
      textAlign: "center",
      fontSize: 16,
    },
  });
  return (
    <View style={styles.switcher}>
      <Text style={styles.emptyText}>Change View</Text>
      <Switch value={value} onValueChange={onChange} color="#B2B8BE" />
    </View>
  );
}
