import { GAME_START, GAME_FINISH } from "../reducers/gameReducer";

export const startTheGameAction = () => ({type: GAME_START});
export const finishTheGameAction = () => ({type: GAME_FINISH}); 