import React from "react";
import { Text, StyleSheet } from "react-native";
import { Colors } from "constants";

interface iNoResultsStrip {
  legend: string;
  extraStyle?: {};
}

export default function NoResultsStrip({
  legend,
  extraStyle,
}: iNoResultsStrip) {
  return <Text style={[styles.emptyText, extraStyle]}>{legend}</Text>;
}

const styles = StyleSheet.create({
  emptyText: {
    marginTop: 10,
    backgroundColor: Colors.bgThird,
    padding: 10,
    textAlign: "center",
  },
});
