import { iToDoListItem } from "../../interfaces";

export const addItem = (item: iToDoListItem) => ({
  type: "ADD_ITEM",
  payload: item,
});

export const updateItem = (item: iToDoListItem, isCompleted: boolean) => ({
  type: "UPDATE_ITEM",
  payload: { item, isCompleted },
});

export const changeItemStatus = (
  item: iToDoListItem,
  isCompleted: boolean
) => ({
  type: "CHANGE_ITEM_STATUS",
  payload: { item, isCompleted },
});

export const changeView = () => ({
  type: "CHANGE_VIEW",
});
