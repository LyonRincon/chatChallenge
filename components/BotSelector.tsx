import React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Avatar } from "react-native-paper";
import { iBotSelector } from "../interfaces";
import { Colors } from "constants";

export default function BotSelector({
  id,
  name,
  avatar,
  subject,
  selected = false,
  onPress,
}: iBotSelector) {
  return (
    <Pressable
      style={[styles.botBox, selected ? styles.botBoxSelected : {}]}
      onPress={() => onPress(id)}
    >
      <Avatar.Image
        size={45}
        style={{ backgroundColor: Colors.bgColor }}
        source={avatar}
      />
      <View style={styles.nameBox}>
        <Text style={styles.nameBoxText}>{name}</Text>
      </View>
      <Text style={styles.subject}>{subject}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  botBox: {
    flexDirection: "row",
    marginVertical: 5,
    alignItems: "center",
    borderColor: "red",
    borderWidth: 1,
    padding: 10,
    borderRadius: 50,
  },
  botBoxSelected: {
    borderColor: "green",
    borderWidth: 2,
  },
  nameBox: {
    backgroundColor: "lightgray",
    borderRadius: 15,
    padding: 10,
    marginLeft: 10,
  },
  nameBoxText: {},
  subject: {
    color: "white",
    marginLeft: 15,
  },
});
