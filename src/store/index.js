import { legacy_createStore, combineReducers } from 'redux';
import { tilesReducer, selectedTilesReducer, roundReducer, gameReducer } from './reducers';

const rootReducer = combineReducers({
    tiles: tilesReducer,
    selectedTiles: selectedTilesReducer,
    round: roundReducer,
    game: gameReducer,
})

export const store = legacy_createStore(rootReducer);