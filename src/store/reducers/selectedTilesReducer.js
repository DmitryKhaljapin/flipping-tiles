const initialState = {
    selectedTiles: [],
}

export const ADD_TILE = 'ADD_TILE';
export const CLEAR_SELECTED_TILES_LIST = 'CLEAR_SELECTED_TILES_LIST';

export const selectedTilesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TILE: {
            return {
                selectedTiles: [...state.selectedTiles, action.payload],
            }
        }
        case CLEAR_SELECTED_TILES_LIST: {
            return {
                selectedTiles: [],
            }
        }
        default: {
            return state;
        }
    }
}
