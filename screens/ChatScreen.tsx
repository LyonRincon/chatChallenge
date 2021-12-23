import * as React from "react";
import { FlatList, StyleSheet, View, Text } from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/reducers";
import { TextInput, Button, IconButton, Avatar } from "react-native-paper";
import SimpleHeader from "../components/SimpleHeader";
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
          <FlatList
            style={styles.scrollList}
            data={chat || []}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View
                style={[
                  styles.msgBox,
                  item.sender !== "bot" ? styles.msgBoxUser : {},
                ]}
              >
                {item.sender === "bot" && (
                  <Avatar.Image
                    size={45}
                    style={{ backgroundColor: "#131B24" }}
                    source={require("../assets/images/walle.png")}
                  />
                )}
                <View
                  style={item.sender === "bot" ? styles.msgBot : styles.msgUser}
                  key={item.roomId}
                >
                  <Text
                    style={
                      item.sender === "bot"
                        ? styles.msgBotText
                        : styles.msgUserText
                    }
                  >
                    {item.text}
                  </Text>
                </View>
              </View>
            )}
            ListEmptyComponent={
              <View>
                <Text style={styles.noMsgText}>Ready, set, GO!</Text>
              </View>
            }
          />
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
  noMsgText: {
    color: "white",
    fontSize: 18,
    paddingVertical: 10,
    width: "100%",
    textAlign: "center",
  },
  button: {
    width: "10%",
    marginLeft: 25,
  },
  scrollList: {
    height: "100%",
    marginTop: 10,
  },
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
