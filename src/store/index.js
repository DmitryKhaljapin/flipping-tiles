import { legacy_createStore, combineReducers } from 'redux';
import { tilesReducer } from './Reducers/tilesReducer';
import { selectedTilesReducer } from './Reducers/selectedTilesReducer';
import { roundReducer } from './Reducers/roundReducer';

const rootReducer = combineReducers({
    tiles: tilesReducer,
    selectedTiles: selectedTilesReducer,
    round: roundReducer,
})

export const store = legacy_createStore(rootReducer);