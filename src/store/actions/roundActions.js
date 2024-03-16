import { INCREMENT, RESET } from '../reducers/roundReducer';

export const incrementRoundCounterAction = () => ({type: INCREMENT});
export const resetRoundCounterAction = () => ({type: RESET});