import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { HelperText, TextInput, Button } from "react-native-paper";
import SimpleHeader from "../components/SimpleHeader";
import BotSelector from "../components/BotSelector";
import { setUser } from "../redux/actions";
import { Bots, Colors } from "constants";

export default function InitialScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [text, setText] = React.useState("");
  const [error, hasError] = React.useState(false);
  const [botId, setBotId] = React.useState(0);

  const submitMessage = () => {
    if (text?.trim().length > 0) {
      dispatch(setUser(text?.trim()));
      navigation.navigate("Chat", { botId: botId });
    } else {
      hasError(true);
    }
  };

  const changeBot = (botId: number) => {
    setBotId(botId);
  };

  return (
    <View style={styles.container}>
      <SimpleHeader title="Welcome to BOT chat!" useBg />
      <View style={styles.subContainer}>
        <TextInput
          autoFocus
          label="Name"
          value={text}
          onChangeText={(text: string) => setText(text)}
          style={styles.input}
          onSubmitEditing={submitMessage}
          activeOutlineColor={Colors.bgColor}
          activeUnderlineColor={Colors.bgColor}
          blurOnSubmit={false}
        />
        <HelperText type="error" visible={error} style={styles.errorText}>
          Please enter a valid name
        </HelperText>
        <Button
          icon="chat"
          mode="contained"
          onPress={submitMessage}
          color={Colors.bgThird}
          style={styles.button}
        >
          Start chat
        </Button>
        <View style={styles.botContainer}>
          {Bots.map((bot) => (
            <BotSelector
              key={bot.id}
              id={bot.id}
              name={bot.name}
              avatar={bot.avatar}
              subject={bot.subject}
              selected={botId === bot.id}
              onPress={changeBot}
            />
          ))}
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
    paddingTop: 40,
    width: "90%",
    alignSelf: "center",
  },
  input: {
    width: "100%",
  },
  errorText: {
    color: Colors.error,
    fontSize: 15,
  },
  button: {
    marginTop: 10,
    marginBottom: 30,
  },
  botContainer: {},
});
