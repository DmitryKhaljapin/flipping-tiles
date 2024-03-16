const initialState = {
    gameStatus: 'beforeStart',
}

export const GAME_START = 'GAME_START';
export const GAME_FINISH = 'GAME_FINISH';

export const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        case GAME_START: {
            return {
                gameStatus: 'started',
            }
        }
        case GAME_FINISH: {
            return {
                gameStatus: 'finished',
            }
        }
        default: {
            return state
        }
    }
}