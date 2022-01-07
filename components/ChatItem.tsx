import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Avatar } from "react-native-paper";
import { iMessageItem } from "../interfaces";
import { Colors } from "constants";

export default function ChatItem({
  id,
  text,
  sender,
  time,
  botImage,
}: iMessageItem) {
  return (
    <View style={[styles.msgBox, sender !== "bot" ? styles.msgBoxUser : {}]}>
      {sender === "bot" && (
        <Avatar.Image size={45} style={styles.avatar} source={botImage} />
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
    flexShrink: 1,
  },
  avatar: {
    backgroundColor: Colors.bgColor,
  },
  msgBotText: { color: "black" },
  msgUser: {
    backgroundColor: Colors.bgAlternative,
    borderRadius: 15,
    padding: 10,
    marginLeft: 10,
    alignSelf: "flex-end",
  },
  msgUserText: { color: "white" },
});
