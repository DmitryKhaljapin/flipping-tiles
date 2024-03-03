const initialState = {
    roundCounter: 1,
}

const INCREMENT = 'INCREMENT';
const RESET = 'RESET';

export const  roundReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT': {
            return {
                roundCounter: state.roundCounter + 1,
            }
        }
        case 'RESET': {
            return {
                roundCounter: 1,
            }
        }
        default: {
            return state
        }
    }
}

export const incrementRoundCounterAction = () => ({type: INCREMENT});
export const resetRoundCounterAction = () => ({type: RESET});