import { LOGED_IN } from "./action.types";

function appReducer(state, action) {
  switch (action.type) {
    case LOGED_IN:
      return {
        ...state,
        userId: action.payload.userId,
        userEmail: action.payload.userEmail,
      };
    default:
      return state;
  }
}

export default appReducer;
