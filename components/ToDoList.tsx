import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import NoResultsStrip from "./NoResultsStrip";
import ToDoItem from "./ToDoListItem";
import { iToDoList } from "../interfaces";
import { changeItemStatus } from "../redux/actions";

export default function ToDoList({ list, completed, splittedView }: iToDoList) {
  const dispatch = useDispatch();
  const styles = StyleSheet.create({
    scrollList: {
      height: "50%",
      borderWidth: 1,
      borderColor: "red",
    },
  });
  return (
    <FlatList
      style={styles.scrollList}
      data={list || []}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <ToDoItem
          key={item.id}
          id={item.id}
          label={item.label}
          completed={completed}
          onChange={() => dispatch(changeItemStatus(item, completed))}
        />
      )}
      ListEmptyComponent={<NoResultsStrip legend={"Add elements to list"} />}
    />
  );
}
