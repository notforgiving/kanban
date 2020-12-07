import { CONSTANTS } from "./index";

const addDesc = (listid,cardid,description) => {
  return {
    type: CONSTANTS.ADD_DESC,
    payload: { listid,cardid,description},
  };
};

export default addDesc