import { ADD_TILE, CLEAR_SELECTED_TILES_LIST } from '../reducers/selectedTilesReducer';

export const addTileAction = (payload) => ({type: ADD_TILE, payload});
export const clearSelectedTilesListAction = () => ({type: CLEAR_SELECTED_TILES_LIST})