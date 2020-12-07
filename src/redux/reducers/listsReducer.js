import { CONSTANTS } from "./../action/index";
import state from "./state";
let cardId = 10;
let newState = "";


const setLocal = (newState)=>{
  localStorage.setItem('state', JSON.stringify(newState));
}

const userData = () =>
{
  let newState='';
  if (localStorage.getItem('state')===null){
    newState = state;
    setLocal(newState);
  }
  else
  {
    newState = JSON.parse(localStorage.getItem('state'));
  }
  return newState
};

const listsReducer = (state = userData(), action) => {
  switch (action.type) {
    case CONSTANTS.ADD_CARD:
      const newCardItem = {
        id: cardId,
        name: action.payload.newTask,
        desc:''
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
      setLocal(newState);
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
      setLocal(newState);
      return newState;
    case CONSTANTS.ADD_DESC:
      newState = state.map((list) => {
        if (list.id === action.payload.listid) {
          list.card.forEach((card) => {
            if (card.id === action.payload.cardid) {
              card.desc = action.payload.description;
            }
          });
        }
        return list;
      });
      setLocal(newState);
      return newState;
    default:
      setLocal(state);
      return state;
  }
};

export default listsReducer;
