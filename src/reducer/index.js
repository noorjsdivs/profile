import { combineReducers } from "redux";

// import { Action } from "history";

const initialState = {
  id: null,
};
const userreducer = (state = initialState, action) => {
  if (action.type == "ACTIVE_USER") {
    return { ...state, id: action.payload };
  } else {
    return state;
  }
};
const rootReducer = combineReducers({
  activeuser: userreducer,
});

export default rootReducer;
