import { iMessageItem } from "../../interfaces";

export const addMessage = (message: iMessageItem) => ({
  type: "ADD_MESSAGE",
  payload: message,
});

export const resetChat = () => ({
  type: "RESET_CHAT",
});

export const setUser = (name: string) => ({
  type: "SET_USER",
  payload: name,
});
