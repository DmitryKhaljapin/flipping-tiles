import { colors } from '../assets/colors';
import { createId } from '../utils';

export function createTiles() {
    const idCreator = createId();
    
    const tiles = colors
        .map(color => [{id: idCreator.next().value, color}, {id: idCreator.next().value, color}])
        .flat();

    return tiles;    
}