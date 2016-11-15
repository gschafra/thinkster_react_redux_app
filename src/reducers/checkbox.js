export default (state = {}, action) => {
    switch (action.type) {
        case 'TOGGLE':
            return {...state, checked: !state.checked };
    }

    return state;
};