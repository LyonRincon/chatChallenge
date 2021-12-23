import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Avatar } from "react-native-paper";
import { iMessageItem } from "../interfaces";

export default function ChatItem({ id, text, sender, time }: iMessageItem) {
  return (
    <View style={[styles.msgBox, sender !== "bot" ? styles.msgBoxUser : {}]}>
      {sender === "bot" && (
        <Avatar.Image
          size={45}
          style={{ backgroundColor: "#131B24" }}
          source={require("../assets/images/walle.png")}
        />
      )}
      <View style={sender === "bot" ? styles.msgBot : styles.msgUser}>
        <Text style={sender === "bot" ? styles.msgBotText : styles.msgUserText}>
          {text}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  msgBox: {
    flexDirection: "row",
    marginVertical: 5,
    alignItems: "center",
    marginHorizontal: 10,
  },
  msgBoxUser: {
    justifyContent: "flex-end",
  },
  msgBot: {
    backgroundColor: "lightgray",
    borderRadius: 15,
    padding: 10,
    marginLeft: 10,
  },
  msgBotText: { color: "black" },
  msgUser: {
    backgroundColor: "#0399FF",
    borderRadius: 15,
    padding: 10,
    marginLeft: 10,
    alignSelf: "flex-end",
  },
  msgUserText: { color: "white" },
});
