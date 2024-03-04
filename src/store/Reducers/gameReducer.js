const initialState = {
    gameStatus: 'beforeStart',
}

const START = 'START';
const FINISH = 'FINISH';

export const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'START': {
            return {
                gameStatus: 'started',
            }
        }
        case 'FINISH': {
            return {
                gameStatus: 'finished',
            }
        }
        default: {
            return state
        }
    }
}

export const startTheGameAction = () => ({type: START});
export const finishTheGameAction = () => ({type: FINISH}); 