const addMessage = (message) => {
    return {
        type: 'ADD',
        message: message
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        submitNewMessage: function (message) {
            dispatch(addMessage(message));
        }
    }
}

  // Change code below this line