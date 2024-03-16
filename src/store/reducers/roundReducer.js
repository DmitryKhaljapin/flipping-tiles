const initialState = {
    roundCounter: 1,
}

export const INCREMENT = 'INCREMENT';
export const RESET = 'RESET';

export const  roundReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT: {
            return {
                roundCounter: state.roundCounter + 1,
            }
        }
        case RESET: {
            return {
                roundCounter: 1,
            }
        }
        default: {
            return state
        }
    }
}
