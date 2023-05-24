// Define ADD, addMessage(), messageReducer(), and store here:

const ADD = 'ADD';

const messageReducer = (state = [], action) => {
    switch (action.type) {
        case ADD:
            return new Array(...state, action.message);
        default:
            return state;
    }
};

const addMessage = (message) => {
    return {
        type: ADD,
        message
    }
};

const store = Redux.createStore(messageReducer);