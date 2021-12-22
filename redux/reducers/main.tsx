import { iToDoListItem } from "../../interfaces";

const initialState = {
  incompleted: [
    {
      id: "11edc52b-2918-4d71-9058-f7285e29d893",
      label:
        "this will be the very very long third item to check for wrapping ",
    },
  ],
  completed: [
    {
      id: "11edc52b-2918-4d71-9058-f7285e29d891",
      label: "first item in list",
    },
    {
      id: "11edc52b-2918-4d71-9058-f7285e29d892",
      label: "second item in list",
    },
  ],
  splittedView: true,
};

interface iAction {
  type: string;
  payload?: any;
}

export default function mainReducer(
  state: any = initialState,
  action: iAction
) {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        incompleted: [...state.incompleted, action.payload],
      };
    case "UPDATE_ITEM":
      return {
        ...state,
        completed: action.payload.isCompleted
          ? state.completed.map((item: iToDoListItem) =>
              item.id === action.payload.item.id ? action.payload.item : item
            )
          : state.completed,
        incompleted: !action.payload.isCompleted
          ? state.incompleted.map((item: iToDoListItem) =>
              item.id === action.payload.item.id ? action.payload.item : item
            )
          : state.incompleted,
      };
    case "CHANGE_ITEM_STATUS":
      return {
        ...state,
        completed: action.payload.isCompleted
          ? [
              ...state.completed.filter(
                (item: iToDoListItem) => item.id !== action.payload.item.id
              ),
            ]
          : [...state.completed, action.payload.item],
        incompleted: !action.payload.isCompleted
          ? state.incompleted.filter(
              (item: iToDoListItem) => item.id !== action.payload.item.id
            )
          : [...state.incompleted, action.payload.item],
      };
    case "CHANGE_VIEW":
      return {
        ...state,
        splittedView: !state.splittedView,
      };

    default:
      return state;
  }
}
