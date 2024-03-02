const initialState = {
    roundCounter: 1
}

const INCREMENT = 'INCREMENT';
const RESET = 'RESET';

export const  roundReducer = (state = initialState, action) => {
    switch (action.type) {
        default: {
            return state
        }
    }
}

export const incrementAction = () => ({type: INCREMENT});
export const resetAction = () => ({type: RESET});