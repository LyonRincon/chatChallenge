import React from "react";
import { StyleSheet, Text } from "react-native";
import { Checkbox } from "react-native-paper";

interface iToDoItem {
  id: string;
  label: string;
  completed: boolean;
  onChange: () => void;
}

export default function ToDoListItem({
  id,
  label,
  completed,
  onChange,
}: iToDoItem) {
  const styles = StyleSheet.create({
    label: {
      color: "white",
    },
  });
  return (
    <Checkbox.Item
      status={completed ? "checked" : "unchecked"}
      label={label}
      onPress={onChange}
      labelStyle={styles.label}
    />
  );
}
