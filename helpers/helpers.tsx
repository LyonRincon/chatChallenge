import { Questions } from "../constants/Questions";

const getRandomQuestion = () => {
  return Questions[Math.floor(Math.random() * Questions.length)];
};

const getMsgTime = () => {
  var today = new Date();
  return today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
};

export { getRandomQuestion, getMsgTime };
