import { CONSTANTS } from "./index";

const addDesc = (description,listid,cardid) => {
  console.log(description,listid,cardid)
  return {
    type: CONSTANTS.ADD_DESC,
    payload: { description, listid, cardid },
  };
};

export default addDesc