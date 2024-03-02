const initialState = {
    selectedTiles: [],
}

const ADD_TILE = 'ADD_TILE';

export const selectedTilesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TILE': {
            return {
                selectedTiles: [...state.selectedTiles, action.payload]
            }
        }
        default: {
            return state;
        }
    }
}

export const addTileAction = (payload) => ({type: ADD_TILE, payload});