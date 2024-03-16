import { SET_DISAPPERED, RESET_DISAPPERED } from "../reducers/tilesReducer";

export const setDisapperedAction = (payload) => ({type: SET_DISAPPERED, payload});
export const resetDispperedAction = () => ({type: RESET_DISAPPERED});