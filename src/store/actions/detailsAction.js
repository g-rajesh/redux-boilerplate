import { DELETE_DATA } from "../constants";

const deleteData = () => {
     return {
          type: DELETE_DATA,
          payload: {},
     };
};

export { deleteData };
