import { CONSTANTS } from "./index";

const moveCard = (task, listId) => {
  return {
    type: CONSTANTS.MOVE_CARD,
    payload: { task, listId},
  };
};

export default moveCard
