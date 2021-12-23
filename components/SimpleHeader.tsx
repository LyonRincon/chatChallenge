import React from "react";
import { StyleSheet } from "react-native";
import { Appbar } from "react-native-paper";
import { iSimpleHeader } from "../interfaces";

export default function SimpleHeader({
  title,
  backToClick,
  rightComponent,
  useBg = false,
}: iSimpleHeader) {
  const styles = StyleSheet.create({
    header: {
      backgroundColor: useBg ? "#B2B200" : "#131B24",
    },
  });
  return (
    <Appbar.Header style={styles.header}>
      {backToClick && <Appbar.BackAction onPress={backToClick} />}
      <Appbar.Content title={title} />
      {rightComponent && (
        <Appbar.Action
          icon={rightComponent.iconName}
          onPress={rightComponent.onPress}
        />
      )}
    </Appbar.Header>
  );
}
