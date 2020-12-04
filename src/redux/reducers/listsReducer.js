import { CONSTANTS } from "./../action/index";
import state from "./state";
let cardId = 10;
let newState = "";

const initialstate = state;

const listsReducer = (state = initialstate, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_CARD:
      const newCardItem = {
        id: cardId,
        name: action.payload.newTask,
      };
      cardId += 1;

      newState = state.map((list) => {
        if (list.id === action.payload.listid) {
          return {
            ...list,
            card: [...list.card, newCardItem],
          };
        } else {
          return list;
        }
      });
      return newState;
    case CONSTANTS.MOVE_CARD:
      let currentTask = "";
      let nextList = action.payload.listId;
      let currentList = "";
      let delid = "";

      state.forEach((list) => {
        list.card.forEach((item, index) => {
          if (action.payload.task === item.name) {
            currentTask = item;
            delid = index;
            currentList = list.id;
          }
        });
      });
      newState = state.map((list) => {
        if (list.id === nextList) {
          return {
            ...list,
            card: [...list.card, currentTask],
          };
        } else if (list.id === currentList) {
          list.card.splice(delid, 1);
          return list;
        } else return list;
      });

      return newState;
    case CONSTANTS.ADD_DESC:
      newState = state.map((list) => {
        if (list.id === action.payload.listid) {
          list.card.forEach((card) => {
            console.log(card);
            if (card.id === action.payload.cardid) {
              card.desc = action.payload.description;
            }
            console.log(card);
          });
        }
        return list;
      });
      return newState;
    default:
      return state;
  }
};

export default listsReducer;
