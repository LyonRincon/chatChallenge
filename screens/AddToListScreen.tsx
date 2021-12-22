import * as React from "react";
import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { HelperText, TextInput, Button } from "react-native-paper";
import SimpleHeader from "../components/SimpleHeader";
import { addItem } from "../redux/actions";
import uuid from "react-native-uuid";

export default function AddToListScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [text, setText] = React.useState("");
  const [error, hasError] = React.useState(false);

  const submitToDo = () => {
    if (text?.trim().length > 0) {
      dispatch(
        addItem({ id: uuid.v4().toString(), label: text, completed: false })
      );
      navigation.navigate("List");
    } else {
      hasError(true);
    }
  };

  return (
    <View style={styles.container}>
      <SimpleHeader
        title="Add to list"
        backToClick={() => navigation.navigate("List")}
      />
      <View style={styles.subContainer}>
        <TextInput
          autoFocus
          label="Todo"
          value={text}
          onChangeText={(text: string) => setText(text)}
          style={styles.input}
          onSubmitEditing={submitToDo}
        />
        <HelperText type="error" visible={error} style={styles.errorText}>
          Please enter a valid ToDo
        </HelperText>
        <Button
          icon="plus"
          mode="contained"
          onPress={submitToDo}
          color="#B2B8BE"
          style={styles.button}
        >
          Add
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
    paddingTop: 20,
    width: "90%",
    alignSelf: "center",
  },
  input: {
    width: "100%",
  },
  errorText: {
    color: "#EB5656",
  },
  button: {
    marginTop: 20,
  },
});
