const initialState = {
  name: null,
  chat: [],
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
    case "ADD_MESSAGE":
      return {
        ...state,
        chat: [...state.chat, action.payload],
      };
    case "RESET_CHAT":
      return {
        ...state,
        name: "",
        chat: [],
      };
    case "SET_USER":
      return {
        ...state,
        name: action.payload,
      };

    default:
      return state;
  }
}
