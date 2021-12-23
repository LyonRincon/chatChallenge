import React from "react";
import { Text, StyleSheet, FlatList, View } from "react-native";
import { iMessageList } from "../interfaces";
import ChatItem from "./ChatItem";

export default function Chat({ chat }: iMessageList) {
  return (
    <FlatList
      style={styles.scrollList}
      data={chat || []}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <ChatItem
          id={item.id}
          text={item.text}
          sender={item.sender}
          time={item.time}
        />
      )}
      ListEmptyComponent={
        <View>
          <Text style={styles.noMsgText}>Ready, set, GO!</Text>
        </View>
      }
    />
  );
}

const styles = StyleSheet.create({
  scrollList: {
    height: "100%",
    marginTop: 10,
  },
  noMsgText: {
    color: "white",
    fontSize: 18,
    paddingVertical: 10,
    width: "100%",
    textAlign: "center",
  },
});
