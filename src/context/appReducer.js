import { LOGED_IN, ALL_POSTS } from "./action.types";

function appReducer(state, action) {
  switch (action.type) {
    case LOGED_IN:
      return {
        ...state,
        userId: action.payload.userId,
        userEmail: action.payload.userEmail,
      };

    case ALL_POSTS:
      return {
        ...state,
        all_post: action.payload,
      };
    default:
      return state;
  }
}

export default appReducer;
