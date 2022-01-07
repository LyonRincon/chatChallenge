import * as React from "react";
import { StyleSheet, View } from "react-native";
import {
  useNavigation,
  useFocusEffect,
  useRoute,
} from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/reducers";
import { TextInput, IconButton } from "react-native-paper";
import SimpleHeader from "../components/SimpleHeader";
import Chat from "../components/Chat";
import { addMessage, resetChat } from "../redux/actions";
import * as helpers from "../helpers/helpers";
import uuid from "react-native-uuid";
import { Bots, Colors } from "constants";

export default function ChatScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const route = useRoute();
  const [text, setText] = React.useState("");
  const { chat, name } = useSelector((state: RootState) => state.mainReducer);
  const botId = route?.params?.botId;
  const bot = Bots.find((b) => b.id === botId);

  useFocusEffect(
    React.useCallback(() => {
      setTimeout(() => {
        dispatch(
          addMessage({
            id: uuid.v4().toString(),
            text: helpers.getRandomQuestion(botId),
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
            text: helpers.getRandomQuestion(botId),
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
      <SimpleHeader title={`${name} to ${bot?.name}`} backToClick={endChat} />
      <View style={styles.subContainer}>
        <View style={styles.chatContainer}>
          <Chat chat={chat} bot={bot} />
        </View>
        <View style={styles.msgContainer}>
          <TextInput
            autoFocus
            value={text}
            onChangeText={(text: string) => setText(text)}
            style={styles.input}
            onSubmitEditing={submitMessage}
            activeOutlineColor={Colors.bgColor}
            activeUnderlineColor={Colors.bgColor}
            blurOnSubmit={false}
          />
          <IconButton
            icon="send"
            color={Colors.bgAlternative}
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
    backgroundColor: Colors.bgColor,
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
    borderColor: Colors.bgColor,
    borderWidth: 0,
  },
  button: {
    width: "10%",
    marginLeft: 25,
  },
});
