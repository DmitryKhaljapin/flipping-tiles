import { legacy_createStore, combineReducers } from 'redux';
import { tilesReducer } from './Reducers/tilesReducer';
import { selectedTilesReducer } from './Reducers/selectedTilesReducer';

const rootReducer = combineReducers({
    tiles: tilesReducer,
    selectedTiles: selectedTilesReducer,
});

export const store = legacy_createStore(rootReducer);