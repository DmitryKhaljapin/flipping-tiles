import { createTiles } from '@/services/createTiles';
import { shuffle } from '@/utils';

const initialState = {
    tiles: shuffle(createTiles())
}

const SET_DISAPPERED = 'SET_DISAPPERED';
const RESET_DISAPPERED = 'RESET_DISAPPERED';

export const tilesReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_DISAPPERED': {
            const newTilesList = state.tiles.map(tile => {
                if (action.payload.some(selectedTile => selectedTile.id === tile.id)) tile.isDisappered = true;
                return tile
            })
            return {
                tiles: newTilesList
            };
        }
        case 'RESET_DISAPPERED': {
            return {
                tiles: shuffle(createTiles())
            };
        }
        default: {
            return state;
        } 
    }
}

export const setDisapperedAction = (payload) => ({type: SET_DISAPPERED, payload});
export const resetDispperedAction = () => ({type: RESET_DISAPPERED});