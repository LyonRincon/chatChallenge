import * as React from "react";
import { StyleSheet, View } from "react-native";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import SimpleHeader from "../components/SimpleHeader";
import Switcher from "../components/Switcher";
import ToDoList from "../components/ToDoList";
import { RootState } from "../redux/reducers";
import { changeView } from "../redux/actions";

export default function ToDoListScreen() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { completed, incompleted, splittedView } = useSelector(
    (state: RootState) => state.mainReducer
  );
  return (
    <View style={styles.container}>
      <SimpleHeader
        title="ToDo List"
        rightComponent={{
          iconName: "plus",
          onPress: () => navigation.navigate("Add"),
        }}
      />
      <Switcher value={splittedView} onChange={() => dispatch(changeView())} />
      {splittedView ? (
        <>
          <ToDoList
            list={incompleted}
            completed={false}
            splittedView={splittedView}
          />
          <ToDoList
            list={completed}
            completed={true}
            splittedView={splittedView}
          />
        </>
      ) : (
        <ToDoList
          list={[...incompleted, ...completed]}
          completed={false}
          splittedView={splittedView}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#131B24",
    height: "100%",
  },
});
