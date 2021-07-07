import { DELETE_DATA } from "../constants";

const initialState = [
     { id: 1, name: "Rajesh G" },
     { id: 2, name: "Sathish G" },
     { id: 3, name: "Jaya G" },
     { id: 4, name: "Guna S" },
];

const reducer = (state = initialState, action) => {
     switch (action.type) {
          case DELETE_DATA:
               return [];
          default:
               return state;
     }
};

export default reducer;
