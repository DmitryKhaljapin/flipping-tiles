import { createTiles } from '@/services/createTiles';
import { shuffle } from '@/utils';

const initialState = {
    tiles: shuffle(createTiles())
}

export const tilesReducer = (state = initialState, action) => {
    switch(action.type) {
        default: {
            return state;
        } 
    }
}