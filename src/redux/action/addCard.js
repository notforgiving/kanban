import { CONSTANTS } from "./index";

const addCard = (newTask,listid) => {
  return {
    type: CONSTANTS.ADD_CARD,
    payload: { newTask, listid },
  };
};

export default addCard