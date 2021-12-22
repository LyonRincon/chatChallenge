import React from "react";
import { Text, StyleSheet } from "react-native";

interface iNoResultsStrip {
  legend: string;
  extraStyle?: {};
}

export default function NoResultsStrip({
  legend,
  extraStyle,
}: iNoResultsStrip) {
  const styles = StyleSheet.create({
    emptyText: {
      marginTop: 10,
      backgroundColor: "#B2B8BE",
      padding: 10,
      textAlign: "center",
    },
  });
  return <Text style={[styles.emptyText, extraStyle]}>{legend}</Text>;
}
