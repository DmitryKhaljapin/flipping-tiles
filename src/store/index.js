import { legacy_createStore, combineReducers } from 'redux';
import { tilesReducer, selectedTilesReducer, roundReducer } from './Reducers';

const rootReducer = combineReducers({
    tiles: tilesReducer,
    selectedTiles: selectedTilesReducer,
    round: roundReducer,
})

export const store = legacy_createStore(rootReducer);