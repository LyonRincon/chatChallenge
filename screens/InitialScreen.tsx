import * as React from "react";
import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { HelperText, TextInput, Button } from "react-native-paper";
import SimpleHeader from "../components/SimpleHeader";
import { setUser } from "../redux/actions";

export default function InitialScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [text, setText] = React.useState("");
  const [error, hasError] = React.useState(false);

  const submitMessage = () => {
    if (text?.trim().length > 0) {
      dispatch(setUser(text?.trim()));
      navigation.navigate("Chat");
    } else {
      hasError(true);
    }
  };

  return (
    <View style={styles.container}>
      <SimpleHeader title="Ready to Chat!" useBg />
      <View style={styles.subContainer}>
        <TextInput
          autoFocus
          label="Name"
          value={text}
          onChangeText={(text: string) => setText(text)}
          style={styles.input}
          onSubmitEditing={submitMessage}
          activeOutlineColor="#131B24"
          activeUnderlineColor="#131B24"
          blurOnSubmit={false}
        />
        <HelperText type="error" visible={error} style={styles.errorText}>
          Please enter a valid name
        </HelperText>
        <Button
          icon="chat"
          mode="contained"
          onPress={submitMessage}
          color="#B2B8BE"
          style={styles.button}
        >
          Start chat
        </Button>
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
    paddingTop: 40,
    width: "90%",
    alignSelf: "center",
  },
  input: {
    width: "100%",
  },
  errorText: {
    color: "#EB5656",
    fontSize: 15,
  },
  button: {
    marginTop: 10,
  },
});
