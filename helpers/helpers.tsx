import { Questions } from "constants";

const getRandomQuestion = (botId: number) => {
  return Questions.find((q: any) => q.botId === botId)?.questions[
    Math.floor(Math.random() * Questions.length)
  ];
};

const getMsgTime = () => {
  var today = new Date();
  return today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
};

export { getRandomQuestion, getMsgTime };
