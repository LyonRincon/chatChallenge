import * as React from "react";
import { FlatList, StyleSheet, View, Text } from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/reducers";
import { TextInput, Button, IconButton, Avatar } from "react-native-paper";
import SimpleHeader from "../components/SimpleHeader";
import Chat from "../components/Chat";
import { addMessage, resetChat } from "../redux/actions";
import * as helpers from "../helpers/helpers";
import uuid from "react-native-uuid";

export default function ChatScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [text, setText] = React.useState("");
  const { chat, name } = useSelector((state: RootState) => state.mainReducer);

  useFocusEffect(
    React.useCallback(() => {
      setTimeout(() => {
        dispatch(
          addMessage({
            id: uuid.v4().toString(),
            text: helpers.getRandomQuestion(),
            sender: "bot",
            time: helpers.getMsgTime(),
          })
        );
      }, 3000);
    }, [])
  );

  const submitMessage = () => {
    if (text?.trim().length > 0) {
      dispatch(
        addMessage({
          id: uuid.v4().toString(),
          text: text?.trim(),
          sender: name,
          time: helpers.getMsgTime(),
        })
      );
      setText("");
      setTimeout(() => {
        dispatch(
          addMessage({
            id: uuid.v4().toString(),
            text: helpers.getRandomQuestion(),
            sender: "bot",
            time: helpers.getMsgTime(),
          })
        );
      }, 3000);
    }
  };

  const endChat = () => {
    dispatch(resetChat());
    navigation.pop(1);
  };

  return (
    <View style={styles.container}>
      <SimpleHeader title={`${name} to WALL-E`} backToClick={endChat} />
      <View style={styles.subContainer}>
        <View style={styles.chatContainer}>
          <Chat chat={chat} />
        </View>
        <View style={styles.msgContainer}>
          <TextInput
            autoFocus
            value={text}
            onChangeText={(text: string) => setText(text)}
            style={styles.input}
            onSubmitEditing={submitMessage}
            activeOutlineColor="#131B24"
            activeUnderlineColor="#131B24"
            blurOnSubmit={false}
          />
          <IconButton
            icon="send"
            color={"#0399FF"}
            size={40}
            style={styles.button}
            onPress={submitMessage}
            disabled={text.trim().length === 0}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#131B24",
    height: "100%",
  },
  subContainer: {
    paddingTop: 10,
    width: "100%",
    alignSelf: "center",
    flex: 1,
  },
  chatContainer: {
    width: "100%",
    height: "85%",
  },
  msgContainer: {
    width: "100%",
    alignSelf: "center",
    height: "15%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 10,
    borderTopWidth: 1,
    borderTopColor: "lightgray",
  },
  input: {
    width: "75%",
    borderRadius: 10,
    borderColor: "#131B24",
    borderWidth: 0,
  },
  button: {
    width: "10%",
    marginLeft: 25,
  },
});
